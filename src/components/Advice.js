import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import axios from 'axios'


function ShowAdvice() {

  const [advice, setAdvice] = React.useState([])
  const [diagnosis, setDiagnosis] = React.useState(undefined)
  const { problemId } = useParams()

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/problems/${problemId}`)
      const json = await res.json()
      setAdvice(json.advice)
      setDiagnosis(json.diagnosis)
    }
    getData()
  }, [problemId])


  return (
    <section className="section">
      <div className="container">
        <h3 className="title is-3">
          It looks like you might have: {diagnosis}
        </h3>
        <br />
        <h4 className="subtitle is-4">
          Advice:
        </h4>

        {advice.map((advice, index) => {
          return <div key={index} className="column is-two-thirds">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{advice.content}</p>
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
          </div>
        })}
        < br />
        <p>Make sure you contact your dentist as soon as possible and get it checked!</p>
        <br />
        <Link to={'/all'} className="level-right">
        To all categories ⏎
        </Link>
      </div>
      





    </section>
  )
}

export default ShowAdvice