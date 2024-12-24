import React from 'react'
import { VscQuote } from "react-icons/vsc";


const Background = () => {
    return (
        <section className="bg-background lg:mt-[100px] mt-[30px] lg:py-[150px] py-[50px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:w-[50%] w-full bg-white flex items-center justify-between py-[50px] lg:ml-[330px] hover:border-b-[20px] hover:border-b-[#FFD2A4] duration-500 ease-in-out">
                    <div className="w-[70%]">
                        <h3 className="font-Roboto font-bold lg:text-[24px] text-[18px] text-[#161722] ml-[30px] lg:pr-[200px] uppercase">We want to serve the world around us</h3>
                        <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-[#161722] ml-[30px] mt-[10px] lg:pr-[80px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                        <div className="lg:mt-[50px] mt-[30px] ml-[30px]">
                            <button className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-[#161722] border-2 border-[#FFD2A4] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded hover:bg-[#FFD2A4] hover:text-white duration-500 ease-in-out">Visit</button>
                        </div>
                    </div>
                    <div className="w-[30%]">
                        <div className="lg:text-[80px] text-[54px] text-[#FFF5EB] lg:ml-[70px] ml-[30px]">
                            <VscQuote />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Background