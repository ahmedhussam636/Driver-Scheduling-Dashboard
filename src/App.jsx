import React, { useEffect, useState } from 'react'
import DriverForm from './components/DriverForm'
import RouteForm from './components/RouteForm'
import Dashboard from './components/Dashboard'
import CalendarView from './components/CalendarView'
import mockData from './data/mock.json'

export default function App() {
  const [drivers, setDrivers] = useState(() => 
    JSON.parse(localStorage.getItem('drivers')) || mockData.drivers
  )
  const [routes, setRoutes] = useState(() => 
    JSON.parse(localStorage.getItem('routes')) || mockData.routes
  )

  // أي State يتغير → يتخزن
  useEffect(() => {
    localStorage.setItem('drivers', JSON.stringify(drivers))
    localStorage.setItem('routes', JSON.stringify(routes))
  }, [drivers, routes])

  const addDriver = (driver) =>
    setDrivers([...drivers, { ...driver, id: Date.now() }])

  const addRoute = (route) =>
    setRoutes([...routes, { ...route, id: Date.now(), assignedDriverId: null }])

  const assignDriver = (routeId, driverId) =>
    setRoutes(routes.map(r => r.id === routeId ? { ...r, assignedDriverId: driverId } : r))

  const unassignDriver = (routeId) =>
    setRoutes(routes.map(r => r.id === routeId ? { ...r, assignedDriverId: null } : r))

  const toggleAvailability = (driverId, day) =>
    setDrivers(drivers.map(d =>
      d.id === driverId
        ? { ...d, availability: { ...d.availability, [day]: !d.availability[day] } }
        : d
    ))

  return (
    <div className="max-w-6xl mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Driver Scheduling Dashboard</h1>
      </header>

      <main className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DriverForm addDriver={addDriver} />
          <RouteForm addRoute={addRoute} />
        </div>

        <Dashboard
          drivers={drivers}
          routes={routes}
          assignDriver={assignDriver}
          unassignDriver={unassignDriver}
        />

        <CalendarView
          drivers={drivers}
          toggleAvailability={toggleAvailability}
        />
      </main>

      <footer className="mt-6 text-gray-500 text-sm justify-center flex">
        Developed by Ahmed Hussam
      </footer>
    </div>
  )
}
