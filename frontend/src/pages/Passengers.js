import React from 'react'
import './driver.css'
function Passengers({ passengers }) {
  return (
    <div className="flex  justify-center p-5 h-screen bg-gray-900">
    <div className="col-span-12">
      <div className="overflow-auto lg:overflow-visible ">
        <table className="table text-gray-400 border-separate space-y-6 text-sm">
          <thead className="bg-gray-800 text-gray-500">
            <tr>
              <th className="p-3">Yolcu ID</th>
              <th className="p-3 text-left">Yolcu Adı</th>
              <th className="p-3 text-center">Yolcu Mail</th>
              <th className="p-3 text-left">Yolcu Tel No</th>
              <th className="p-3 text-left">Yolcu Türü</th>
              <th className="p-3 text-left">Action</th>
             

            </tr>
          </thead>
          <tbody>
           {
            passengers.map((passenger,index) =>{
              return(
                <tr scope="col" key={index}>
                  <td className='text-center'>{passenger.passengerID}</td>
                  <td className='text-center'>{passenger.passengerName}</td>
                  <td className='text-center'>{passenger.passengerMail}</td>
                  <td className='text-center'>{passenger.passengerPhone}</td>
                  <td className='text-center'>{passenger.passengerType}</td>
                  <td className="p-3">
                
                <a href="#" className="text-gray-400 hover:text-gray-100 mx-2">
                  <i className="material-icons-outlined text-base">edit</i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-100 ml-2">
                  <i className="material-icons-round text-base">delete_outline</i>
                </a>
              </td>
                </tr>
              )
            })
           }
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Passengers