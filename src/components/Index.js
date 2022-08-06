/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
  const [types, setTypes] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/all')
      const json = await res.json()
      setTypes(json)
      console.log("Fetch your data in here")
    }
    getData()
  }, [])

  return <section className="section">
    <div>
      <h2 className="title is-2">What's hurting?</h2>
    </div>
    <div className="container">

      <div className="column is-full is-mobile">
        {types.map((type, index) => {
          return <div key={index} className="column is-two-thirds">
            <Link to={`/types/${type.id}`}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{type.name[0].toUpperCase() + type.name.slice(1)}</p>
                    </div>
                  </div>
                </div>
                {/* <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={poke.image} alt={poke.name} />
                  </figure>
                </div> */}
              </div>
            </Link>
          </div>
        })}
      </div>

    </div>
  </section>
}

export default Index
