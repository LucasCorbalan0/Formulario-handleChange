const Registro = (props) => {
    return (
        <div className=" border-1 border-black rounded-3xl bg-gray-50 p-4 flex flex-col gap-6 w-full items-center">

              <h2 className="text-2xl font-bold mb-4 ">
                Personas Registradas
              </h2>
              <ul className="space-y-2">
                {props.usuarios.map((usuario, index) => (
                  <li key={index}>
                  {index + 1}. {usuario.nombre} {usuario.apellido} - {usuario.edad} años
                  </li>
                ))}
              </ul>
 
        </div>
    );
  };
  export default Registro;