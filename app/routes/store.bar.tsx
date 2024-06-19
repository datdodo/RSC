import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Bar from "../IMG/4/Bar.webp"

export default function StoreBar() {
    return (
        <>
            <Header/>
            <main className="pt-[5rem] h-[100vh]">
                <div className="max-w-[70%] flex-[0_0_70%] min-h-full flex m-auto">
                    <div className={'max-w-[50%] flex-[0_0_50%] m-auto'}><img src={Bar} alt="Bar" className={'h-4/5 w-4/5 border-2 border-solid border-emerald-900'}/></div>
                    <div className={'max-w-[50%] flex-[0_0_50%] m-auto'}>
                        <h1 className={'text-4xl py-4'}>Bar</h1>
                        <p className={'text-xs'}>
                            【No Drilling, No Traces】: The Sportneer pull up bar uses innovative fixative technology to
                            hold the bar in place without the need for drilling. It is supported by 2 enlarged 6.5"x1.8"
                            PVC mats to ensure enough friction for sustained use. The base and bar are connected by 4
                            metal fixed points that ensure the PVC mat is pressed outward if the bar slips from the
                            base, which provides a fall-proof design for the user. The heavier the load, the more sturdy
                            it is.<br/><br/>
                            【Easy-peasy Installation】: The installation is quite easy. Guided by detailed instructions
                            and video, plus 5 arrow directions on the surface and spirit levels on both ends to make
                            your installation smooth. All you have to do is extend it to the comfortable length and
                            height and you are good to go! Please make sure your doorway or wall is strong enough for
                            installation. Ceramic tiles, glass, or non-solid structures are not ideal surfaces to
                            install the fitness bar.<br/><br/>
                            【Upgraded Mechanic Lock System】: Safety is a big deal at Sportneer, which is why we ensure
                            the safe use of this push-up bar for users of all ages, from teens to elders. It comes with
                            an exclusive, new 360° rotatable dual gear lock on both ends to protect the bar from
                            loosening. This Sportneer doorway exercise bar has passed a series of research and
                            development testing and is certified safer and stronger than other similar
                            equipment.<br/><br/>
                            【Integrated, Extensible Structure】: This hallway pull-up bar is different from most
                            2-section foam bars on the market. It comes with an ultra long, integrated anti-slip cotton
                            handlebar that supports a flexible grip. It is sweat-resistant, odorless, and wear-proof.
                            Simply twist the bar to adjust it to any size within 29.5"~37" (74.9cm~94cm) to get the
                            ideal dimension for your workout like pull-ups, sit-ups, push-ups, stretching and more!<br/><br/>
                            【Heavy Duty Construction】: Our Pull Up Bar is designed to support weights of up to
                            440lb/200kg with ease, thanks to the combination of a 2mm outer steel pipe and a 1.5mm inner
                            steel pipe. This bar is built to last for years without deformation or breakage, making it a
                            reliable and durable addition to your home gym. The longer the use distance of the
                            horizontal bar, the smaller the load.<br/><br/>
                        </p>
                        <div className={'text-green-900 text-2xl py-2'}>40$</div>
                        <button className={'border-2 border-solid border-emerald-900 px-4 hover:bg-green-100 anmt'}>Add To Cart</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}