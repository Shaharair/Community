import React from 'react'
import GallaryRR from "../assets/gallary.png"
import GallaryBB from "../assets/gallary1.png"
import GallaryJJ from "../assets/gallary2.png"

const Gallary = () => {
  return (
    <section>
        <div className="container px-3 lg:px-0 mx-auto">
            <div className="flex items-center justify-between mt-[60px] lg:mt-0">
                <div className="w-[32%]">
                  <img className="w-[400px] mt-[-100px]" src={GallaryRR} alt="gallary" />
                </div>
                <div className="w-[32%]">
                  <img className="lg:mt-[100px] mt-[30px]" src={GallaryBB} alt="gallary1" />
                </div>
                <div className="w-[32%]">
                  <img className="w-[400px] mt-[-100px]" src={GallaryJJ} alt="gallary2" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallary