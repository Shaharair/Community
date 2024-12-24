import React from 'react'

const Welcome = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="text-center lg:mt-[100px] mt-[30px]">
                    <h4 className="font-Roboto font-medium lg:text-[18px] text-[16px] text-[#161722] uppercase">Sub-headline</h4>
                    <h3 className="font-Roboto font-bold lg:text-[48px] text-[30px] text-[#161722] uppercase">love and compassion</h3>
                    <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-[#161722] lg:mt-[20px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="lg:mt-[50px] mt-[30px]">
                        <button className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-[#161722] border-2 border-[#FFD2A4] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] uppercase rounded hover:bg-[#FFD2A4] hover:text-white duration-500 ease-in-out">Read more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome