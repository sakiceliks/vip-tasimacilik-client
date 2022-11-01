import React from 'react'
import './driver.css'
function Drivers({drivers}) {
  return (
    <div className="flex p-5 justify-center min-h-screen bg-gray-900">
    <div className="col-span-12">
      <div className="overflow-auto lg:overflow-visible ">
        <table className="table text-gray-400 border-separate space-y-6 text-sm">
          <thead className="bg-gray-800 text-gray-500">
            <tr>
              <th className="p-3">Sürücü ID</th>
              <th className="p-3 text-left">Sürücü Adı</th>
              <th className="p-3 text-left">Sürücü Mail</th>
              <th className="p-3 text-left">Sürücü  Tel No</th>
              <th className="p-3 text-left">Action</th>
            


            </tr>
          </thead>
          <tbody>
           {
            drivers.map((driver,index) =>{
              return(
                <tr scope="col" key={index}>
                  <td className='text-center'>{driver.driverID}</td>
                  <td className='text-center'>{driver.driverName}</td>
                  <td className='text-center'>{driver.driverMail}</td>
                  <td className='text-center'>{driver.driverPhone}</td>
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

export default Drivers