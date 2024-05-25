
import { useState } from 'react'
import './Meniu.css'
import kategorijos from './meniuSarasas.js'


function Meniu (){
    let [dabartinis, pakeisti] = useState(null);
    return(
        <>
             {dabartinis!=null &&
                <div className="modal">
                    <div className="modal-content">
                        <div className="close" onClick={function() {
                            pakeisti(null);
                        }}>&times;</div>
                        <img className="patPav"
                            src="https://tea.gr/wp-content/uploads/2023/03/39114.jpg"
                            alt="new"
                        />
                        <p>dabartinis patiekalas yra {dabartinis}</p>
                    </div>
                </div>
            }
        <div id="meniuzemiau">
            {kategorijos.map(function(kategorija){
                return (
                    <div className="deze">
                        <div className="pav2">{kategorija.pavadinimas}</div>
                        <div className="tarpas">    </div>
                        {kategorija.patiekalai.map(function(patiekalas){
                            return (
                                <>
                                    <div className="eilute"onClick={function() {
                                        pakeisti(patiekalas.pavadinimas)
                                          }}>
                                       <div className="pasirinkimas">{patiekalas.pavadinimas}</div>
                                       <div className="taskai"></div>
                                        <div className="kaina">{patiekalas.kainaEUR} Eur</div>
                                    </div>
                                     <div className="ingrediantai">{patiekalas.aprasymas}</div>
                                </>
                            )
                        })}
                        <img className="ikona" src={kategorija.ikona}/>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Meniu