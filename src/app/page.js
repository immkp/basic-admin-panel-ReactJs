"use client"
import React from "react"
import "./page.css"
import axios from "axios"
import TableData from "../components/TableData"
import Details from "../components/Details"
import { useState } from "react"
import { useEffect } from "react"

export default function Home() {
  const [userData, setUserData] = useState([])
  const [searchquery, setSearchQuery] = useState("")
  const [filterUserData, setFilterUserData] = useState([])
  const [selectedUser, setUser] = useState(null)

  const fetchData = async () => {
    let response = await axios.get(
      "https://admin-panel-data-edyoda-sourav.vercel.app/admin/data"
    )

    let apiData = await response.data
    setUserData(apiData)
  }

  useEffect(() => fetchData(), [])

  const getFilterTable = (e) => {
    let filteredData = userData.filter((user) =>
      user.firstName.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setSearchQuery(e.target.value)
    setFilterUserData(filteredData)
  }

  return (
    <>
      <main>
        <div id='table-section'>
          <form action='/'>
            <input
              type='text'
              placeholder='Enter something'
              name='search-box'
              id='search-box'
              onChange={(e) => getFilterTable(e)}
              value={searchquery}
            />
          </form>

          <div id='table-wrapper'>
            <div id='table-headers'>
              <table>
                <thead>
                  <tr>
                    <th className='column1'>Id</th>
                    <th className='column2'>FirstName</th>
                    <th className='column3'>LastName</th>
                    <th className='column4'>Email</th>
                    <th className='column5'>Phone</th>
                  </tr>
                </thead>
              </table>
            </div>

            <div id='table-data'>
              <table>
                <tbody>
                  {filterUserData.length === 0 && searchquery.length === 0
                    ? userData.map((item, idx) => (
                        <TableData
                          data={item}
                          keyValue={item.firstName + "" + idx}
                          selectedUser={selectedUser}
                          setUser={setUser}
                        />
                      ))
                    : filterUserData.map((item, idx) => (
                        <TableData
                          data={item}
                          keyValue={item.firstName + "" + idx}
                          selectedUser={selectedUser}
                          setUser={setUser}
                        />
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {selectedUser && <Details selectedUser={selectedUser} />}
      </main>
    </>
  )
}
