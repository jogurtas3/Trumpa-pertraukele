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
                "kainaEUR": 3.99,
                "pav": "https://tea.gr/wp-content/uploads/2023/03/39114.jpg"
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
                "kainaEUR": 3.99,
                "pav": "https://www.foodandwine.com/thmb/0cJWTx1_qsIJJE74hWLZ5rHWvsE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Cappuccino-FT-BLOG0523-d2eed8fcd48d464282176339908662f7.jpg",
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