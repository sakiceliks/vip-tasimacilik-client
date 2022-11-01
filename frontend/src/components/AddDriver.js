import React from "react";

export default function AddDriver({ driver, handleChange, addDriver }) {
  return (
    <>
    <table className="table text-gray-400 border-separate text-sm">
      <thead className="bg-gray-800 text-gray-500">
        <tr>
          <th className="bg-gray-800 p-3 text-left">Sürücü ID</th>

          <th className="p-3 text-left">Sürücü Adı</th>
          <th className="p-3 text-left">Sürücü Mail</th>
          <th className="p-3 text-left">Sürücü Tel No</th>
        </tr>
      </thead>
      <tbody>
        <tr scope="bg-gray-800 col">
          <td className="bg-gray-800 text-center">
          <input type="text" value={driver.driverID} name="driverID" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

          </td>
          <td className="text-center">
          <input type="text" value={driver.driverName} name="driverName" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

          </td>
          <td className="bg-gray-800 text-center">
            <input
              type="email"
              value={driver.driverMail}
              name="driverMail"
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </td>
          <td className="text-center">
          <input type="text" value={driver.driverPhone} name="driverPhone" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

          </td>
        
        </tr>

       
       
      </tbody>

    </table>
   
    <div className="box p-2">

<button className="btn btn-outline-danger w-full " type="button" onClick={addDriver}>
      Ekle
    </button>
</div>
        </>
  );
}
