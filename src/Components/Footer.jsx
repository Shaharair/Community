import React from 'react'
import LogoRR from "../assets/logo.png"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
        <section className="bg-[#161722] lg:py-[70px] py-[40px] lg:mt-[100px] mt-[30px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="flex justify-between flex-wrap">
                    <div className="lg:w-[30%] w-[48%]">
                        <img src={LogoRR} alt="logo" />
                        <p className="font-Roboto font-medium lg:text-[18px] text-[14px] text-white lg:my-[30px] my-[10px] uppercase">© Copyright Finsweet 2022</p>
                        <ul>
                            <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white uppercase">(480) 555-0103</li>
                            <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white lg:py-3 py-1 uppercase">4517 Washington Ave. </li>
                            <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white uppercase">finsweet@example.com</li>
                        </ul>
                    </div>
                    <div className="lg:w-[15%] w-[48%]">
                        <ul>
                            <li className="font-Roboto font-semibold lg:text-[24px] text-[18px] text-white uppercase">Quicklinks</li>
                            <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white lg:py-3 py-1 uppercase">About us</li>
                            <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white uppercase">Sermons</li>
                            <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white lg:py-3 py-1 uppercase">Events</li>
                            <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white uppercase">Blog</li>
                        </ul>
                    </div>
                    <div className="lg:w-[25%] w-[48%] mt-[30px] lg:mt-0">
                        <ul>
                            <li className="font-Roboto font-semibold lg:text-[24px] text-[18px] text-white uppercase">Connect</li>
                            <div className="flex items-center lg:gap-4 gap-2 pt-5">
                                <div className="font-Roboto font-semibold lg:text-[18px] text-[16px] text-white border-2 border-[#FFD2A4] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] lg:leading-[60px] leading-[50px] rounded-full lg:pt-[20px] pt-[15px] lg:pl-[19px] pl-[14px] hover:bg-[#FFD2A4] hover:text-[#161722] duration-500 ease-in-out">
                                    <FaFacebookF />
                                </div>
                                <div className="font-Roboto font-semibold lg:text-[18px] text-[16px] text-white border-2 border-[#FFD2A4] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] lg:leading-[60px] leading-[50px] rounded-full lg:pt-[20px] pt-[15px] lg:pl-[19px] pl-[14px] hover:bg-[#FFD2A4] hover:text-[#161722] duration-500 ease-in-out">
                                    <FaTwitter />
                                </div>
                                <div className="font-Roboto font-semibold lg:text-[18px] text-[16px] text-white border-2 border-[#FFD2A4] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] lg:leading-[60px] leading-[50px] rounded-full lg:pt-[20px] pt-[15px] lg:pl-[19px] pl-[14px] hover:bg-[#FFD2A4] hover:text-[#161722] duration-500 ease-in-out">
                                    <FaLinkedinIn />
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="lg:w-[30%] w-[48%] mt-[30px] lg:mt-0">
                        <h3 className="font-Roboto font-bold lg:text-[30px] text-[18px] text-white uppercase">Subscribe to get Latest Updates and News</h3>
                        <div className=" lg:mt-[40px] mt-[20px] lg:flex items-center">
                            <input type="text" placeholder="Yourmail@gmail.com" className="font-Roboto font-medium lg:text-[16px] text-[14px] text-white lg:w-[250px] lg:h-[60px] h-[50px] lg:pl-4 pl-1 outline-none bg-[#161722] border-2 border-[#767676] rounded" />
                            <div className="mt-[30px] lg:mt-0">
                                <button className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-[#161722] bg-[#FFD2A4] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer