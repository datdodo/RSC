import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default function Cart() {
    const pdtb = [
        {pd:"Bar", qtt:"1", price:"1.000.000"},
        {pd:"Dumbbell", qtt:"2", price:"2.000.000"},
    ]
    return (
        <>
            <Header/>
            <main className="pt-[5rem] min-h-[100vh]">
                <div className="max-w-[70%] flex-[0_0_70%] m-auto">
                    <div
                        className="text-4xl before:content-[''] before:grow before:m-auto before:border-b-2 before:border-solid before:border-emerald-950 after:content-[''] after:grow after:m-auto after:border-b-2 after:border-solid after:border-emerald-950 flex justify-center items-center">
                        <i className="fa-solid fa-cart-shopping text-8xl p-4"></i>
                    </div>
                    <table className={'w-full mb-4 border-[1px] border-solid border-slate-900 border-collapse'}>
                        <thead>
                        <tr className={'flex bg-green-200'}>
                            <td className={'border-[1px] border-solid border-slate-900 max-w-[5%] flex-[0_0_5%] flex justify-center items-center'}></td>
                            <td className={'border-[1px] border-solid border-slate-900 max-w-[70%] flex-[0_0_70%] flex justify-center items-center'}>
                                Products|Services
                            </td>
                            <td className={'border-[1px] border-solid border-slate-900 max-w-[10%] flex-[0_0_10%] flex justify-center items-center'}>Quantity</td>
                            <td className={'border-[1px] border-solid border-slate-900 max-w-[15%] flex-[0_0_15%] flex justify-center items-center'}>Price</td>
                        </tr>
                        </thead>
                        {pdtb.map((pddt) => (
                            <tbody key={pddt.pd}>
                            <tr className={'flex'}>
                                <td className={'border-[1px] border-solid border-slate-900 max-w-[5%] flex-[0_0_5%]' +
                                    ' flex justify-center items-center'}>
                                    <button className={'w-full h-full anmt hover:bg-red-200'}><i className="fa-regular fa-trash"></i></button>
                                </td>
                                <td className={'border-[1px] border-solid border-slate-900 max-w-[70%] flex-[0_0_70%] px-4'}>{pddt.pd}</td>
                                <td className={'border-[1px] border-solid border-slate-900 max-w-[10%] flex-[0_0_10%] flex justify-center items-center'}>
                                    <button className={'max-w-[20%] flex-[0_0_20%] anmt bg-red-200'}>-</button>
                                    <div className={'max-w-[60%] flex-[0_0_60%] border-x-2 border-solid' +
                                        ' border-emerald-900 text-center'}>{pddt.qtt}</div>
                                    <button className={'max-w-[20%] flex-[0_0_20%] anmt bg-green-200'}>+</button>
                                </td>
                                <td className={'border-[1px] border-solid border-slate-900 max-w-[15%] flex-[0_0_15%] flex justify-center items-center'}>{pddt.price}</td>
                            </tr>
                            </tbody>
                        ))}
                    </table>
                    <button type="submit"
                            className={'border-2 border-solid border-slate-900 bg-red-200 px-2 anmt float-right'}>CHECKOUT
                    </button>
                </div>
            </main>
            <Footer/>
        </>
    );
}