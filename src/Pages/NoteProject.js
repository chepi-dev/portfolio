import Profl from "../Img/Profl.png";
import Geex from "../Img/Geex.png";
import Gbit from "../Img/Gbit.png";

const NoteProject = () => {
  return (
    <>
      <div
        id="about"
        className="container mx-auto"
        style={{ overflow: "hidden" }}
      >
        <div className="p-4 text-2xl font-bold flex justify-center items-center md:mt-16 mt-20">
          <h1 className="md:text-3xl text-xl">My Project</h1>
        </div>
        <div
          className="bg-yellow grid md:grid-cols-3 grid-cols-1 gap-4 px-4"
          // style={{ backgroundColor: "yellow" }}
        >
          <div className="shadow-xl flex flex-col items-start justify-start bg-black rounded-lg">
            <img src={Geex} alt="Gambar 1" className="mb-2"></img>
            <p className="text-white text-left">Teks untuk gambar 1</p>
          </div>
          <div className="shadow-xl flex flex-col items-start justify-start bg-black rounded-lg">
            <img src={Gbit} alt="Gambar 2" className="mb-2"></img>
            <p className="text-white text-left">Teks untuk gambar 2</p>
          </div>
          <div className="shadow-xl flex flex-col items-start justify-start bg-black rounded-lg">
            <img src={Profl} alt="Gambar 3" className="mb-2"></img>
            <p className="text-white text-left">Teks untuk gambar 3</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteProject;
