const _ = require('./lib.js')

const data1 = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center",
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

const data2 = [{
    "id": 1,
    "name": "Yong",
    "phone": "010-0000-0000",
    "type": "sk",
    "childnode": [{
        "id": 11,
        "name": "echo",
        "phone": "010-0000-1111",
        "type": "kt",
        "childnode": [{
                "id": 115,
                "name": "hary",
                "phone": "211-1111-0000",
                "type": "sk",
                "childnode": [{
                    "id": 1159,
                    "name": "pobi",
                    "phone": "010-444-000",
                    "type": "kt",
                    "childnode": [{
                            "id": 11592,
                            "name": "cherry",
                            "phone": "111-222-0000",
                            "type": "lg",
                            "childnode": []
                        },
                        {
                            "id": 11595,
                            "name": "solvin",
                            "phone": "010-000-3333",
                            "type": "sk",
                            "childnode": []
                        }
                    ]
                }]
            },
            {
                "id": 116,
                "name": "kim",
                "phone": "444-111-0200",
                "type": "kt",
                "childnode": [{
                    "id": 1168,
                    "name": "hani",
                    "phone": "010-222-0000",
                    "type": "sk",
                    "childnode": [{
                        "id": 11689,
                        "name": "ho",
                        "phone": "010-000-0000",
                        "type": "kt",
                        "childnode": [{
                                "id": 116890,
                                "name": "wonsuk",
                                "phone": "010-000-0000",
                                "type": "kt",
                                "childnode": []
                            },
                            {
                                "id": 1168901,
                                "name": "chulsu",
                                "phone": "010-0000-0000",
                                "type": "sk",
                                "childnode": []
                            }
                        ]
                    }]
                }]
            },
            {
                "id": 117,
                "name": "hong",
                "phone": "010-0000-0000",
                "type": "lg",
                "childnode": []
            }
        ]
    }]
}]

const childnodeFlat = function (el) {
    let res = [];
    (function closure(val) {
        for (const a of val) {
            if (hasChildNode(a)) closure(a.childnode)
            res.push(a)
        }
    })(el)
    return res
}

const hasChildNode = (el) => {
    return el.childnode
}

_.go(
    data1,
    Object.entries,
    _.filter(([k, v]) => typeof v === "object"),
    _.map(([k, v]) => Object.entries(v)),
    _.flatten,
    _.filter(([k, v]) => typeof v === "number"),
    _.map(([k, v]) => k),
    console.log
) // ["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]

_.go(
    data2,
    childnodeFlat,
    _.filter(obj => obj.type === "sk"),
    _.map(obj => obj.name),
    console.log
) // ["solvin", "hary", "chulsu", "hani", "Yong"]

const add = (a, b) => a + b

let test = _.reduce([1, 2, 3, 4], add, 0)
let test2 = _.reduce([1, 2, 3, 4], add)

console.log(test) // 10
console.log(test2) // 10