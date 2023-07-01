import React from 'react'

const Error1 = ({children,tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>
      {children}
    </div>
  )
}

export default Error1
