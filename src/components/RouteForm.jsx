import React, { useState } from 'react'

const RouteForm = ({ addRoute }) => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    addRoute({ title: title.trim(), details })
    setTitle('')
    setDetails('')
  }

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Add Route</h2>
      <form onSubmit={onSubmit} className="space-y-2">
        <input 
          className="w-full border rounded p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Downtown → Airport"
        />
        <input 
          className="w-full border rounded p-2"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="optional details"
        />
        <button 
          type="submit" 
          className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
        >
          Add Route
        </button>
      </form>
    </div>
  )
}

export default RouteForm
