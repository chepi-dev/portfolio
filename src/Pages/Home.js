import Profl from "../Img/Profl.png";
const Home = () => {
  return (
    <div id="home" className="container mx-auto" style={{ overflow: "hidden" }}>
      <div className="flex flex-col items-center justify-center pt-36 sm:flex-row sm:pt-36">
        <div className="text-center sm:text-left sm:mr-56">
          <h1 className="mt-12 text-4xl sm:text-4xl text-gray-800 font-bold text-left">
            Hi! Saya <span className="text-orange">Name</span>
          </h1>
          <p className="text-gray-700 mt-2 text-left">Profesi </p>
        </div>
        <div className="mt-36 sm:mt-0 sm:ml-48 relative">
          <div className="absolute inset-0 bg-y opacity-50 rounded-xl filter blur-lg"></div>
          <img
            src={Profl}
            alt="Avatar"
            className="h-56 w-56 rounded-full relative z-10 bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
