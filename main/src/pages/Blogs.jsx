import React from 'react'
import banner from "../Images/banner.webp";
import "../components/Blogs.css"

const Blogs = () => {
    return (
        <>
            <div className="banner">
                <img src={banner} alt="" />

                <div className="banner-content">
                    <h1>Blogs  <br /><br /> </h1>
                  
                </div>
            </div>

        </>
    )
}

export default Blogs
