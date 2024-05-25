let data = {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ],
    "boss": {"firstName": "tom", "age": 53}
}

let uzkandziai = [
    {"pavadinimas": "cepelinas", "aprasymas": "bulves, mesa, grietine", "kainaEUR":6.99},
    {"pavadinimas": "kotletas", "aprasymas": "mesa", "kainaEUR":4.99}
]

uzkandziai.forEach(function(uzk){
    console.log(uzk.pavadinimas)
    console.log(uzk.aprasymas)
    console.log(uzk.kainaEUR)
})

let kategorijos = [
    {"pavadinimas": "arbata", "patiekalai":[
        {"pavadinimas": "juodoji", "aprasymas": "rinkis", "kainaEUR":3.99},
        {"pavadinimas": "zalioji", "aprasymas": "dar rinkis", "kainaEUR":2.99}
    ]},
    {"pavadinimas": "kava", "patiekalai":[
        {"pavadinimas": "late", "aprasymas": "kazas", "kainaEUR":3.99},
        {"pavadinimas": "kapucinas", "aprasymas": "dar kazkas", "kainaEUR":2.99}
    ]}
]

kategorijos.forEach(function(kategorija){
    console.log(kategorija.pavadinimas)
    kategorija.patiekalai.forEach(function(patiekalas){
        console.log(patiekalas.pavadinimas)
    })
})

// let dvigubiSkaiciai = skaiciai.map(function(skaicius) {
//     console.log(skaicius)
//     return skaicius * 2
// })

// console.log("CIAAAA", dvigubiSkaiciai)



// console.log(uzkandziai[0].pavadinimas)
// console.log(uzkandziai[0].aprasymas)
// console.log(uzkandziai[0].kainaEUR)
// console.log(uzkandziai[1].pavadinimas)
// console.log(uzkandziai[1].aprasymas)
// console.log(uzkandziai[1].kainaEUR)

// console.log(data.employees[0].firstName)
// console.log(data.boss)





// for (let i = skaiciai.length-1; i > -1; i = i - 2) {
//     console.log(skaiciai[i])
// }





// skaiciai.forEach(function(skaicius, index) {
//     console.log(skaicius, index)
// })

// for (let i=50; i>-1; i = i - 1) {
//     if (i == 10) {
//        i = 9
//     }
//     console.log (i)
// }



// let tekstas = "labas"

// if (tekstas == "labas") {
//     console.log('vienodi')
// }

let skaiciai = [5, 10, 20]
skaiciai.forEach(function(skaic){
    console.log(skaic)
})

let dvigubiSkaiciai = skaiciai.map(function(skaic){
    skaic=skaic*2
    return skaic
})

console.log(dvigubiSkaiciai)

skaiciai.reduce(function(currentSum, skaicius) {
    return currentSum + skaicius
}, 0)
