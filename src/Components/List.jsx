import React from 'react'
import ListEE from "../assets/list.png"
import ListTT from "../assets/list1.png"
import ListYY from "../assets/list2.png"
import ListUU from "../assets/list3.png"

const List = () => {
    return (
        <section className="bg-[#F5F2F0] lg:py-[100px] py-[30px] lg:mt-[100px] mt-[30px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <h5 className="font-Roboto font-medium lg:text-[18px] text-[16px] text-[#161722] text-center uppercase">Watch and listen</h5>
                <h3 className="font-Roboto font-bold lg:text-[48px] text-[30px] text-[#161722] text-center mt-[20px] uppercase">The benefits of joining our church</h3>
                <div className="flex items-center justify-between lg:mt-[60px] mt-[30px] flex-wrap">
                    <div className="lg:w-[24%] w-[48%]">
                        <img src={ListEE } alt="list" />
                    </div>
                    <div className="lg:w-[24%] w-[48%]">
                        <img src={ListTT } alt="list1" />
                    </div>
                    <div className="lg:w-[24%] w-[48%] mt-[15px] lg:mt-0">
                        <img src={ ListYY} alt="list2" />
                    </div>
                    <div className="lg:w-[24%] w-[48%] mt-[15px] lg:mt-0">
                        <img src={ListUU } alt="list3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default List