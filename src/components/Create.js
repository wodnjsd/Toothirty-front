import React, { useState } from "react"
import Select from 'react-select'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import types from '../data/types'
import advice from "../data/advice"

function CreateProblem() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    diagnosis: '',
    advice: [],
    types: '',
    user_id: 1,
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')

    const newAdvice = {
    
      advice: formData.advice.map(advice => advice.value),
    }
    console.log(newAdvice)

    try {
      const { data } = await axios.post(`/api/problems/${formData.types.value}`, { name: formData.name, diagnosis: formData.diagnosis, advice: newAdvice }, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log(data)
      navigate(`/all`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <section className="section">
      <h3 className="title is-3">
        Create new problem
      </h3>
      <div className="container">
        <form onSubmit={handleSubmit}>
          {/* // ! Me Being Extremely Fancy 🤪: */}
          {['name', 'diagnosis'].map(field => {
            return <div key={field} className="field">
              <label className="label">
                {field[0].toUpperCase() + field.slice(1)}
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={formData[field]}
                  onChange={handleChange}
                  name={field}
                />
              </div>
            </div>
          })}
          <label className="label">
            {'Types'}
          </label>
          <Select
            defaultValue={[]}
            name="colors"
            options={types}
            className="basic-select"
            classNamePrefix="select"
            onChange={(types) => setFormData({ ...formData, types })}
            value={formData.types}
          />
          <label className="label">
            {'Advice'}
          </label>
          <Select
            defaultValue={[]}
            isMulti
            name="colors"
            options={advice}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(advice) => setFormData({ ...formData, advice })}
            value={formData.advice}
          />
          <button className="button mt-5 is-success">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default CreateProblem