import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Basketball from "../IMG/4/Basketball.png"

export default function StoreBasketball() {
    return (
        <>
            <Header/>
            <main className="pt-[5rem] h-[100vh]">
                <div className="max-w-[70%] flex-[0_0_70%] min-h-full flex m-auto">
                    <div className={'max-w-[50%] flex-[0_0_50%] m-auto'}><img src={Basketball} alt="Basketball" className={'h-4/5 w-4/5 border-2 border-solid border-emerald-900'}/></div>
                    <div className={'max-w-[50%] flex-[0_0_50%] m-auto'}>
                        <h1 className={'text-4xl py-4'}>Basketball Ball</h1>
                        <p className={'text-xs'}>
                            *GAME READY: Wet grip microfiber composite cover helps wick away sweat and has a game-ready
                            feel straight out of the box<br/><br/>
                            *SUPERIOR GRIP: Deep channel design for instant recognition along with a cushioned carcass
                            for a true bounce<br/><br/>
                            *BUILT FOR PERFORMANCE: Rotationally balanced butyl bladder for ultimate air retention and
                            nylon windings for excellent structural integrity<br/><br/>
                            *INTERMEDIATE SIZE: Size 6, 28.5”<br/><br/>
                            *HIGH SCHOOL APPROVED: NFHS Approved (National Federation of State High School Association)
                            and the state adopted ball for NY, CT, ME, PA, TX, IA, KS, KY, MA, MO, MN, RI, VT, WA, WI,
                            WV, N Central CIF, SC Independent<br/><br/>
                            *INFLATION: Shipped inflated and we recommend 8 PSI<br/><br/>
                            *INDOOR PLAY ONLY<br/><br/>
                        </p>
                        <div className={'text-green-900 text-2xl py-2'}>50$</div>
                        <button className={'border-2 border-solid border-emerald-900 px-4 hover:bg-green-100 anmt'}>Add To Cart</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}