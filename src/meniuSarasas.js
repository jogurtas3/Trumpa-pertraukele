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
                "pavadinimas": "Irish Cream",
                "aprasymas": "Subtilaus airiško grietinėlės likerio aromato juodoji arbata. Irish Cream arbata pasižymi savo sodriu ir stipriu skoniu, labai silpnai salstelėjusi. Tai geras pasirinkimas kaip nealkoholinis gėrimas vietoje saldaus likerio po vakarienės, puikus vakaro gėrimas. Ši aromatinė arbata puikiai tinka gerti be priedų, bet pridėjus pieno atsiskleidžia kreminis arbatos skonis.",
                "kainaEUR": 3.99,
                "pav": "https://www.skonis-kvapas.lt/2372-product_slider/juodoji-arbata-irish-cream.jpg"
            },
            {
                "pavadinimas": "Sandakphu Gold",
                "aprasymas": "Ypatingai kvapni juodoji arbata iš Nepalo Sandakphu arbatos laukų. Arbatos skonis - tobula simfonija. Skambiausios jos natos: vaisių ir lauko gėlių aromatų derinys. Tai ryškaus charakterio, subalansuoto skonio arbata su ilgai juntamu poskoniu. Sandakphu regione arbatkrūmiai auga nedideliuose vietinių žmonių soduose. Arbata auginama ir apdorojama vien rankų darbo pagalba. Jos pagaminama itin mažai, todėl kaina paprastai yra aukšta. Tačiau kainą nustelbia malonumas, kuris užlieja kūną ir sielą mėgaujantis šią nepaprasta ir itin reta arbata.",
                "kainaEUR": 2.99,
                "pav": "https://www.skonis-kvapas.lt/8291-product_slider/juodoji-nepalo-arbata-sandakphu-gold.jpg"
            },
            {
                "pavadinimas": "Love Fragrance",
                "aprasymas": "Arbata dviems,- švelniai salsva, primenanti vaikystėje pamėgtus vaisinius ledinukus. Juodosios arbatos, vaisių, uogų ir kvapnių prieskonių mišinys. Tingiems savaitgalio pusryčiams labai tiks žaisminga spinduliuojanti kibirkštėle žvalinančio gėrimo puodelyje.",
                "kainaEUR": 2.99,
                "pav": "https://www.skonis-kvapas.lt/2360-product_slider/juodoji-arbata-love-fragrance.jpg"
            },
            {
                "pavadinimas": "Sandakphu Snow",
                "aprasymas": "Žalioji arbata iš Nepalo Sandakphu arbatos laukų. Čia arbatkrūmiai auga nedideliuose vietinių žmonių soduose. Arbata auginama ir apdorojama vien rankų darbo pagalba. Kruopštaus darbo rezultatas - malonus šviežumo pojūtis, stiprus bei turtingas gėlių ir vaisių aromatas, ilgai besitęsiantis malonus arbatos poskonis.",
                "kainaEUR": 2.99,
                "pav": "https://www.skonis-kvapas.lt/13443-product_slider/zalioji-nepalo-arbata-sandakphu-snow.jpg"
            },
            {
                "pavadinimas": "Sencha",
                "aprasymas": "Tradicinė, šviežiai nupjautos žolės, špinatų aromato žalioji japoniška arbata, populiariausia arbatos rūšis Japonijoje. Paprastai geriama be cukraus. Gelsvai žalsvos spalvos, saldi, rūgšti, šiek tiek karti tuo pat metu, švelnaus aromato. Sustokite puodeliui sencha, kai dienai reikia trupučio dzen.",
                "kainaEUR": 2.99,
                "pav": "https://www.skonis-kvapas.lt/2466-product_slider/zalioji-arbata-japan-sencha.jpg"
            },
            {
                "pavadinimas": "Peach Melba",
                "aprasymas": "Vaisinės arbatos mišinys su persikų, obuolių, egzotinių vaisių aromatu. Švelnaus ir gaivaus skonio, saldžių vaisių aromato gėrimas tinka bet kuriuo paros metu, o atšaldytas karštą vasaros dieną nuramins, atgaivins ir pradžiugins.",
                "kainaEUR": 2.99,
                "pav": "https://www.skonis-kvapas.lt/2427-product_slider/vaisine-arbata-peach-melba.jpg"
            },
            {
                "pavadinimas": "Sodo gaiva",
                "aprasymas": "Saldžių gervuogių bei prisirpusių vyšnių skonio arbata. Sodrios raudonos spalvos, rūgštoko skonio gėrimas, kvepiantis ką tik nuskintomis uogomis, puikiai gaivina. Vasarą geriant šaltą su citrina, žiemą - karštą su medum, praskaidrins vakarą ar popietę. Mėgstama vaikučių arbata.",
                "kainaEUR": 2.99,
                "pav": "https://www.skonis-kvapas.lt/2429-product_slider/vaisine-arbata-rod-grod.jpg"
            },
            {
                "pavadinimas": "Baltas angelas",
                "aprasymas": "Švelnaus skonio baltoji arbata, pagardinta uogų ir vaisių gabalėliais bei gėlių žiedlapiais. Kruopščiai nuskinta ir švelniai oksiduota stengiantis sukelti kuo mažiau streso arbatos lapeliams. Itin švelnus, malonaus aromato gėrimas, dvelkiantis romantika. Mėgaukitės juo ilgą žiemos vakarą, darganotą dieną ar net karštą vasaros popietę. Arbatos puodelis tebus Jūsų geros, pakilios nuotaikos sargu.",
                "kainaEUR": 2.99,
                "pav": "https://www.skonis-kvapas.lt/2337-product_slider/baltoji-arbata-baltas-angelas.jpg"
            },
            {
                "pavadinimas": "Bai Hao Yin Zhen",
                "aprasymas": "Subtilaus aromato, išraiškingo skonio baltoji arbata gurmanams. Gaminama vien iš arbatos pumpurėlių - pačių jauniausių, švelniausių, minkščiausių arbatos lapelių. Kruopščiai rankomis apdorojama arbata, pasak legendos, jaunų mergelių auksinėmis žirklutėmis skinama auštant, tik kartą metuose. Ši sidabriškai baltų lapelių imperatoriškoji arbata puikiai atgaivina ir maloniai nuteikia visai dienai.",
                "kainaEUR": 2.99,
                "pav": "https://www.skonis-kvapas.lt/2333-product_slider/baltoji-arbata-bai-hao-yin-zhen.jpg"
            },
            {
                "pavadinimas": "Marcipanas",
                "aprasymas": "Rooibos raudonoji arbata su marcipanų aromatu. Rooibos - smulkūs Pietų Afrikoje augančio krūmo lapeliai, iš kurių daroma švelni, natūraliai salstelėjusi, sodrios raudono gintaro spalvos arbata be kofeino.",
                "kainaEUR": 2.99,
                "pav": "https://www.skonis-kvapas.lt/2402-product_slider/raudonoji-rooibos-arbata-marzipan.jpg"
            },
        ],
    },
    {
        "pavadinimas": "KAVA",
        "ikona": kava,
        "patiekalai": [
            {
                "pavadinimas": "Caffè macchiato",
                "aprasymas": "Espreso kavos gėrimas su nedideliu kiekiu pieno su puta.",
                "kainaEUR": 3.99,
                "pav": "https://www.nims.it/nims2.xtro.it/repository/1/4/8745/10267/86765/86775/86776/ita-86777.jpg",
            },
            {
                "pavadinimas": "Cappuccino",
                "aprasymas": "Kavos gėrimas gaminamas iš šilto pieno, espreso ir pieno putos, ruošiamas 1:1:1.",
                "kainaEUR": 2.99,
                "pav": "https://karmabar.lt/wp-content/uploads/2023/01/gettyimages-500740897.webp"
            },
            {
                "pavadinimas": "Latte",
                "aprasymas": "Šilto pieno gėrimas su espreso kava. Gėrimas gaminamas iš espreso, smulkiapučio pieno ir pieno putos, ruošiamas 1:5:0,1.",
                "kainaEUR": 3.99,
                "pav": "https://coffeeaffection.com/wp-content/uploads/2021/05/Spanish-latte-milk-and-espresso.jpg",
            },
            {
                "pavadinimas": "Flat white",
                "aprasymas": "Kavos gėrimas, susidedantis iš espreso kavos ir garuose virto pieno.",
                "kainaEUR": 3.99,
                "pav": "https://images2.minutemediacdn.com/image/upload/c_crop,w_3000,h_1687,x_0,y_19/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/mentalfloss/01hrq37exrgh372xezp7.jpg",
            },
            {
                "pavadinimas": "Espresso",
                "aprasymas": " Itin stipri, sodraus skonio ir aromato tonizuojanti kava, kilusi iš Milano.",
                "kainaEUR": 3.99,
                "pav": "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80",
            },
            {
                "pavadinimas": "Americano",
                "aprasymas": "Kavos gėrimas, ruošiamas atskiedus espreso kavos puodelį karštu vandeniu santykiu 1:3–1:4.",
                "kainaEUR": 3.99,
                "pav": "https://www.foodandwine.com/thmb/9JyfZPcxlV9ubEeuSznhO-M4q0w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Americano-FT-BLOG0523-b8e18cc340574cc9bed536cceeec7082.jpg",
            },
            {
                "pavadinimas": "Cortado",
                "aprasymas": "Espreso kava, praskiestas šiltu pienu.",
                "kainaEUR": 3.99,
                "pav": "https://methodicalcoffee.com/cdn/shop/articles/cortado_1024x.jpg?v=1701124707",
            },
            {
                "pavadinimas": "Caffè mocha",
                "aprasymas": "Šokolado skonio šiltas gėrimas, caffè latte atmaina.",
                "kainaEUR": 3.99,
                "pav": "https://bigcupofcoffee.com/wp-content/uploads/2023/05/cafe-mocha.jpg",
            },
            {
                "pavadinimas": "Affogato",
                "aprasymas": "Espreso kava, pateikiama su ledais.",
                "kainaEUR": 3.99,
                "pav": "https://static01.nyt.com/images/2021/08/15/magazine/affogato/affogato-superJumbo-v2.jpg",
            },
            {
                "pavadinimas": "Airiška kava",
                "aprasymas": "Karštas gėrimas, gaminamas iš kavos, airiško viskio, plaktos grietinėlės ir rudo cukraus.",
                "kainaEUR": 3.99,
                "pav": "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/02/Irish-Coffee-2.jpg",
            },
        ], 
    },
    {
        "pavadinimas": "UŽKANDŽIAI",
        "ikona": uzkandziai,
        "patiekalai": [
            { 
                "pavadinimas": "Tofu kąsneliai",
                "aprasymas": "Ypač kietas tofu, supjaustytas kubeliais, tada apkeptas iki auksinės spalvos.",
                "kainaEUR": 4.99,
                "pav": "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/air_fryer_crispy_tofu_18906_16x9.jpg"
            },
            { 
                "pavadinimas": "Kumpio ir sūrio panini",
                "aprasymas": "Sumuštinis su kumpiu ir sūriu su paprasta balta duona.",
                "kainaEUR": 5.99,
                "pav": "https://d1e3z2jco40k3v.cloudfront.net/-/media/frenchsuk18/recipes/relish/ham-and_cheese-panini.jpg?h=322&iar=0&w=500&rev=4dba173fb950411ab298765026496dae&hash=C58E4A77056EE168DEB0948720465BA0"
            },
            { 
                "pavadinimas": "Keptos vištienos sumuštinis",
                "aprasymas": "Duona, kepta vištiena, salotų lapai, pomidorų skiltelės ir agurkų skiltelės.",
                "kainaEUR": 5.99,
                "pav": "https://assets.unileversolutions.com/v1/99096055.jpg?im=AspectCrop=(580,435);Resize=(580,435)"
            },
            { 
                "pavadinimas": "Angliški pusryčiai",
                "aprasymas": "Keptas kiaušinis, kiaulienos dešrelė, gruzdinta šoninė, pievagrybiai, pupelės, Sourdough duonos skrebutis.",
                "kainaEUR": 7.99,
                "pav": "https://images.eatsmarter.com/sites/default/files/styles/1600x1200/public/english-breakfast-561628.jpg"
            },
            { 
                "pavadinimas": "Tortilija su avokadu ir kiaušiniais",
                "aprasymas": "Avokadai, plakti kiaušiniai, čederis tortilijoje su pomidorais, salotomis, jogurtiniu padažu.",
                "kainaEUR": 6.99,
                "pav": "https://vs-express.lt/wp-content/uploads/2020/01/Omletas-su-avokadu-tortilijoje.jpg"
            },
            { 
                "pavadinimas": "Croque Madame",
                "aprasymas": "Keptas kiaušinis, sumuštinių duona, Bechamel padažas, čederis, kietasis sūris, kiaulienos kumpis, špinatai.",
                "kainaEUR": 6.49,
                "pav": "https://www.foodandwine.com/thmb/xM-KOuy_eX8jUJHzXjMBu7xAYxA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/croque-madame-FT-RECIPE0222-2da2bb82f1004613b0c65bad6e2fceb5.jpg"
            },
            { 
                "pavadinimas": "Cezario salotos su vištiena",
                "aprasymas": "Kepta vištienos filė, virtas kiaušinis, ančiuvių padažas (arba medaus-garstyčių), vyšniniai pomidorai, kietasis sūris, krutonai, ridikėlių daigai.",
                "kainaEUR": 8.49,
                "pav": "https://derlingas.lt/wp-content/uploads/2024/01/Cezario-salotos-su-Vistiena-2-930x620.jpg"
            },
            { 
                "pavadinimas": "Avokado skrebutis",
                "aprasymas": "Sourdough duonos skrebutis, avokadai, vyšniniai pomidorai, mocarela.",
                "kainaEUR": 4.99,
                "pav": "https://www.skanauksuausra.com/wp-content/uploads/2019/04/IMG_2758-2.jpg"
            },
            { 
                "pavadinimas": "Varškės virtinukai",
                "aprasymas": "Su grietinėle ir šilauogėmis arba sviesto padažu",
                "kainaEUR": 5.49,
                "pav": "https://media.lrytas.lt/images/2022/04/01/131229562-c56e83a9-e879-467e-9af9-9b4d5b4c5c90.jpg"
            },
            { 
                "pavadinimas": "Kepti varškėtukai",
                "aprasymas": "Su avietėmis ir graikišku jogurtu",
                "kainaEUR": 5.49,
                "pav": "https://www.maistomegeja.lt/wp-content/uploads/2022/02/DSC02013-2.jpg"
            }
        ],
    },
    {
        "pavadinimas": "DESERTAI",
        "ikona": desertas,
        "patiekalai": [
            { 
                "pavadinimas": "Ekleras su egzotinių vaisių įdaru",
                "aprasymas": "Sviestas, universalūs miltai, kiaušiniai, pienas, grietinėlė, cukraus pudra, drakono vaisius, pasiflora.",
                "kainaEUR": 3.99,
                "pav": "https://caffeine.lt/wp-content/uploads/2022/07/egzotinu_vaisiu_ekleras.webp"
            },
            { 
                "pavadinimas": "Sūrio pyragas su sausainiais",
                "aprasymas": "Sviestas, kreminis sūris, kiaušiniai, krekeriai, sausainiai.",
                "kainaEUR": 3.99,
                "pav": "https://caffeine.lt/wp-content/uploads/2023/12/Caffeine_surio-pyragas.webp"
            },
            { 
                "pavadinimas": "Cinamoninė bandelė",
                "aprasymas": "Kvietiniai miltai, pienas, sviestas, cinamonas, cukrus.",
                "kainaEUR": 3.99,
                "pav": "https://caffeine.lt/wp-content/uploads/2022/12/Cinamonine.webp"
            },
            { 
                "pavadinimas": "Tinginys su sūria karamele",
                "aprasymas": "Saldintas kondensuotas pienas, sausainiai, sviestas, karamelė",
                "kainaEUR": 3.99,
                "pav": "https://caffeine.lt/wp-content/uploads/2024/03/Caffeine_tinginys_su_suria_karamele_ir_spragesiais.webp"
            },
            { 
                "pavadinimas": "Ekleras su pistacijų įdaru",
                "aprasymas": "Sviestas, universalūs miltai, kiaušiniai, pienas, grietinėlė, cukraus pudra, pistacijos.",
                "kainaEUR": 3.99,
                "pav": "https://caffeine.lt/wp-content/uploads/2021/05/pistaciju_ekleras.webp"
            },
            { 
                "pavadinimas": "Šokoladinis keksas",
                "aprasymas": "Kiaušiniai, miltas, kefyras, sviestas, cukrus, šokoladas.",
                "kainaEUR": 3.99,
                "pav": "https://caffeine.lt/wp-content/uploads/2020/09/keksas_su_sokoladu.webp"
            },
            { 
                "pavadinimas": "Braunis su karamele",
                "aprasymas": "Kiaušiniai, miltas, sviestas, cukrus, šokoladas, karamelė.",
                "kainaEUR": 3.99,
                "pav": "https://caffeine.lt/wp-content/uploads/2020/09/Braunis.webp"
            },
            { 
                "pavadinimas": "Keksas su mėlynėmis",
                "aprasymas": "Kiaušiniai, miltas, kefyras, sviestas, cukrus, mėlynės.",
                "kainaEUR": 3.99,
                "pav": "https://caffeine.lt/wp-content/uploads/2020/09/keksas_su_melynem.webp"
            },
            { 
                "pavadinimas": "Klasikinis sūrio pyragas",
                "aprasymas": "Sviestas, kreminis sūris, kiaušiniai, krekeriai.",
                "kainaEUR": 3.99,
                "pav": "https://caffeine.lt/wp-content/uploads/2020/09/Surio-pyragas.webp"
            },
            { 
                "pavadinimas": "Tinginys su matcha arbata",
                "aprasymas": "Saldintas kondensuotas pienas, sausainiai, sviestas, matcha milteliai",
                "kainaEUR": 3.99,
                "pav": "https://caffeine.lt/wp-content/uploads/2024/03/Caffeine_tinginys_su_matcha_arbata.webp"
            }
        ],
    }
]

export default kategorijos