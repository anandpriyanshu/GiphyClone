

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import Category from './pages/category'
import Search from './pages/search'
import GifPage from './pages/single-gif'
import Favorite from './pages/favorite'
import Home from './pages/home'
import GifProvider from './context/gif-context'

function App() {


  const router = createBrowserRouter([
    {
      element: <AppLayout />,


      //different different pages here
      children: [

        {
          path: '/',
          element: <Home />
        }, {
          path: '/:category',     //colon bcz we don't have any set of routes define it can be different for different route
          element: <Category />
        }, {
          path: '/search/:query',    // agin we don't know what comes after the (search/) slace in url
          element: <Search />
        }, {
          path: '/:type/:slug',     //both of the routes are dynamic
          element: <GifPage />
        }, {
          path: '/favorite',
          element: <Favorite />
        }
      ]
    }
  ])


  return (
    <>
      <GifProvider>      {/*now whole app has accesse the date whatever GifContext send the data to us */}

        <RouterProvider router={router} />

      </GifProvider>

    </>
  )
}

export default App
