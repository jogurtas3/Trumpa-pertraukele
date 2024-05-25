
import letena from '/letena.svg'
import moto from '/pagrindinis_pav.png'
import { useNavigate } from 'react-router-dom'
import './Homepage.css'

function Homepage (){
    const navigate=useNavigate()

    return (
    <>
        <div id="homepagezemiau">
            <div id="mygt">
                <div className="myg2">
                    <img className="letena" src={letena}/>
                    <button onClick={function (){navigate("/Meniu")}} className="spausk">Meniu</button>
                </div>
                <div className="myg2">
                    <img className="letena" src={letena}/>
                    <button onClick={function (){navigate("/Kontaktai")}} className="spausk">Kontaktai</button>
                </div>
            </div>
            <img id="moto" src={moto}/>
        </div>
      </>
    )
}

export default Homepage