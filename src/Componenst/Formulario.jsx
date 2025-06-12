import { useState , useEffect } from "react";

const Formulario = ({setUsuarios, usuarios}) => {
  const initialState={
    nombre:"",
    apellido:"",
    edad:""
  }
  const [data, setData]= useState(initialState)
  
  const handlechange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.nombre && data.apellido && data.edad) {
      setUsuarios([...usuarios, data]);
      setData(initialState);
    }
  }

useEffect(()=>{
  console.log('usuarios actualizados', usuarios);
},[usuarios]);

    return (
      <form className="border-1 border-cyan-600 rounded-3xl bg-gray-50 p-4 flex flex-col gap-6 "
      onSubmit={handleSubmit}>
          <h3 className="text-lg font-bold mb-4 text-center">Formulario</h3>
          
          <div className="flex gap-4 justify-center">
            <input
              type="text"
              placeholder="nombre"
              className="px-3 py-2 border-1 border-black rounded-lg bg-white box-border w-full max-w-32"
              name="nombre"
              onChange={handlechange}
              value={data.nombre}
            />
            <input
              type="text"
              placeholder="apellido"
              className="px-3 py-2 border-1 border-black rounded-lg bg-white box-border w-full max-w-32"
              name="apellido"
              onChange={handlechange}
              value={data.apellido}
            />
          </div>
  
          <div className="flex justify-center">
            <input
              type="number"
              placeholder="edad"
              className="px-3 py-2 border-1 border-black rounded-lg bg-white box-border"
              name="edad"
              onChange={handlechange}
              value={data.edad}
            />
          </div>
  
          <div className="mt-4 flex justify-end">
            <button className="px-4 py-2 border-1 border-black rounded-lg bg-white cursor-pointer hover:scale-105"
            type="submit"> 
              enviar
            </button>
          </div>
      </form>
    );
  };
  export default Formulario;