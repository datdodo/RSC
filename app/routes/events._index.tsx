import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "@remix-run/react";
import RSC_10 from "~/IMG/RSC/RSC_10.png";
import RSC_12 from "~/IMG/RSC/RSC_12.webp";
import RSC_14 from "~/IMG/RSC/RSC_14.webp";

export default function Events() {
  const vnts = [
    {
      img: RSC_10,
      name: "UEFA Champions League 2024",
      css: "h-full",
      path: "/events/uefa",
    },
    {
      img: RSC_12,
      name: "NBA Champions League 2024",
      css: "w-full",
      path: "/events/nba",
    },
    {
      img: RSC_14,
      name: "Olympic 2024",
      css: "w-full",
      path: "/events/olympic",
    },
  ];
  return (
    <>
      <Header />
      <main className="pt-[5rem] h-[100vh] text-white bg-black flex justify-center items-center flex-col">
        <div
            className="w-[70%] text-4xl before:content-[''] before:grow before:m-auto before:border-b-2 before:border-solid before:border-white after:content-[''] after:grow after:m-auto after:border-b-2 after:border-solid after:border-white flex justify-center items-center">EVENTS
        </div>
        <div className="m-events__content max-w-[70%] flex-[0_0_70%] grid grid-cols-3 gap-4 p-4 m-auto">
          {vnts.map((vnt) => (
              <Link
                  key={vnt.img}
                  to={vnt.path}
                  className="m-events__item border-2 border-solid border-cyan-400 anmt anmt4"
              >
                <div className="m-events__img-ctn h-3/4 bg-black flex justify-center items-center">
                  <img
                      src={vnt.img}
                      alt={vnt.img}
                      className={`m-events__img ${vnt.css}`}
                  />
                </div>
                <div
                    className="m-events__desc h-1/4 text-2xl bg-zinc-900 border-t-2 border-solid border-cyan-400 flex justify-center items-center">
                  {vnt.name}
                </div>
              </Link>
          ))}
        </div>
      </main>
      <Footer/>
    </>
  );
}
