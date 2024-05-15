import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useState } from "react";

const GifContext = createContext()

const GifProvider = ({ children }) => {

    const [gifs, setgifs] = useState([])
    const [filter, setfilter] = useState('gifs')
    const [favorite, setfavorite] = useState([])


    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY)




    return (

        <GifContext.Provider value={{ gf, gifs, setgifs, filter, setfilter, favorite }} >{children}</GifContext.Provider>
    )
};


export const GifState = () => {    //this will be  use for accessing state
    return useContext(GifContext)    // i don't want to write useConext and Gifcontext again again i mean don't want to import both agin again so that we wrap in one function
}

export default GifProvider;


