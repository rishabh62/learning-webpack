async function sendbulk(res, reqList, next) {
    console.log("appa")
}

const sleep = ms => new Promise(res => setTimeout(res, ms));

async function sendbulk2(rf, i) {
    await sleep(1000);
    rf.push(i)
    console.log("manp executed now")
}

async function bulk(res, reqList, next) {
    let rf = []
    var i;
    for (i = 0; i < 8; i++) {
        let segmentFunction = async () => {
            console.log("print")
            console.log(i)
            return i;
        }


        sendbulk(res, reqList, next).
            then(
                sendbulk2(rf, i)
            )
    }

    Promise.all(rf)
    return rf

}

tr = bulk(1, 3, 4)
console.log(tr)
console.log("manp")