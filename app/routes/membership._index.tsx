import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Membership() {
    const mbstb = [
        {title:"1 Month Basic",ft1:"2 hours/day",ft2:"Wi-Fi Access",ft3:"No",ft4:"No",ft5:"No",price:"100$"},
        {title:"1 Month Premium",ft1:"Unlimited",ft2:"Wi-Fi Access",ft3:"Exclusive Equipments",ft4:"Personal Trainer",ft5:"+1 Basic Membership",price:"150$"},
        {title:"6 Months Basic",ft1:"2 hours/day",ft2:"Wi-Fi Access",ft3:"No",ft4:"No",ft5:"No",price:"500$"},
        {title:"6 Months Premium",ft1:"Unlimited",ft2:"Wi-Fi Access",ft3:"Exclusive Equipments",ft4:"Personal Trainer",ft5:"+1 Basic Membership",price:"750$"},
        {title:"1 Year Basic",ft1:"2 hours/day",ft2:"Wi-Fi Access",ft3:"No",ft4:"No",ft5:"No",price:"1000$"},
        {title:"1 Year Premium",ft1:"Unlimited",ft2:"Wi-Fi Access",ft3:"Exclusive Equipments",ft4:"Personal Trainer",ft5:"+1 Basic Membership",price:"1500$"},
    ]
  return (
    <>
        <>
            <Header />
            <main className="h-[100vh] text-white bg-black flex justify-center items-center">
                <div className="m-events__content max-w-[80%] flex-[0_0_80%] grid grid-cols-6 gap-4 p-4 m-auto">
                    {mbstb.map((mbs) => (
                        <div key={mbs.title} className={'border-2 border-solid border-cyan-400'}>
                            <div className="mbs-tt text-cyan-400 bg-zinc-900 py-4 text-center">{mbs.title}</div>
                            <ul className="mbs-ft border-y-2 border-solid border-cyan-400 px-2 pt-20">
                                <li className={'text-center'}>{mbs.ft1}</li>
                                <li className={'text-center'}>{mbs.ft2}</li>
                                <li className={'text-center'}>{mbs.ft3}</li>
                                <li className={'text-center'}>{mbs.ft4}</li>
                                <li className={'text-center'}>{mbs.ft5}</li>
                                <li className={'text-green-500 text-center mt-20'}>{mbs.price}</li>
                            </ul>
                            <button className="w-full mbs-btn text-cyan-400 flex justify-center py-2 anmt">Register Now
                            </button>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    </>
  );
}