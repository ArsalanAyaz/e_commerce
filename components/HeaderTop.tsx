import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
        <div className='container py-4'>
            <div className='flex justify-between item-center'>
                <div className="hidden lg:flex gap-1">


                    <div className="header_top__icon_wrapper">
                    <FaFacebook />
                    </div>
                    <div className="header_top__icon_wrapper">
                    <FaXTwitter />
                    </div>
                    <div className="header_top__icon_wrapper">
                    <FaLinkedin />
                    </div>
                    <div className="header_top__icon_wrapper">
                    <FaInstagram />
                    </div>
                    
                <div className="text-gray-500 text-[12px] ">
                    <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - 55$
                </div>

                <div className='flex gap-4'>

                    <select 
                    className="text-gray-500 text=[12px] w-[70px]"
                    name="currency" 
                    id="currency">

                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="PKR">PKR</option>

                    </select>
                    <select 
                    className="text-gray-500 text=[12px] w-[80px]"
                    name="language" 
                    id="anguage">

                        <option value="ENGLISH">ENGLISH</option>
                        <option value="URDU">URDU</option>
                        <option value="SARAIKI">SARAIKI</option>

                    </select>







                </div>

                </div>
            </div>
        </div>
    </div>
  )
}
