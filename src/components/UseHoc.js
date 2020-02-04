import React from 'react'

const UseHoc = (props) => {
  return (
    <>
      <span className="tag is-warning">{ props.data }</span>
    </>
  )
}

export default UseHoc