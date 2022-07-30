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
    <div className="container">
      <div className="columns is-multiline is-mobile">
        {types.map((type, index) => {
          return <div key={index} className="column is-one-third-desktop is-half-tablet is-half-mobile">
            <Link to={`/type/${type.id}`}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{type.name}</p>
                      {/* <p className="subtitle is-6">{'Weight: ' + poke.weightKg + 'kg'}</p>
                      <p className="subtitle is-6">{'Trainer: ' + poke.user.username}</p> */}
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
