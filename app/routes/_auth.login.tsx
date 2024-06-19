import Header from "~/components/Header";
import Footer from "~/components/Footer";
import {Link} from "@remix-run/react";
import { useState } from "react";
import axios from "axios";

export default function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        await axios.post("http://localhost:5173/", {username, password})
            .then(response => {
                console.log("response", response);
            })
            .catch(error => {
                console.log("error", error);
            });
    }
    return (
        <>
            <Header/>
            <main className="pt-[5rem] h-[100vh]">
                <div className="max-w-[70%] flex-[0_0_70%] m-auto">
                    <div
                        className={'text-center text-4xl before:content-[\'\'] before:grow before:m-auto before:border-b-2 before:border-solid before:border-emerald-950 after:content-[\'\'] after:grow after:m-auto after:border-b-2 after:border-solid after:border-emerald-950 flex justify-center items-center'}>
                        <i className="fa-light fa-circle-user text-8xl p-4"></i></div>
                    <div className="form-ctn max-w-[30%] m-auto">
                        <h2 className="text-center text-2xl mt-10">Log In</h2>
                        <form action="/" method="post">
                            <div className="flex justify-between">
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" name="username" required value={username} className={'px-2'}
                                       onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" required value={password} className={'px-2'}
                                       onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="flex justify-between">
                                <Link to="/fgpwd"><u>Forgotten Password?</u></Link>
                                <Link to="/signup"><u>Sign Up</u></Link>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit"
                                        onClick={handleLogin}
                                        className={'border-2 border-solid border-slate-900 px-2 anmt'}>Log In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}