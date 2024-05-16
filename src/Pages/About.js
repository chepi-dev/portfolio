import Profl from "../Img/Profl.png";

const About = () => {
  return (
    <>
      <div id="about" className="container mx-auto">
        <h1 className="text-4xl sm:mt-16 ml-8 font-bold text-black mt-20">
          About
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-16 mx-12">
          <div className="bg-black p-6 shadow-lg drop-shadow-xl rounded-lg shadow-yellow">
            <h1 className="text-yellow font-bold mb-4 text-2xl">HI</h1>
            <p className="text-yellow text-xl">
              Dalam contoh ini, saya menambahkan sebuah elemen di dalam kolom 1
              dengan menggunakan kelas text-white untuk memberikan warna teks
              yang kontras pada latar belakang biru (bg-navy). Anda dapat
              mengganti teks di dalam paragraf sesuai dengan kebutuhan Anda.
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg mt-6 sm:mt-0">
            {/* Konten Kolom 2 */}
            <div className="flex flex-col gap-4 max-h-full overflow-auto">
              <h1 className="text-yellow font-bold mb-2 text-2xl">Kolom 2</h1>
              <div className="grid grid-cols-2 sm:gap-4 gap-2">
                <div className="bg-yellow p-4 rounded-xl flex items-center justify-start">
                  <img
                    src={Profl}
                    alt="Profl"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <p className="text-white">child kol 1</p>
                </div>
                <div className="bg-yellow p-4 rounded-xl flex items-center justify-start">
                  <img
                    src={Profl}
                    alt="Profl"
                    className="w-8 h-8 rounded-full mr-2 bg-black
                      "
                  />
                  <p className="text-white">child kol 2</p>
                </div>

                <div className="bg-yellow p-4 rounded-xl flex items-center justify-start">
                  <img
                    src={Profl}
                    alt="Profl"
                    className="w-8 h-8 rounded-full mr-2 bg-black
                      "
                  />
                  <p className="text-white">child kol 3</p>
                </div>

                <div className="bg-yellow p-4 rounded-xl flex items-center justify-start">
                  <img
                    src={Profl}
                    alt="Profl"
                    className="w-8 h-8 rounded-full mr-2 bg-black
                      "
                  />
                  <p className="text-white">child kol 4</p>
                </div>

                <div className="bg-yellow p-4 rounded-xl flex items-center justify-start">
                  <img
                    src={Profl}
                    alt="Profl"
                    className="w-8 h-8 rounded-full mr-2 bg-black
                      "
                  />
                  <p className="text-white">child kol 5</p>
                </div>

                <div className="bg-yellow p-4 rounded-xl flex items-center justify-start">
                  <img
                    src={Profl}
                    alt="Profl"
                    className="w-8 h-8 rounded-full mr-2 bg-black
                      "
                  />
                  <p className="text-white">child kol 6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
