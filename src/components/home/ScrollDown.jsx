import React, {useState} from 'react'
import "./home.css";


const ScrollDown = () => {
  return (
    <div className="home_scroll">
        <a href="#about" className="home_scroll-button--flex">
            
            <svg 
                width="32px"
                height="32px"
                class ="home_scroll-mouse"
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 32 32" 
                id="whell"
                style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "1.5",
                }}
            >

                <path 
                        class="wheel"
                        d="M11 6h2v6h-2z" 
                 >
                </path>
                
                <path
                    id="mouse"
                    d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"
               >
                </path>
            </svg>

            <span className='home_button'>
            Scroll Down
                <i className='uil uil-arrow-down home_scroll-icon'></i>
            </span>
        
        </a>
    </div>
  )
}

export default ScrollDown