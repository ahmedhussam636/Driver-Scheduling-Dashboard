import React from 'react'

const weekDays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

const CalendarView = ({ drivers, toggleAvailability }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-md font-semibold mb-4">Driver Availability</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 text-left">Driver</th>
              {weekDays.map(day => (
                <th key={day} className="border border-gray-300 p-2 text-center">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {drivers.map(driver => (
              <tr key={driver.id}>
                <td className="border border-gray-300 p-2">{driver.name}</td>
                {weekDays.map(day => (
                  <td
                    key={day}
                    className="border border-gray-300 p-2 text-center cursor-pointer"
                    onClick={() => toggleAvailability(driver.id, day)}
                  >
                    {driver.availability?.[day] ? (
                      <span className="text-green-600 font-semibold">✓</span>
                    ) : (
                      <span className="text-red-600 font-semibold">✗</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CalendarView
