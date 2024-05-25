import puodukai from '/puodukai.png'
import './Kontaktai.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {Marker} from 'react-map-gl';
import marker from '/map-marker-512.webp';

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
                <Map
                    mapboxAccessToken="pk.eyJ1Ijoidmlza2FudGFzIiwiYSI6ImNsd202Z3FlNDB2OXcycXA4ZDV1dHN2ODYifQ.RZnJ7KhHqUpx3FPsPAmpvw"
                    initialViewState={{
                        longitude: 25.278935248143732,
                        latitude: 54.71241829423884,
                        zoom: 16
                    }}
                    style={{width: 580, height: 350}}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                    <Marker longitude={25.278935248143732} latitude={54.71241829423884} anchor="bottom" >
                         <img className = "markeris" src={marker} />
                    </Marker>
                </Map>
            </div>
            <img className="puod" src={puodukai}/>
        </div>
        </>
    )
}

export default Kontaktai