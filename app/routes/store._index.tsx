import Header from "~/components/Header";
import Footer from "~/components/Footer";
import {Link} from "@remix-run/react";
import Dumbbell from "../IMG/4/Dumbbell.png"
import Bar from "../IMG/4/Bar.webp"
import Rings from "../IMG/4/Rings.webp"
import Treadmill from "../IMG/4/Treadmill.png"
import Football from "../IMG/4/Football.png"
import Basketball from "../IMG/4/Basketball.png"

export default function Store() {
    const spd = [
        {img: Dumbbell, name:"Dumbbell", path:"/store/dumbbell"},
        {img: Bar, name:"Bar", path:"/store/bar"},
        {img: Rings , name:"Rings", path:"/store/rings"},
        {img: Treadmill , name:"Treadmill", path:"/store/treadmill"},
        {img: Football , name:"Football Ball", path:"/store/football"},
        {img: Basketball , name:"Basketball Ball", path:"/store/basketball"},
        {img: Dumbbell, name:"Dumbbell", path:"/store/dumbbell"},
        {img: Bar, name:"Bar", path:"/store/bar"},
        {img: Rings , name:"Rings", path:"/store/rings"},
        {img: Treadmill , name:"Treadmill", path:"/store/treadmill"},
        {img: Football , name:"Football Ball", path:"/store/football"},
        {img: Basketball , name:"Basketball Ball", path:"/store/basketball"},
    ]
    return (
        <>
            <Header/>
            <main className="pt-[5rem] min-h-[100vh]">
                <div className="max-w-[70%] flex-[0_0_70%] m-auto">
                    <div
                        className="text-4xl before:content-[''] before:grow before:m-auto before:border-b-2 before:border-solid before:border-emerald-950 after:content-[''] after:grow after:m-auto after:border-b-2 after:border-solid after:border-emerald-950 flex justify-center items-center">STORE
                    </div>
                    <div
                        className="mt-8 text-4xl before:content-[''] before:grow before:m-auto before:border-b-2 before:border-dashed before:border-emerald-950 after:content-[''] after:grow after:m-auto after:border-b-2 after:border-dashed after:border-emerald-950 flex justify-center items-center">
                        <div
                            className="max-w-[40%] flex-[0_0_40%] flex">
                            <form
                                action="/"
                                className="w-full h-full flex justify-center items-center"
                            >
                                <label htmlFor="search">{}</label>
                                <input
                                    type="text"
                                    id="search"
                                    placeholder={'Search Products...'}
                                    className="m-0 pl-2 border-2 border-solid border-emerald-950 max-w-[90%] flex-[0_0_90%] h-3/5 focus:text-emerald-950 focus:outline-none"
                                />
                                <button
                                    className="hover:text-white hover:bg-emerald-950 hover:cursor-pointer text-emerald-950 border-t-2 border-r-2 border-b-2 border-l-0 border-solid border-emerald-950 bg-transparent max-w-[10%] flex-[0_0_10%] h-3/5">
                                    <i className="fa-solid fa-magnifying-glass"/>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-6 gap-4 p-4 overflow-auto">
                        {spd.map((pd) => (
                            <Link
                                key={pd.img}
                                to={pd.path}
                                className="border-2 border-solid border-emerald-900 anmt anmt4"
                            >
                                <div className="h-3/4 flex justify-center items-center overflow-hidden">
                                    <img
                                        src={pd.img}
                                        alt={pd.img}
                                        className="min-w-full min-h-full"
                                    />
                                </div>
                                <div
                                    className="h-1/4 text-2xl text-white bg-emerald-950 border-t-2 border-solid border-emerald-900 flex justify-center items-center">
                                    {pd.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}