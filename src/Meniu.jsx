import arbata from '/arbata.svg'
import kava from '/kava.svg'
import uzkandziai from '/uzkandziai.svg'
import desertas from '/desertas.svg'
import './Meniu.css'


function Meniu (){
    return(
        <>
        
        <div id="meniuzemiau">
            <div className="deze">
                <div className="pav2">ARBATA</div>
                <div className="tarpas">    </div>
                <div className="eilute">
                    <div className="pasirinkimas">Juodoji</div>
                    <div className="taskai"></div>
                    <div className="kaina">1,5 Eur</div>
                </div>
                <div className="ingrediantai">Rinkitės iš Irish Cream, Earl Grey ir Golden Snail, papildomai medus ir/ar pienas.</div>
                <div className="eilute">
                    <div className="pasirinkimas">Žalioji</div>
                    <div className="taskai"></div>
                    <div className="kaina">1,5 Eur</div>
                </div>
                <div className="ingrediantai">Rinkitės iš Milk Dragon Pearl, Silver Tips ir Spring Needles, papildomai medus.
                </div>
                <div className="eilute">
                    <div className="pasirinkimas">Baltoji</div>
                    <div className="taskai"></div>
                    <div className="kaina">2,0 Eur</div>
                </div>
                <div className="ingrediantai">Rinkitės iš Yin Zhen, Pai Mu Tan ir Bai Hao Yin Zhen.</div>
                <img className="ikona" src={arbata}/>
            </div>
            <div className="deze">
                <div className="pav2">KAVA</div>
                <div className="tarpas">    </div>
                <div className="eilute">
                    <div className="pasirinkimas">Kapučinas</div>
                    <div className="taskai"></div>
                    <div className="kaina">2,0 Eur</div>
                </div>
                <div className="ingrediantai">Šiltas pienas, espreso ir pieno puta. 1:1:1</div>
                <div className="eilute">
                    <div className="pasirinkimas">Latė</div>
                    <div className="taskai"></div>
                    <div className="kaina">3,0 Eur</div>
                </div>
                <div className="ingrediantai">Espreso, smulkiaputis pienas ir pieno puta. 1:5:0,1</div>
                <div className="eilute">
                    <div className="pasirinkimas">Cinamono kava</div>
                    <div className="taskai"></div>
                    <div className="kaina">4,0 Eur</div>
                </div>
                <div className="ingrediantai">Cinamonas, kava, rudasis cukrus, vanilės ekstraktas, pienas.</div>
                <img className="ikona" src={kava}/>
            </div>
            <div className="deze">
                <div className="pav2">UŽKANDŽIAI</div>
                <div className="tarpas">    </div>
                <div className="eilute">
                    <div className="pasirinkimas">Sumuštinis</div>
                    <div className="taskai"></div>
                    <div className="kaina">2,0 Eur</div>
                </div>
                <div className="ingrediantai">Batonas, kumpis, sūris, agurkas, pomidoras.</div>
                <div className="eilute">
                    <div className="pasirinkimas">Česnakinė duona</div>
                    <div className="taskai"></div>
                    <div className="kaina">4, Eur</div>
                </div>
                <div className="ingrediantai">Duona, česnakas, alyvuogių aliejus, žolelės.</div>
                <div className="eilute">
                    <div className="pasirinkimas">Vaisių salotos</div>
                    <div className="taskai"></div>
                    <div className="kaina">4,5 Eur</div>
                </div>
                <div className="ingrediantai">Mangas, ananasas, arbūzas, drakono vaisius.</div>
                <img className="ikona" src={uzkandziai}/>
            </div>
            <div className="deze">
                <div className="pav2">DESERTAI</div>
                <div className="tarpas">    </div>
                <div className="eilute">
                    <div className="pasirinkimas">Braunis</div>
                    <div className="taskai"></div>
                    <div className="kaina">4,0 Eur</div>
                </div>
                <div className="ingrediantai">Juodasis šokoladas, cukrus, sviestas, kiaušiniai, miltai, vanilės ekstraktas, druska.</div>
                <div className="eilute">
                    <div className="pasirinkimas">Sūrio pyragas</div>
                    <div className="taskai"></div>
                    <div className="kaina">2,0 Eur</div>
                </div>
                <div className="ingrediantai">„Gaidelis“ sausainiai, cukrus, sviestas, kreminis sūris, krakmolas, kiaušiniai, reibi grietinėlė, vanilės ekstraktas.</div>
                <div className="eilute">
                    <div className="pasirinkimas">Raudonasis aksomas</div>
                    <div className="taskai"></div>
                    <div className="kaina">5,0 Eur</div>
                </div>
                <div className="ingrediantai">Kukurūzų krakmolas, saulėgrąžų aliejus, pasukos, kiaušiniai, sviestas, kakava, vanilinis cukrus, actas, soda, filadelfijos sūris, pienas.</div>
                <img className="ikona" src={desertas}/>
            </div>
        </div>
        </>
    )
}

export default Meniu