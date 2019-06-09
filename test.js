
let linkRelations = {
    a: { b: 1, c: 3 },
    b: { d: 7, e: 10 },
    c: { d: 1, e: 6 },
    d: { e: 2 }
}
function findShortPath(linkObj, startPt, end) {
    let startPtToOther = {};
    let parents = {};
    for (const key in linkObj) {
        if (startPt === key) {
            for (const subkey in linkObj[key]) {
                startPtToOther[subkey] = linkObj[key][subkey];
                parents[subkey] = key;
            }
        } else {
            for (const subkey in linkObj[key]) {
                if (!startPtToOther[subkey]) {
                    startPtToOther[subkey] = Infinity;
                    parents[subkey] = undefined;
                }
            }
        }
    }
    let flagMap = {};
    Object.keys(startPtToOther).forEach((key) => {
        flagMap[key] = 0;
    });

    while (Object.keys(flagMap).map(key => flagMap[key]).filter(a => a === 0).length) {
        let povitPtKey;
        for (const key in flagMap) {
            if (!flagMap[key]) {
                if (!povitPtKey) {
                    povitPtKey = key;
                } else if (startPtToOther[key] < startPtToOther[povitPtKey]) {
                    povitPtKey = key;
                }
            }
        }
        flagMap[povitPtKey] = 1;
        let relationPt = linkObj[povitPtKey];
        for (const key in relationPt) {
            if (startPtToOther[povitPtKey] + relationPt[key] < startPtToOther[key]) {
                startPtToOther[key] = startPtToOther[povitPtKey] + relationPt[key];
                parents[key] = povitPtKey;
            }
        }
    }
    let nextPt = parents[end];
    let paths = [end]
    while (nextPt) {
        paths.unshift(nextPt);
        nextPt = parents[nextPt]
    }
    return paths;
}
console.log(findShortPath(linkRelations, 'a', 'e'));