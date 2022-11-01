import React from 'react'

function AddTransfer({ transfer, handleChange, addTransfer }) {
  return (
    <>
   <table className="table text-gray-400 border-separate text-sm">
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
          <tr scope="bg-gray-800 col">
            <td className="bg-gray-800 text-center">
              <input
                type="text"
                value={transfer.transferID}
                name="transferID"
                onChange={handleChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </td>
            <td className="text-center">
              <input
                type="text"
                value={transfer.transferDate}
                name="transferDate"
                onChange={handleChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </td>
            <td className="bg-gray-800 text-center">
              <input
                type="text"
                value={transfer.transferTime}
                name="transferTime"
                onChange={handleChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </td>
            <td className="text-center">
              <input
                type="text"
                value={transfer.transferStartLine}
                name="transferStartLine"
                onChange={handleChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </td>
            <td className="text-center">
              <input
                type="text"
                value={transfer.transferEndLine}
                name="transferEndLine"
                onChange={handleChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </td>
            <td className="text-center">
              <input
                type="text"
                value={transfer.TransferCarID}
                name="TransferCarID"
                onChange={handleChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </td>
            <td className="text-center">
              <input
                type="text"
                value={transfer.TransferDriverID}
                name="TransferDriverID"
                onChange={handleChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </td>
            <td className="text-center">
              <input
                type="text"
                value={transfer.transferPassengerID}
                name="transferPassengerID"
                onChange={handleChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="box p-2">
        <button
          className="btn btn-outline-danger w-full "
          type="button"
          onClick={addTransfer}
        >
          Ekle
        </button>
      </div>

        </>
  )
}

export default AddTransfer