import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Dumbbell from "../IMG/4/Dumbbell.png"

export default function StoreDumbbell() {
    return (
        <>
            <Header/>
            <main className="pt-[5rem] h-[100vh]">
                <div className="max-w-[70%] flex-[0_0_70%] min-h-full flex m-auto">
                    <div className={'max-w-[50%] flex-[0_0_50%] m-auto'}><img src={Dumbbell} alt="Dumbbell" className={'h-4/5 w-4/5 border-2 border-solid border-emerald-900'}/></div>
                    <div className={'max-w-[50%] flex-[0_0_50%] m-auto'}>
                        <h1 className={'text-4xl py-4'}>Dumbbell</h1>
                        <p className={'text-xs'}>
                            *CONSTRUCTION –Includes single dumbbell; Dumbbell ends are made from ASTM A48 Class 20 grey
                            iron with durable coating, and are joined together by a solid 1018 cold rolled steel chromed
                            handle<br/><br/>
                            *VERSATILE – Dumbbells offer the ability to target specific muscle group exercises or get a
                            full body workout<br/><br/>
                            *FEATURES – 12-sided ends prevent rolling. The medium depth knurling on the ergo
                            handle<br/><br/>
                            provides essential grip and security during use. Coating is extremely durable for longevity.
                            *FUNCTIONAL – Target all major muscle groups. Dumbbell is perfect for isolations, full body,
                            functional and HIIT training<br/><br/>
                            *CHOICES – This dumbbell group from CAP is available in sizes 3, 5, 8, 10, 12, 15 - 50 lb. in
                            5 lb. increments. Includes 30 day manufacturer warranty<br/><br/>
                        </p>
                        <div className={'text-green-900 text-2xl py-2'}>30$</div>
                        <button className={'border-2 border-solid border-emerald-900 px-4 hover:bg-green-100 anmt'}>Add To Cart</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}