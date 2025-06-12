// Header Component
const Header = () => {
    return (
      <form className="flex justify-between bg-cyan-950 border-1 border-black p-2 ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="logo" className="h-10 animate-pulse bg" />
        <nav className="flex justify-center gap-2">
            <input type="text" className="border-1 border-black rounded-lg text-white p-2" />
            <button className="border-1 border-black rounded-lg px-2 cursor-pointer hover:scale-105">buscar</button>
        </nav>
      </form>
    );
  };
  export default Header;