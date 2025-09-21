import React, { useState } from 'react'

const Dashboard = ({ drivers, routes, assignDriver, unassignDriver }) => {
  const [query, setQuery] = useState('')

  const filteredDrivers = drivers.filter(d =>
    d.name.toLowerCase().includes(query.toLowerCase())
  )
  const filteredRoutes = routes.filter(r =>
    r.title.toLowerCase().includes(query.toLowerCase())
  )

  const displayDriverName = (id) => {
    const d = drivers.find(x => x.id === id)
    return d ? d.name : ''
  }

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="mb-3">
        <input
          placeholder="Search drivers or routes..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-2 underline">Routes</h3>
          <ul className="divide-y">
            {filteredRoutes.map(route => (
              <li key={route.id} className="flex justify-between items-center py-2">
                <div>
                  <div className="font-medium">{route.title}</div>
                  <div className="text-gray-500 text-sm">{route.details}</div>
                  <div className="text-sm">
                    {route.assignedDriverId ? (
                      <span className="text-green-700">
                        Assigned → {displayDriverName(route.assignedDriverId)}
                      </span>
                    ) : (
                      <span className="text-red-600">Unassigned</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    onChange={e => assignDriver(route.id, Number(e.target.value))}
                    value={route.assignedDriverId || ''}
                    className="border rounded p-1"
                  >
                    <option value="">— assign —</option>
                    {drivers.map(d => (
                      <option key={d.id} value={d.id}>{d.name}</option>
                    ))}
                  </select>
                  {route.assignedDriverId && (
                    <button
                      onClick={() => unassignDriver(route.id)}
                      className="text-sm text-gray-500 underline"
                    >
                      Unassign
                    </button>
                  )}
                </div>
              </li>
            ))}
            {filteredRoutes.length === 0 && (
              <li className="text-gray-500 py-2">No routes</li>
            )}
          </ul>
        </div>

        <div className="mt-4 md:mt-0 mx-6">
          <h3 className="text-md font-semibold mb-2 underline">Drivers</h3>
          <ul className="divide-y">
            {filteredDrivers.map(driver => (
              <li key={driver.id} className="py-2">
                <div className="font-medium">{driver.name}</div>
              </li>
            ))}
            {filteredDrivers.length === 0 && (
              <li className="text-gray-500 py-2">No drivers</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
