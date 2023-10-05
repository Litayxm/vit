import './App.css'
import { Boton } from "./components/boton";
import { useState } from"react";

function App({texto}) {
const [estado, setEstado] = useState("Verdadero")
  return (
    <>
      <div>
        <h1>
          {estado}
        </h1>
        <button onClick={()=>{
          if (estado=="Verdadero"){
            setEstado("False");
          }else {
            setEstado("Verdadero");

          }
        }}
        >

          Cambiar estado
        </button>
        <Boton texto={"compras"}></Boton>
        <Boton texto={"carrito"}></Boton>
        <Boton texto={"ayuda"}></Boton>
      </div> 
    </>
  );
}

export default App;
