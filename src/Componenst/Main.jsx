
import { useState } from 'react';
import Registro from "./Registro";
import Formulario from "./Formulario";
import Lateral from "./Lateral";

const Main = () => {
  const [usuarios, setUsuarios] = useState([]);
    return (
      <div className="bg-cyan-200 flex h-[525px] p-4 gap-4">
        <div className="w-1/6 ">
            <Lateral />
        </div>    
        <div className="flex-1 flex">
            <Registro usuarios={usuarios} />
        </div>
        <div className="flex-1 flex items-center justify-center">
            <Formulario setUsuarios={setUsuarios} usuarios={usuarios}/>
        </div>
       
      </div>
    );
  };
  export default Main;