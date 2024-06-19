import { Link } from "@remix-run/react";
import RSC from "../IMG/RSC/RSC.png";
import { useState } from "react";

export default function Header() {
  const [submn, setSubmn] = useState(false);
  const nav = [
    { name: "EVENTS", path: "/events" },
    { name: "MEMBERSHIP", path: "/membership" },
    { name: "CONTACT US", path: "/contactus" },
    { name: "STORE", path: "/store" },
  ];
  const subnav = [
    { name: "Indoor Sports", path: "/facilities/indoor" },
    { name: "Outdoor Sports", path: "/facilities/outdoor" },
    { name: "Recreation", path: "/facilities/recreation" },
  ];
  return (
    <>
      <header className="h-20 bg-[rgba(0,0,0,0.8)] flex z-[1] fixed">
        <div className="h-main max-w-[50%] flex-[0_0_50%] flex">
          <div className="h-main__logo max-w-[20%] flex-[0_0_20%] flex justify-center items-center">
            <img src={RSC} alt="RSC" className="h-4/5"></img>
          </div>
          <div className="h-main__info max-w-[80%] flex-[0_0_80%] text-white">
            <div className="h-info__name h-3/5 text-2xl py-1">
              Ryan Sport Club
            </div>
            <div className="h-info__mn h-2/5 flex">
              <div className="h-mn__tel max-w-[2.5%] flex-[0_0_2.5%] flex justify-center items-center">
                <i className="fa-sharp fa-regular fa-circle-phone"></i>
              </div>
              <Link
                to="tel:+98265610080"
                className="h-tel__text max-w-[17.5%] flex-[0_0_17.5%] flex justify-center items-center anmt"
              >
                +98265610080
              </Link>
              <div className="h-mn__email max-w-[2.5%] flex-[0_0_2.5%] flex justify-center items-center ml-[2.5%]">
                <i className="fa-light fa-envelope"></i>
              </div>
              <Link
                to="mailto:ryansports@gmail.com"
                className="h-email__text max-w-[27.5%] flex-[0_0_27.5%] flex justify-center items-center anmt"
              >
                ryansport@gmail.com
              </Link>
              <div className="h-mn__address max-w-[2.5%] flex-[0_0_2.5%] flex justify-center items-center ml-[2.5%]">
                <i className="fa-sharp fa-regular fa-location-dot"></i>
              </div>
              <Link
                to="https://maps.app.goo.gl/g1ESoCNdAwRKZUqW7"
                className="h-address__text max-w-[42.5%] flex-[0_0_42.5%] flex justify-center items-center anmt"
              >
                10th Floor - Burj Khalifa, Dubai, UAE
              </Link>
            </div>
          </div>
        </div>
        <div className="h-navbar max-w-[50%] flex-[0_0_50%]">
          <ul className="h-navbar__list h-full text-white flex">
            <Link
              to="/"
              className="h-navbar__detail max-w-[15%] flex-[0_0_15%] flex justify-center items-center anmt"
            >
              HOME
            </Link>
            <div
              className="h-navbar__detail max-w-[15%] flex-[0_0_15%]"
              onMouseEnter={() => setSubmn(true)}
              onMouseLeave={() => setSubmn(false)}
            >
              <Link
                to="/facilities"
                className="h-full flex justify-center items-center anmt"
              >
                FACILITIES
              </Link>
              {submn && (
                <ul className="h-fclt__list bg-[rgba(0,0,0,0.8)] flex flex-col">
                  {subnav.map((sbnv) => (
                    <Link
                      key={sbnv.name}
                      to={sbnv.path}
                      className="h-fclt__detail anmt"
                    >
                      {sbnv.name}
                    </Link>
                  ))}
                </ul>
              )}
            </div>
            {nav.map((nv) => (
              <Link
                key={nv.name}
                to={nv.path}
                className="h-navbar__detail max-w-[15%] flex-[0_0_15%] flex justify-center items-center anmt"
              >
                {nv.name}
              </Link>
            ))}
            <Link
                to="/cart"
                className="h-navbar__detail max-w-[5%] flex-[0_0_5%] flex justify-center items-center anmt"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <Link
              to="/account"
              className="h-navbar__detail max-w-[5%] flex-[0_0_5%] flex justify-center items-center anmt"
            >
              <i className="fa-solid fa-user"></i>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
}