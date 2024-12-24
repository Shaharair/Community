import React from 'react'

const Banner = () => {
  return (
    <section className="bg-banner">
        <div className="container px-3 lg:px-0 mx-auto">
            <div className="lg:py-[80px] py-[50px]">
                <h4 className="font-Roboto font-medium lg:text-[18px] text-[16px] text-white uppercase">Welcome to our church</h4>
                <h3 className="font-Roboto font-bold lg:text-[64px] text-[30px] text-white uppercase lg:pr-[600px]">Become a part of our community</h3>
                <div className="lg:mt-[30px] mt-[20px]">
                    <button className="font-Roboto font-semibold text-white border-2 border-[#FFD2A4] lg:w-[250px] w-[200px] lg:h-[60px] h-[50px] uppercase rounded hover:bg-[#FFD2A4] duration-500 ease-in-out">Learn more</button>
                </div>
                <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-white lg:pt-[50px] pt-[20px] lg:pr-[1000px] pr-[100px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
            </div>
        </div>
    </section>
  )
}

export default Banner