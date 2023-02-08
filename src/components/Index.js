/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../config'

function Index() {
  const [types, setTypes] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${baseUrl}/all`)
      const json = await res.json()
      setTypes(json)
      console.log("Fetch your data in here")
    }
    getData()
    console.log(types)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <section className="flex flex-col items-center w-full h-screen">
    <div className="w-full bg-slate-50 flex justify-center items-center py-12">
      <p className="text-3xl font-prata">What's hurting?</p>
    </div>
    <div className="h-4/5 flex flex-col justify-center w-1/2">

      {types.map((type, index) => {
        return <div key={index}>
          <Link to={`/types/${type.id}`}>
            <div className="w-full my-2 border-2 flex justify-center gap-8 items-center py-4">
              <div className="text-gray-600 ">
                <p className="font-inter">{type.name[0].toUpperCase() + type.name.slice(1)}</p>
              </div>    
              <div>      
                <figure className="index-image">
                  <img src={type.image} alt={type.name} />
                </figure>
              </div>
            </div>
          </Link>
        </div>
      })}

    </div>
  </section>
}

export default Index
