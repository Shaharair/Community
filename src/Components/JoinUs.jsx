import React from 'react'
import { MdAccessAlarms } from "react-icons/md";
import BannerEE from "../assets/banner1.jpg"
import { FaArrowRight } from "react-icons/fa";



const JoinUs = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <h4 className="font-Roboto font-medium lg:text-[18px] text-[16px] text-[#161722] text-center uppercase lg:mt-[100px] mt-[30px]">Upcoming sermons</h4>
                <h3 className="font-Roboto font-bold lg:text-[64px] text-[30px] text-[#161722] text-center uppercase">join us and become part of something great</h3>
                <div className="lg:mt-[60px] mt-[30px] lg:flex items-center">
                    <div className="lg:w-[40%] w-full bg-[#FFF5EB] py-[50px]">
                        <div className="flex items-center justify-between">
                            <div className="">
                                <h4 className="font-Roboto font-medium lg:text-[18px] text-[16px] text-[#DC9853] ml-[30px] uppercase">Upcoming Event</h4>
                            </div>
                            <div className="lg:pr-[40px] pr-[20px]">
                                <h3 className="font-Roboto font-semibold lg:text-[30px] text-[24px] text-[#161722]">20</h3>
                                <h5 className="font-Roboto font-medium lg:text-[18px] text-[16px] text-[#161722]">July</h5>
                            </div>
                        </div>
                        <h3 className="font-Roboto font-bold lg:text-[30px] text-[24px] text-[#161722] ml-[30px] mt-[30px] lg:pr-[100px] uppercase">Watch and listen to our sermons</h3>
                        <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-[#161722] ml-[30px] mt-[10px] lg:pr-[100px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <div className="ml-[30px] lg:mt-[50px] mt-[30px] flex items-center gap-[20px]">
                            <div className="lg:text-[24px] text-[18px]">
                                <MdAccessAlarms />
                            </div>
                            <h4 className="font-Roboto font-semibold lg:text-[18px] text-[16px] text-[#161722] lg:pr-[250px] pr-[100px]">Friday 23:39 IST Saturday 11:20 ISD</h4>
                        </div>
                        <div className="ml-[30px] mt-[20px] flex items-center gap-[20px]">
                            <div className="lg:text-[24px] text-[18px]">
                                <MdAccessAlarms />
                            </div>
                            <h4 className="font-Roboto font-semibold lg:text-[18px] text-[16px] text-[#161722] lg:pr-[250px] pr-[100px]">Friday 23:39 IST Saturday 11:20 ISD</h4>
                        </div>
                        <div className="ml-[30px] lg:mt-[50px] mt-[30px]">
                            <button className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-[#161722] border-2 border-[#161722] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded hover:bg-[#161722] hover:text-white duration-500 ease-in-out">Register</button>
                        </div>
                    </div>
                    <div className="lg:w-[60%] w-full">
                        <img className="lg:h-[638px]" src={BannerEE} alt="banner1" />
                    </div>
                </div>
                <div className="text-end flex items-center lg:gap-6 gap-3 lg:text-[24px] text-[18px] lg:mt-[30px] mt-[20px] lg:ml-[1090px] ml-[170px]">
                    <h4 className="font-Roboto font-semibold lg:text-[18px] text-[16px] text-[#161722]">View all Sermons</h4>
                    <FaArrowRight />
                </div>
            </div>
        </section>
    )
}

export default JoinUs