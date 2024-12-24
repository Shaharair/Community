import React, { useState } from 'react'
import LogoEE from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const Home = () => {

    let [show, setShow] = useState(false)

    return (
        <section className="bg-[#0D0D0D] py-[20px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="flex lg:items-center justify-between">
                    <div className="lg:w-[20%]">
                        <img src={LogoEE} alt="logo" />
                    </div>
                    <div className="lg:w-[60%]">
                        <ul className={`lg:flex items-center gap-[50px] absolute top-[90px] left-0 lg:static duration-700 ease-in-out ${show == true ? "bg-[gray] w-[250px] h-[300px] py-[70px]" : "left-[-200px]"}`}>
                            <li className="font-Roboto font-semibold text-[18px] text-center lg:text-start text-white uppercase">Home</li>
                            <li className="font-Roboto font-semibold text-[18px] text-center lg:text-start text-white uppercase py-4 lg:py-0">About us</li>
                            <li className="font-Roboto font-semibold text-[18px] text-center lg:text-start text-white uppercase">Sermon</li>
                            <li className="font-Roboto font-semibold text-[18px] text-center lg:text-start text-white uppercase pt-4 lg:pt-0">Blog</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20%]">
                        <button className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white border-2 border-[#FFD2A4] lg:w-[200px] w-[130px] lg:h-[60px] h-[50px] rounded hover:bg-[#FFD2A4] duration-500 ease-in-out">Contact us</button>
                    </div>
                    <div onClick={() => setShow(!show)} className="text-white text-[24px] lg:hidden absolute top-[100px] right-[20px]">
                        {show == true ? <RxCross2/> : <FaBars/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home