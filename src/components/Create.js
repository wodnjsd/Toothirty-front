import React, { useState } from "react"
import Select from 'react-select'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import types from '../data/types'
import advice from "../data/advice"
import { baseUrl } from '../config'

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


    console.log(formData.advice)

    formData.advice.forEach((advice) => {
      advice['content'] = advice['value'];
      delete advice['value'];
      delete advice['label']
    })


    try {
      const { data } = await axios.post(`${baseUrl}/problems/${formData.types.value}`, { name: formData.name, diagnosis: formData.diagnosis, advice: formData.advice }, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log(data)
      navigate(`/all`)

    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <section className="flex flex-col items-center w-full h-full min-h-screen">
      <div className="px-5 w-full bg-slate-50 flex justify-center items-center py-12">
        <p className="text-3xl font-prata">Create new problem</p>
      </div>
      <div className="h-4/5 py-12 flex flex-col justify-between gap-10 items-center w-5/6 lg:w-1/2">
        <form onSubmit={handleSubmit} className="form">
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
          <label className="label mt-4">
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
          <button className="button mt-6">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default CreateProblem