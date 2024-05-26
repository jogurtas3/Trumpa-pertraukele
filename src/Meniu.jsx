
import { useState } from 'react'
import './Meniu.css'
import kategorijos from './meniuSarasas.js'


function Meniu (){
    let [dabartinis, pakeisti] = useState(null);
    let [dabartinisKreps, pakeistiKreps] = useState([]);
    let [dabartinisKrepsMyg, pakeistiKrepsMyg] = useState(false);
    return(
        <>
            {dabartinisKrepsMyg==true &&
                <div className="krepselis">
                    <div className="krepselis-content">
                        <div className="close" onClick={function() {
                            pakeistiKrepsMyg(false);
                        }}>&times;</div>
                        <h3 id="krepselioHead">Jūsų krepšelis</h3>
                        {dabartinisKreps.map(function(krepsioPat){
                            return (
                                <div className="krepselioEilute">
                                    <img className="krepselioPav"
                                      src={krepsioPat.pav}
                                      alt="new"
                                    />
                                    <div className="krepselioPat">
                                        <div className='krepselioPatPavadinimas'>{krepsioPat.pavadinimas}</div>
                                        {/* <div className='krepselioPatAprasymas'>{krepsioPat.aprasymas}</div> */}
                                        <div className='krepselioPatKaina'>{krepsioPat.kainaEUR} €</div>
                                    </div>
                                </div>
                            )
                        })}
                        <button id="uzsakyti" onClick={function() {
                            pakeistiKrepsMyg(false);
                            pakeistiKreps([]);
                        }}>
                            <div style={{display:"flex"}}>
                                <div className='krepselioKiekis'>{dabartinisKreps.length}</div>
                                <div style={{display:"flex", flex: "auto", justifyContent: "space-between", alignItems: "center"}}>
                                    <div>Užsakyti</div>
                                    <div>{
                                        dabartinisKreps.reduce(function(dabartineSuma, patiekalas) {
                                            return dabartineSuma + patiekalas.kainaEUR
                                        }, 0)
                                    } &nbsp; €</div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            }
             {dabartinis!=null &&
                <div className="modal">
                    <div className="modal-content">
                        <div className="close" onClick={function() {
                            pakeisti(null);
                        }}>&times;</div>
                        <img className="patPav"
                            src={dabartinis.pav}
                            alt="new"
                        />
                        <p className='dabartinisPavadinimas'>{dabartinis.pavadinimas}</p>
                        <p className='dabartinisKainaEUR'>{dabartinis.kainaEUR} €</p>
                        <p className='dabartinisAprasymas'>{dabartinis.aprasymas}</p>
                        <button className='detiIKreps' onClick={function() {
                            pakeisti(null);
                            let naujasSarasas = dabartinisKreps.concat(dabartinis);
                            pakeistiKreps(naujasSarasas)
                        }}>Dėti į krepšelį</button>
                    </div>
                </div>
            }
        <div id="meniuzemiau">
            <div id="meniuSarasai">
                {kategorijos.map(function(kategorija){
                    return (
                        <div className="deze">
                            <div className="pav2">{kategorija.pavadinimas}</div>
                            <div className="tarpas">    </div>
                            {kategorija.patiekalai.map(function(patiekalas){
                                return (
                                    <>
                                        <div className="eilute"onClick={function() {
                                            pakeisti(patiekalas)
                                        }}>
                                        <div className="pasirinkimas">{patiekalas.pavadinimas}</div>
                                        <div className="taskai"></div>
                                            <div className="kaina">{patiekalas.kainaEUR} €</div>
                                        </div>
                                    </>
                                    )
                                })}
                            <img className="ikona" src={kategorija.ikona}/>
                        </div>
                    )
                })}
            </div>

            <button id="krepselioMyg" onClick={function() {
                pakeistiKrepsMyg(true)
            }}>Krepšelis</button>
        </div>
        </>
    )
}

export default Meniu