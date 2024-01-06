import React from 'react'

interface ComtentProps{
    children:React.ReactNode
}

const Content:React.FC<ComtentProps> = (props) => {
    const {children} = props;

  return (
    <div>{children}</div>
  )
}

export default Content