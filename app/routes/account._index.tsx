import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Account() {
    const pdtb = [
        {on:"1", pd:"Bar", qtt:"1", price:"1.000.000"},
        {on:"2", pd:"Dumbbell", qtt:"2", price:"2.000.000"},
    ]
  return (
    <>
      <Header />
        <main className="pt-[5rem] min-h-[100vh]">
            <div className="max-w-[70%] flex-[0_0_70%] m-auto">
                <div className={'text-center text-4xl before:content-[\'\'] before:grow before:m-auto before:border-b-2 before:border-solid before:border-emerald-950 after:content-[\'\'] after:grow after:m-auto after:border-b-2 after:border-solid after:border-emerald-950 flex justify-center items-center'}><i className="fa-light fa-circle-user text-8xl p-4"></i></div>
                <div className="form-ctn max-w-[30%] m-auto">
                    <h2 className="text-center text-2xl mt-10">My Info</h2>
                    <form action="/" method="post">
                        <div className="flex justify-between">
                            <label htmlFor="fullname">Fullname:</label>
                            <input type="text" id="fullname" name="fullname" required/>
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required/>
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" required/>
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" required/>
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required/>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className={'border-2 border-solid border-slate-900 px-2 anmt'}>Save Changes</button>
                        </div>
                    </form>
                </div>
                <div className={'text-center text-4xl before:content-[\'\'] before:grow before:m-auto before:border-b-2 before:border-solid before:border-emerald-950 after:content-[\'\'] after:grow after:m-auto after:border-b-2 after:border-solid after:border-emerald-950 flex justify-center items-center my-10'}><i className="fa-solid fa-cart-shopping text-8xl p-4"></i></div>
                <table className={'w-full mb-4 border-[1px] border-solid border-slate-900 border-collapse'}>
                    <thead>
                    <tr className={'flex bg-green-200'}>
                        <td className={'border-[1px] border-solid border-slate-900 max-w-[5%] flex-[0_0_5%] flex justify-center items-center'}>ON</td>
                        <td className={'border-[1px] border-solid border-slate-900 max-w-[70%] flex-[0_0_70%] flex justify-center items-center'}>Purchased
                            Products|Services
                        </td>
                        <td className={'border-[1px] border-solid border-slate-900 max-w-[10%] flex-[0_0_10%] flex justify-center items-center'}>Quantity</td>
                        <td className={'border-[1px] border-solid border-slate-900 max-w-[15%] flex-[0_0_15%] flex justify-center items-center'}>Price</td>
                    </tr>
                    </thead>
                    {pdtb.map((pddt)=> (
                        <tbody key={pddt.on}>
                        <tr className={'flex'}>
                            <td className={'border-[1px] border-solid border-slate-900 max-w-[5%] flex-[0_0_5%] flex justify-center items-center'}>{pddt.on}</td>
                            <td className={'border-[1px] border-solid border-slate-900 max-w-[70%] flex-[0_0_70%] px-4'}>{pddt.pd}</td>
                            <td className={'border-[1px] border-solid border-slate-900 max-w-[10%] flex-[0_0_10%] flex justify-center items-center'}>{pddt.qtt}</td>
                            <td className={'border-[1px] border-solid border-slate-900 max-w-[15%] flex-[0_0_15%] flex justify-center items-center'}>{pddt.price}</td>
                        </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </main>
        <Footer/>
    </>
  );
}