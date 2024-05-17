
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Homepage.jsx';
import Meniu from './Meniu.jsx';
import Kontaktai from './Kontaktai.jsx';
import katukas from '/katukas.svg'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/Meniu",
    element: <Meniu />,
  },
  {
    path: "/Kontaktai",
    element: <Kontaktai />,
  }
]);



function App() {
  return (
    <>

        <div id="navigacija">
            <div id="katukas">
                <img id="logo" src={katukas}/>
                <a>Trumpa pertraukėlė</a>
            </div>
            <button onClick={function (){window.location.href = "/"}} className="spalva" id="myg">Pradžia</button>
        </div>

         <RouterProvider router={router} />
         
    </>
  )
}

export default App
