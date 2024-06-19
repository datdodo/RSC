import { Link } from "@remix-run/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RSC_02 from "../IMG/RSC/RSC_02.webp";
import RSC_04 from "../IMG/RSC/RSC_04.webp";
import RSC_06 from "../IMG/RSC/RSC_06.webp";

export default function Facilities() {
  const fclts = [
    { img: RSC_02, name: "Indoor Sports", path: "/facilities/indoor" },
    { img: RSC_04, name: "Outdoor Sports", path: "/facilities/outdoor" },
    { img: RSC_06, name: "Recreation Sports", path: "/facilities/recreation" },
  ];
  return (
    <>
      <Header />
      <main className="h-[110vh] text-white bg-black flex justify-center items-center flex-col">
          <div className="w-[70%] text-4xl before:content-[''] before:grow before:m-auto before:border-b-2 before:border-solid before:border-white after:content-[''] after:grow after:m-auto after:border-b-2 after:border-solid after:border-white flex justify-center items-center">FACILITIES</div>
        <div className="m-fclt__content max-w-[70%] flex-[0_0_70%] grid grid-cols-3 gap-4 p-4 overflow-auto">
          {fclts.map((fclt) => (
            <Link
              key={fclt.img}
              to={fclt.path}
              className="m-fclt__item border-2 border-solid border-cyan-400 anmt anmt4"
            >
                <div className="m-fclt__img h-3/4 flex justify-center items-center overflow-hidden">
                    <img
                        src={fclt.img}
                        alt={fclt.img}
                        className="min-w-full min-h-full"
                    />
                </div>
                <div
                    className="m-fclt__desc h-1/4 text-2xl bg-zinc-900 border-t-2 border-solid border-cyan-400 flex justify-center items-center">
                    {fclt.name}
                </div>
            </Link>
          ))}
        </div>
      </main>
        <Footer/>
    </>
  );
}
