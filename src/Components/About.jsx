import React from 'react'
import { FaPrayingHands,FaHandHoldingHeart } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";


const About = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <h4 className="font-Roboto font-medium lg:text-[18px] text-[16px] text-[#161722] text-center lg:mt-[100px] mt-[30px] uppercase">sub-headline</h4>
                <h3 className="font-Roboto font-bold lg:text-[48px] text-[30px] text-[#161722] text-center uppercase">a church that's relevant</h3>
                <div className="lg:flex items-center justify-between lg:mt-[60px] mt-[30px]">
                    <div className="lg:w-[32%] w-full bg-[#FFF5EB] py-[50px] hover:border-b-[20px] hover:border-b-[#FFD2A4] duration-500 ease-in-out">
                        <div className="font-Roboto font-semibold text-[18px] text-[#161722] bg-[#FFD2A4] w-[60px] h-[60px] pt-[20px] pl-[20px] leading-[60px] rounded-full lg:ml-[50px] ml-[30px]">
                            <FaPrayingHands />
                        </div>
                        <h3 className="font-Roboto font-bold lg:text-[32px] text-[24px] text-[#161722] lg:ml-[50px] ml-[30px] pt-[30px] uppercase">About us</h3>
                        <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-[#161722] lg:ml-[50px] ml-[30px] lg:pr-[100px] pt-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="lg:w-[32%] w-full bg-[#FFF5EB] py-[50px] hover:border-b-[20px] hover:border-b-[#FFD2A4] duration-500 ease-in-out mt-[30px] lg:mt-0">
                        <div className="font-Roboto font-semibold text-[18px] text-[#161722] bg-[#FFD2A4] w-[60px] h-[60px] pt-[20px] pl-[20px] leading-[60px] rounded-full lg:ml-[50px] ml-[30px]">
                            <BsSoundwave />
                        </div>
                        <h3 className="font-Roboto font-bold lg:text-[32px] text-[24px] text-[#161722] lg:ml-[50px] ml-[30px] pt-[30px] uppercase">Get involved</h3>
                        <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-[#161722] lg:ml-[50px] ml-[30px] lg:pr-[100px] pt-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="lg:w-[32%] w-full bg-[#FFF5EB] py-[50px] hover:border-b-[20px] hover:border-b-[#FFD2A4] duration-500 ease-in-out mt-[30px] lg:mt-0">
                        <div className="font-Roboto font-semibold text-[18px] text-[#161722] bg-[#FFD2A4] w-[60px] h-[60px] pt-[20px] pl-[20px] leading-[60px] rounded-full lg:ml-[50px] ml-[30px]">
                            <FaHandHoldingHeart />
                        </div>
                        <h3 className="font-Roboto font-bold lg:text-[32px] text-[24px] text-[#161722] lg:ml-[50px] ml-[30px] pt-[30px] uppercase">Giving back</h3>
                        <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-[#161722] lg:ml-[50px] ml-[30px] lg:pr-[100px] pt-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About