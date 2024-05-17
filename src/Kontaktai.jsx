import puodukai from '/puodukai.png'
import './Kontaktai.css'

function Kontaktai (){
    return(
        <>
        
        <div id="kontaktaizemiau">
            <div className="tekstas">
                <div id="kontaktai">Kontaktai</div>
                <div id="vieta">
                    <div className="spalva">Adresas:</div>
                    <a id="link" href="https://maps.app.goo.gl/CMR4LrnLfPjCELqe8">Vilniaus licėjus, Širvintų g. 82, 08216 Vilnius</a>
                </div>
                <div id="tel" className="spalva">Telefono nr.: +370XXXXXXXX</div>
                <div id="pastas" className="spalva">El. paštas: trumpa.pertraukele@gmail.com</div>
            </div>
            <img className="puod" src={puodukai}/>
        </div>
        </>
    )
}

export default Kontaktai