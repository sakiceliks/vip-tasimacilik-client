import React from 'react'

import { AiOutlineCalendar,AiOutlineClockCircle } from "react-icons/ai";

function Transfers({transfers}) {
  return (
    <div className="flex p-5 justify-center min-h-screen bg-gray-900">
    <div className="col-span-12">
      <div className="overflow-auto lg:overflow-visible ">
        <table className="table text-gray-400 border-separate space-x-6 text-sm">
          <thead className="bg-gray-800 text-gray-500">
            <tr>
              <th className="p-3">Transfer ID</th>
              <th className="p-3 text-left">Transfer Tarihi</th>
              <th className="p-3 text-left">Transfer Saati</th>
              <th className="p-3 text-left">Transfer Başlangıç</th>
              <th className="p-3 text-left">Transfer Bitiş</th>
              <th className="p-3 text-left">Transfer Araç ID</th>
              <th className="p-3 text-left">Transfer Sürücü ID</th>
              <th className="p-3 text-left">Transfer Yolcu ID</th>
              <th className="p-3 text-left">Action</th>

            </tr>
          </thead>
          <tbody>
           {
            transfers.map((transfer,index) =>{
              return(
                <tr scope="col" key={index}>
                  <td className='text-center gap-3'>{transfer.transferID}</td>
                  <td className='text-center'>{transfer.transferDate}</td>
                  <td className='text-center'>{transfer.transferTime}</td>
                  <td className='text-center'>{transfer.transferStartLine}</td>
                  <td className='text-center'>{transfer.transferEndLine}</td>
                  <td className='text-center'>{transfer.transferCarID}</td>
                  <td className='text-center'>{transfer.transferDriverID}</td>
                  <td className='text-center'>{transfer.transferPassengerID}</td>
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

export default Transfers