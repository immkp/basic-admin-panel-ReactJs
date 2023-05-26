import React from "react"

const TableData = (props) => {
  const { data, keyValue, selectedUser, setUser } = props

  const onSelectUser = (data) => {
    setUser(data)
  }

  return (
    <>
      <tr
        className={`${"data-row"} ${
          selectedUser && selectedUser.firstName === data.firstName
            ? "active"
            : ""
        }`}
        key={keyValue}
        onClick={() => {
          onSelectUser(data)
        }}
      >
        <td className='column1'>{data.id}</td>
        <td className='column2'>{data.firstName}</td>
        <td className='column3'>{data.lastName}</td>
        <td className='column4'>{data.email}</td>
        <td className='column5'>{data.phone}</td>
      </tr>
    </>
  )
}

export default TableData
