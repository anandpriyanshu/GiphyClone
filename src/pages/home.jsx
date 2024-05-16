import React, { useEffect } from 'react'
import { GifState } from '../context/gif-context'
import Gif from '../components/gif'
import FilterGif from '../components/filter-gif'


const Home = () => {
    const { gf, filter, gifs, setgifs, } = GifState()

    const fetchingTrenfingGif = async () => {
        const { data } = await gf.trending({
            limit: 20,
            type: filter,
            rating: "g"
        })

        setgifs(data)
    }

    useEffect(() => {
        fetchingTrenfingGif()
    }, [filter])

    return (
        <div>
            <img
                src='/banner.gif'
                alt='banner'
                className='w-full mt-5'
            />
            {/* FilterGif */}
            <FilterGif showTrending />


            <div className='columns-2 md:col-span-3 lg:columns-4 xl:columns-5 gap-2'>

                {gifs.map((gif) => (
                    <Gif gif={gif} key={gif.id} />
                ))}

            </div>
        </div>
    )
}

export default Home
