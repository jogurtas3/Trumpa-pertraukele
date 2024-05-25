import arbata from '/arbata.svg'
import kava from '/kava.svg'
import uzkandziai from '/uzkandziai.svg'
import desertas from '/desertas.svg'

let kategorijos = [
    {
        "pavadinimas": "ARBATA",
        "ikona": arbata,
        "patiekalai": [
            { 
                "pavadinimas": "juodoji",
                "aprasymas": "Rinkitės iš Irish Cream, Earl Grey ir Golden Snail, papildomai medus ir/ar pienas.",
                "kainaEUR": 3.99
            },
            {
                "pavadinimas": "zalioji",
                "aprasymas": "dar rinkis",
                "kainaEUR": 2.99
            }
        ],
    },
    {
        "pavadinimas": "KAVA",
        "ikona": kava,
        "patiekalai": [
            {
                "pavadinimas": "late",
                "aprasymas": "kazas",
                "kainaEUR": 3.99
            },
            {
                "pavadinimas": "kapucinas",
                "aprasymas": "dar kazkas",
                "kainaEUR": 2.99
            }
        ], 
    },
]

export default kategorijos