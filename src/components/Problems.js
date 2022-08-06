import React from "react"
import { Link, useParams } from "react-router-dom"
// import axios from 'axios'

function Problems() {
  const [problems, setProblems] = React.useState([])
  const { typeId } = useParams()


  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/types/${typeId}`)
      const json = await res.json()
      setProblems(json.problems)
    }
    getData()
  }, [typeId])


  return (
    <section className="section">
      <div className="container">
        <h3 className = "title is-3">What are your signs/symptoms?</h3>
        <div className="column is-full is-mobile">
          {problems.map((problem, index) => {
            return <div key={index} className="column is-two-thirds">
              <Link to={`/problems/${problem.id}`}>
                <div className="card">
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{problem.name}</p>
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

  )
}

export default Problems