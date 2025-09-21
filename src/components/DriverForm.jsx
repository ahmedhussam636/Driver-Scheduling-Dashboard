import React, { useState } from 'react'

const weekDays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

const DriverForm = ({ addDriver }) => {
  const [name, setName] = useState('')
  const [availability, setAvailability] = useState(
    weekDays.reduce((acc, d) => ({ ...acc, [d]: true }), {})
  )

  const onSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    addDriver({ name: name.trim(), availability })
    setName('')
    setAvailability(weekDays.reduce((acc, d) => ({ ...acc, [d]: true }), {}))
  }

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Add Driver</h2>
      <form onSubmit={onSubmit} className="space-y-2">
        <input 
          className="w-full border rounded p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Driver name"
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
        >
          Add Driver
        </button>
      </form>
    </div>
  )
}

export default DriverForm
