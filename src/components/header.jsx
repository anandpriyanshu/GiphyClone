import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
const Header = () => {

    const [category, setcategory] = useState([])
    const [showcategory, setshowcategory] = useState(false)

    return (
        <>

            <nav>
                <div className=' relative flex justify-between items-center mb-2'>
                    <Link to="/" className='flex gap -2' >
                        <img src='/logo.svg ' className='w-8' />
                        <h1 className='text-2xl font-bold cursor-pointer tracking-normal' >GifStore</h1>
                    </Link>

                    <div className='font-bold text-md flex gap-2 items-center'>


                        {/* for Render categories  */}
                        <Link className='px-4 py-1 hover:gradient border-b-4 hidden lg:block'>Reactions </Link>
                        <button onClick={() => setshowcategory(!showcategory)}>
                            <HiEllipsisVertical size={35} className={` py-.5  hover:gradient ${showcategory ? "gradient" : " "}   border-b-4 hidden lg:block`} />
                        </button>


                        <div className='h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded'>
                            <Link to="/favorite">Favorite Gifs</Link>
                        </div>


                        <button ><HiMiniBars3BottomRight size={30} className='text-sky-400 block lg-hidden' /></button>
                    </div>



                    {
                        showcategory && <div className='absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20'>
                            <span>Category</span>
                            <hr />
                            <div>
                                <Link className='font-bold'>Reactions</Link>
                            </div>
                        </div>
                    }

                </div>

                {/* search */}

            </nav >
        </>
    )
}

export default Header