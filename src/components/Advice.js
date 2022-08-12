import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import axios from 'axios'
import Footer from './Footer'

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
    <section className="index-page">
      <div className="header">
        <p className="header-title">
          It looks like you might have: {diagnosis}
        </p>
      </div>
      <br />
      <h3 className="advice">
        Advice:
      </h3>
      <br />
      {advice.map((advice, index) => {
        return <div key={index}>
          <div className="advice-box">

            <div>
              <p className="index-name">{advice.content}</p>
            </div>
          </div>
        </div>
      })}
      < br />
      <p>Make sure you contact your dentist as soon as possible and get it checked!</p>
      <br />
      <Link to={'/all'} className="level-right">
        To all categories ⏎
      </Link>
      <br />

      <Footer />

    </section>
  )
}

export default ShowAdvice