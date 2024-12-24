import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const Bottom = () => {
  return (
    <section>
        <div className="container px-3 lg:px-0 mx-auto">
            <div className="text-center lg:mt-[100px] mt-[30px]">
                <h4 className="font-Roboto font-medium lg:text-[18px] text-[16px] text-[#161722] uppercase">our mission & vision</h4>
                <h3 className="font-Roboto font-bold lg:text-[32px] text-[24px] text-[#161722] lg:py-[10px] py-1 uppercase">celebrate with us</h3>
                <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-[#161722]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="lg:mt-[30px] mt-[20px] flex items-center gap-[20px] lg:ml-[590px] ml-[110px]">
                    <h5 className="font-Roboto font-semibold lg:text-[18px] text-[16px] text-[#161722] uppercase">Read More</h5>
                    <FaArrowRight/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Bottom