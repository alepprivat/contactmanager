import React from 'react'

export default function (props) {
  return (
    <div>
      <h1 className="display-4">About Contacts App</h1>
      <p className="lead">Simple app to manage contact info. Value: {props.match.params.value}</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  )
}
