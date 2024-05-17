import { useState } from 'react'
import { HiMiniXMark, HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

const GifSearch = () => {
    const [query, setquery] = useState("")
    const navigate = useNavigate()

    const searchGifs = async () => {
        if (query.trim() === " ") {
            return
        }
        else {
            navigate(`/search/${query}`)
        }
    }
    return (
        <div className='flex relative'>

            <input
                type='text'
                value={query}
                onChange={(e) => setquery(e.target.value)}
                placeholder='Search Gif and Stickers'
                className='w-full pl-4 pr-14 py-3 text-xl text-black rounded-tl rounded-bl border border-gray-300 outline-none'

            />


            {query &&
                <button onClick={() => setquery("")} className='absolute bg-gray-300 opacity-90 rounded-full right-20 mr-2 top-4'>
                    <HiMiniXMark size={22} />
                </button>

            }



            <button onClick={searchGifs} className='bg-gradient-to-tr from-violet-600 to-red-400 p-2 rounded-tr rounded-br'>

                <HiOutlineMagnifyingGlass size={35} className='scale-x-100' />
            </button>


        </div>
    )
}

export default GifSearch