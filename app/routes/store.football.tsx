import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Football from "../IMG/4/Football.png"

export default function StoreFootball() {
    return (
        <>
            <Header/>
            <main className="pt-[5rem] h-[100vh]">
                <div className="max-w-[70%] flex-[0_0_70%] min-h-full flex m-auto">
                    <div className={'max-w-[50%] flex-[0_0_50%] m-auto'}><img src={Football} alt="Football" className={'h-4/5 w-4/5 border-2 border-solid border-emerald-900'}/></div>
                    <div className={'max-w-[50%] flex-[0_0_50%] m-auto'}>
                        <h1 className={'text-4xl py-4'}>Football Ball</h1>
                        <p className={'text-xs'}>
                            *Thermal Bonded<br/><br/>
                            *FIFA Quality Pro<br/><br/>
                            *No. 5 Ball<br/><br/>
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