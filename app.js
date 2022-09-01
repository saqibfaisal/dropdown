let object = {
    iphone: {
        v13: {
            ram: 4,
            rom: 64,
            price: 200000,

        },
        v13pro: {
            ram: 6,
            rom: 128,
            price: 250000,
        },
        v14: {
            ram: 6,
            rom: 128,
            price: 300000,
        }
    },
    infinix: {
        hot9play: {
            ram: 4,
            rom: 64,
            price: 18000,
        },
        hot10: {
            ram: 6,
            rom: 128,
            price: 25000,
        },
        smart5: {
            ram: 2,
            rom: 32,
            price: 15000,
        }
    },
    redmi: {
        v9c: {
            ram: 4,
            rom: 64,
            price: 18000,
        },
        v9d: {
            ram: 4,
            rom: 64,
            price: 18000,
        },
        v9e: {
            ram: 8,
            rom: 64,
            price: 20000,
        }
    },
    realmi:{
        c11:{
            ram:2,
            rom:32,
            price:15000,
        }
    }
}
// console.log(object.infinix.hot10)
// console.log(object.infinix)

// console.log (object)
// let model = "iphone"

let key = Object.keys(object)
for (var i = 0; i < key.length; i++) {
    document.getElementById("mobileName").innerHTML += `
    <option>${key[i]}</option>`
}
mobiles()
function myOption(value) {
    document.getElementById("model").innerHTML = " "
    let key = Object.keys(value)
    for (var i = 0; i < key.length; i++) {
        document.getElementById("model").innerHTML += `
    <option>${key[i]}</option>`

    }

}
function mobiles() {
    let mobile = document.getElementById("mobileName")
    // console.log(mobile.value)
    if (mobile.value == "infinix") {
        myOption(object.infinix)
    } else if (mobile.value == "iphone") {
        myOption(object.iphone)
    } else if (mobile.value == "redmi") {
        myOption(object.redmi)
    } else if (mobile.value == "realmi") {
        myOption(object.realmi)
    }
    

}
function searchVal() {
    // let txt = " "
    let mobile = document.getElementById("mobileName")
    // console.log(mobile.value)
    let model = document.getElementById("model")
    // console.log(model.value)
    var a = mobile.value
    // var a = "infinix"
    var b = model.value
    // var b = "hot10"
    // object[a][b]
    // console.log(object[a][b])
    var Json = JSON.stringify(object[a][b]);  
    document.getElementById("para").innerHTML = `<h3>${Json}</h3>`
    // document.write(Json)

}