import React from "react"
import { Link, useParams } from "react-router-dom"
import Footer from "./Footer"
import { baseUrl } from '../config'

function Problems() {
  const [problems, setProblems] = React.useState([])
  const { typeId } = useParams()


  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/${baseUrl}/types/${typeId}`)
      const json = await res.json()
      setProblems(json.problems)
    }
    getData()
  }, [typeId])


  return (
    <section className="index-page">
      <div className="header">
        <p className="header-title">What are your signs and symptoms?</p>
      </div>
      <div className="index-box">
        {problems.map((problem, index) => {
          return <div key={index}>
            <Link to={`/problems/${problem.id}`}>
              <div className="index">
                <div className="index-name">
                  <p >{problem.name}</p>
                </div>
              </div>
            </Link>
          </div>
        })}
      </div>
      <Footer />
    </section>

  )
}

export default Problems