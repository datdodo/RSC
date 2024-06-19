import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Link } from "@remix-run/react";

export default function SignUp() {
    return (
        <>
            <Header/>
            <main className="pt-[5rem] h-[100vh]">
            <div className="max-w-[70%] flex-[0_0_70%] m-auto">
                <div className={'text-center text-4xl before:content-[\'\'] before:grow before:m-auto before:border-b-2 before:border-solid before:border-emerald-950 after:content-[\'\'] after:grow after:m-auto after:border-b-2 after:border-solid after:border-emerald-950 flex justify-center items-center'}><i className="fa-light fa-circle-user text-8xl p-4"></i></div>
                <div className="form-ctn max-w-[30%] m-auto">
                    <h2 className="text-center text-2xl mt-10">Sign Up</h2>
                    <form action="/" method="post">
                        <div className="flex justify-between">
                            <label htmlFor="fullname">Fullname:</label>
                            <input type="text" id="fullname" name="fullname" required className={'px-2'}/>
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required className={'px-2'}/>
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" required className={'px-2'}/>
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" required className={'px-2'}/>
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required className={'px-2'}/>
                        </div>
                        <Link to="/login"><u>Log In</u></Link>
                        <div className="flex justify-center">
                            <button type="submit" className={'border-2 border-solid border-slate-900 px-2 anmt'}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            </main>
            <Footer/>
        </>
    );
}