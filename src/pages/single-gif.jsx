import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GifState } from '../context/gif-context'


const contentType = ["gifs", "stickers", "texts"]

const GifPage = () => {
    const { type, slug } = useParams()
    const [gif, setGif] = useState({})
    const [relatedGif, setRelatedGif] = useState([])

    const { gf } = GifState()

    const fetchGif = async () => {

        const gifId = slug.split("-")
        const { data } = await gf.gif(gifId[gifId.length - 1])
        const { data: related } = await gf.related(gifId[gifId.length - 1], {
            limit: 10,
        })
        setGif(data)
        setRelatedGif(related)


    }

    useEffect(() => {

        if (!contentType.includes(type)) {
            throw new Error("invalid Content type")
        }

        fetchGif()
    }, [])
    return (
        <div className='grid grid-cols-4 my-10'>

        </div>
    )



}

export default GifPage
