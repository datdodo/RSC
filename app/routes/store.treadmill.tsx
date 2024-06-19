import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Treadmill from "../IMG/4/Treadmill.png"

export default function StoreTreadmill() {
    return (
        <>
            <Header/>
            <main className="pt-[5rem] h-[100vh]">
                <div className="max-w-[70%] flex-[0_0_70%] min-h-full flex m-auto">
                    <div className={'max-w-[50%] flex-[0_0_50%] m-auto'}><img src={Treadmill} alt="Treadmill" className={'h-4/5 w-4/5 border-2 border-solid border-emerald-900'}/></div>
                    <div className={'max-w-[50%] flex-[0_0_50%] m-auto'}>
                        <h1 className={'text-4xl py-4'}>Treadmill</h1>
                        <p className={'text-xs'}>
                            【Powerful 2.25HP Quiet Motor with 330 lbs Capacity 】This walking pad treadmill with a 2.25
                            HP powful motor and operate in less than 45 db. creating a quiet and comfortable exercise
                            environment without disturbing others,enjoy a healthier life. Durable alloy steel frame
                            designed to withstand constant pounding , this treadmill is constructed to support weight up
                            to 330 lbs.<br/><br/>
                            【LED Displays & Smart Remote】Under desk treadmill with LED display，make it easy for you to
                            track speed, distance, time and calories in real-time. Using the remote controller to change
                            the speed or stop the running machine.<br/><br/>
                            【Wide Non-slip Running Belt & Shock Reduction】Under the desk treadmill running belt size
                            approx: 40*15 inches. Our treadmill with a durable steel frame and 5 layers of non-slip
                            running straps and 8 silicone shocks, it helps to shock absorbing and noise reducing, making
                            your running quieter, safer and more stable, significantly absorb impact and provide
                            cushioning for knees, muscles and joints.<br/><br/>
                            【Installation-free & Space Saving】Our walking pad treadmills size approx:(L*W*H) 49*20*4
                            inches,net weight approx:37.4lbs, requires no assembly and are ready to use right out of the
                            box. Could easily move and storage under sofas, beds and tables.<br/><br/>
                            【3 in 1 Portable Treadmill】This under the desk treadmill can not only for walking but also
                            for jogging and running with a speed range of 0.5-3.8 mph(0.8-6km/h),available to choose
                            different speeds for different physical conditions and environments.<br/><br/>
                        </p>
                        <div className={'text-green-900 text-2xl py-2'}>150$</div>
                        <button className={'border-2 border-solid border-emerald-900 px-4 hover:bg-green-100 anmt'}>Add To Cart</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}