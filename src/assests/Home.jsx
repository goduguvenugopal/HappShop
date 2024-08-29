import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Hero from './Hero'

const Home = () => {
  const [data, setData] = useState([])
  const [skeleton ] = useState([1, 2, 3, 4, 5, 6, 76, 75, 77, 19, 716, 115, 545, 45, 343,112])

  // fetching data 

  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        if (response) {
          const data = await response.json()
          setData(data)
        
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchFunc()
  }, [])

  return (
    <>

      <Hero />

      <div className="bg-white pt-0">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Latest Products
          </h2>
          <hr className='my-3' />
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            {data.length ? <>
              {data.map((item) => (

                <Link to={`/${item.id}`} key={item.id} className="group w-72 p-3 relative  hover:opacity-85">
                  <div className=''>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-72 w-72 "
                    />
                  </div>

                  <div className="mt-4 flex justify-between ">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {item.title}
                        </a>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-nowrap text-gray-900">$ {item.price}</p>
                  </div>
                </Link>
              ))}
            </> : <>
              {skeleton.map((it) => (
                <div key={it} className="w-72 animate-pulse rounded">
                  <div className="bg-slate-400 rounded h-72 w-72 "
                  ></div>
                  <div className="mt-4 flex justify-between ">
                    <div>
                      <h3 className="text-sm  bg-slate-400 h-4 w-72 ">
                      </h3>
                      <h3 className="text-sm mt-2 bg-slate-400 h-4 w-48 ">
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </>
            }
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Home