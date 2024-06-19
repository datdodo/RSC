import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Rings from "../IMG/4/Rings.webp"

export default function StoreRings() {
    return (
        <>
            <Header/>
            <main className="pt-[5rem] h-[100vh]">
                <div className="max-w-[70%] flex-[0_0_70%] min-h-full flex m-auto">
                    <div className={'max-w-[50%] flex-[0_0_50%] m-auto'}><img src={Rings} alt="Rings" className={'h-4/5 w-4/5 border-2 border-solid border-emerald-900'}/></div>
                    <div className={'max-w-[50%] flex-[0_0_50%] m-auto'}>
                        <h1 className={'text-4xl py-4'}>Rings</h1>
                        <p className={'text-xs'}>
                            *1.1 in. Birch Wood Rings, 9.4 ft. Nylon Straps<br/><br/>
                            *Complete Set: Everything you need for the ultimate workout. Two wooden gymnastics rings
                            1.1", two 9.4 FT nylon straps, four aluminum screw-lock carabiners 15 KN, two black grip
                            tapes, one heavy duty resistance band 25-60 lbs, one nylon storage bag and one printed
                            guidebook.<br/><br/>
                            *Superior Quality: Our gymnastic rings are meticulously crafted to meet the highest standards
                            of durability, they're built to last. The straps are made from double-layer nylon and have
                            double stitched & numbered slots. The rings are made from premium wood to help you lock in
                            your false grip and also follow International Gymnastics Federation guidelines for diameter;
                            1.1”. Be confident these will withstand even the most intense workouts.<br/><br/>
                            *Quick Setup: Tired of fumbling with your equipment during setup? Our numbered straps ensure
                            a lightning-fast setup process, allowing you to focus on what matters most - your
                            workout.<br/><br/>
                            *Heavy Duty Carabiners: Safety is paramount when it comes to calisthenics. That's why we've
                            included climb-rated carabiners; 15KN or 3300LBS. You deserve reliability and peace of mind
                            during your exercises. Rest assured, your safety is our priority.<br/><br/>
                            *Versatile Resistance Band: Incorporate resistance training into your regimen with our bonus
                            resistance band. It's the perfect companion for aiding in your workouts.<br/><br/>
                            *Convenient Carry Bag: Take your Awegym Gymnastic Rings with you wherever you go. Whether
                            you're hitting the gym, park or traveling your workout essentials are always at your
                            fingertips.<br/><br/>
                        </p>
                        <div className={'text-green-900 text-2xl py-2'}>80$</div>
                        <button className={'border-2 border-solid border-emerald-900 px-4 hover:bg-green-100 anmt'}>Add To Cart</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}