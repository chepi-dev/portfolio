import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hoverText, setHoverText] = useState("");

  const handleMouseOut = () => {
    setHoverText("");
  };

  return (
    <nav className="bg-black p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex md:flex-col text-creame font-bold text-lg sm:text-xl text-yellow">
          Web Profile
        </div>{" "}
        {/* Atur ukuran teks untuk responsif */}
        <div className="flex md:flex-col sm:block font-bold">
          {" "}
          {/* Tampilkan menu hanya saat layar tidak dalam mode mobile */}
          <Link
            to="/"
            className="text-creame ml-4 py-2 rounded transition-colors duration-100 text-yellow"
            style={{ color: hoverText === "home" ? "grey" : "" }}
            onMouseEnter={() => setHoverText("home")}
            onMouseLeave={handleMouseOut}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-creame ml-4 py-2 rounded transition-colors duration-100 text-yellow"
            style={{ color: hoverText === "about" ? "grey" : "" }}
            onMouseEnter={() => setHoverText("about")}
            onMouseLeave={handleMouseOut}
          >
            About
          </Link>
          <Link
            to="/project"
            className="text-creame ml-4 py-2 rounded transition-colors duration-100 text-yellow"
            style={{ color: hoverText === "NoteProjecet" ? "grey" : "" }}
            onMouseEnter={() => setHoverText("NoteProjecet")}
            onMouseLeave={handleMouseOut}
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
