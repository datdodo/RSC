import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RSC_00 from "../IMG/RSC/RSC_00.webp";
import RSC_02 from "../IMG/RSC/RSC_02.webp";
import RSC_04 from "../IMG/RSC/RSC_04.webp";
import RSC_06 from "../IMG/RSC/RSC_06.webp";
import RSC_08 from "../IMG/RSC/RSC_08.webp";
import RSC_10 from "../IMG/RSC/RSC_10.png";
import RSC_12 from "../IMG/RSC/RSC_12.webp";
import RSC_14 from "../IMG/RSC/RSC_14.webp";

export const meta: MetaFunction = () => {
  return [
    { name: "charSet", content: "UTF-8" },
    {
      name: "viewport",
      content:
        "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
    },
    { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
    { name: "title", content: "Ryan Sports Club" },
    { name: "msapplication-TileColor", content: "#fff" },
    { name: "msapplication-config", content: "/IMG/Favicon/browserconfig.xml" },
    { name: "theme-color", content: "#fff" },
  ];
};

export default function Index() {
  const fclts = [
    { img: RSC_02, name: "Indoor Sports", path: "/facilities/indoor" },
    { img: RSC_04, name: "Outdoor Sports", path: "/facilities/outdoor" },
    { img: RSC_06, name: "Recreation Sports", path: "/facilities/recreation" },
  ];
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
  const cts = [
    { type: "tel", icon: "fa-circle-phone", text: "+98265610080" },
    { type: "email", icon: "fa-envelope", text: "ryansports@gmail.com" },
    {
      type: "address",
      icon: "fa-location-dot",
      text: "10th Floor - Burj Khalifa, Dubai, UAE",
    },
  ];
  return (
    <>
      <Header />
      <main className="text-white bg-black">
        <div className="m-img relative">
          <img
            src={RSC_00}
            alt="RSC_00"
            className="transform translate-z-10000"
          ></img>
          <div className="m-img__text text-zinc-900 text-6xl bg-[rgba(255,255,255,0.4)] absolute top-1/2 left-1/4 anmt2">
            Welcome To Ryan Sport Club
          </div>
        </div>
        <div className="m-fclt">
          <div className="m-fclt__title h-[15vh] text-4xl bg-zinc-900 border-2 border-solid border-cyan-400 flex justify-center items-center">
            FACILITIES
          </div>
          <div className="m-fclt__content max-w-[70%] flex-[0_0_70%] grid grid-cols-3 gap-4 p-4 m-auto overflow-auto]">
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
        </div>
        <div className="m-membership h-[90vh]">
          <div
              className="m-membership__title h-[15vh] text-4xl bg-zinc-900 border-2 border-solid border-cyan-400 flex justify-center items-center">
            MEMBERSHIP
          </div>
          <div className="m-membership__content h-[75vh] bg-black relative">
            <img src={RSC_08} alt="RSC_08" className="h-full float-right"></img>
            <div className="m-membership__text h-full w-1/2 flex justify-center items-center flex-col absolute">
              <div className="m-membership__text-main text-cyan-400 text-4xl">
                40% Off Membership!
              </div>
              <Link
                to="/membership"
                className="m-membership__text-btn w-[10vw] h-[2.5vw] border-2 border-solid border-cyan-400 flex justify-center items-center m-4 anmt"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
        <div className="m-events">
          <div className="m-events__title h-[15vh] text-4xl bg-zinc-900 border-2 border-solid border-cyan-400 flex justify-center items-center">
            EVENTS
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
                <div className="m-events__desc h-1/4 text-2xl bg-zinc-900 border-t-2 border-solid border-cyan-400 flex justify-center items-center">
                  {vnt.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="m-cts">
          <div className="m-cts__title h-[15vh] text-4xl bg-zinc-900 border-2 border-solid border-cyan-400 flex justify-center items-center">
            CONTACT US
          </div>
          <div className="m-cts__content h-auto bg-zinc-900 flex mt-4">
            <div className="m-cts__main max-w-[60%] flex-[0_0_60%] m-auto">
              <div className="m-cts__intro h-4/5 border-b-2 border-dotted border-white px-2">
                <p>
                  Ryan Sports Club is not just a name; it’s a community where
                  passion for sports and fitness thrives. We understand that
                  sports are more than just games; they are a way of life.
                  That’s why we’ve created a hub that not only provides you with
                  the latest sports information but also equips you with the
                  finest fitness gear and infrastructure services to bring your
                  sporting dreams to life. <br />
                  <br />
                  Information Hub: Our club is a beacon for sports enthusiasts,
                  offering real-time updates, detailed analytics, and a
                  comprehensive library of sports information. Whether you’re
                  tracking your favorite team’s progress or looking for expert
                  commentary, Ryan Sports Club is your reliable source for all
                  sports-related queries.
                  <br />
                  <br />
                  Fitness Equipment Store: At Ryan Sports Club, we believe that
                  the right equipment can make all the difference in your
                  fitness journey. Our curated selection of fitness equipment is
                  designed to cater to a variety of workout styles and
                  preferences. From the casual jogger to the professional
                  athlete, we have something for everyone. <br />
                  <br />
                  Infrastructure Expertise: Imagine having your very own soccer
                  pitch or basketball court. With Ryan Sports Club, this dream
                  can become a reality. Our dedicated team of designers and
                  builders specializes in creating custom sports facilities that
                  meet the highest standards of quality and design. Whether
                  you’re looking to build a community playground or a
                  professional-level sports arena, we have the expertise to
                  deliver excellence.
                </p>
              </div>
              <div className="m-cts__sp h-1/5">
                {cts.map((ct) => (
                  <div key={ct.type} className={`m-cts__${ct.type}`}>
                    <i className={`fa-sharp fa-regular ${ct.icon} px-2`}></i>
                    <span>{ct.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="m-cts__map max-w-[40%] flex-[0_0_40%] m-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115525.73856510432!2d55.19197486709517!3d25.197174173836935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2s!4v1718071501634!5m2!1sen!2s"
                loading="lazy"
                className="h-[545px] w-full border-2 border-solid border-zinc-900"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
