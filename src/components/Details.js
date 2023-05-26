import React from "react"

const Details = (props) => {
  const { address, firstName, lastName, description } = props.selectedUser

  return (
    <>
      <div id='info-wrapper'>
        <h1>Details</h1>
        <p>Click on a table item to get detailed information</p>

        <div id='info-content'>
          <div>
            <b>User selected:</b> {firstName} {lastName}{" "}
          </div>
          <div>
            <b>Description: </b>
            <textarea
              cols='50'
              rows='5'
              value={description}
              readOnly
            ></textarea>
          </div>
          <div>
            <b>Address:</b> {address.city}
          </div>
          <div>
            <b>City:</b> {address.city}
          </div>
          <div>
            <b>State:</b> {address.state}
          </div>
          <div>
            <b>Zip:</b> {address.zip}
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
