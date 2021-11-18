import { useState } from "react";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";
import {criarPortas} from '../functions/portas'

export default function Home() {

  const [p1, setP1] = useState(new PortaModel(1)) 
  const [texto, setTexto] = useState("...") 
  
  console.log(criarPortas(3, 2))

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)}/>
    </div>
  )
}
