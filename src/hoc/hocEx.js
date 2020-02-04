import React, { useEffect, useState } from 'react'

export default (ComponentWrap, payload) => {
  const [data, setData] = useState()

  return () => {
    useEffect (() => {
      setData(payload)
    }, [])

    return <ComponentWrap data={data} />
  }
}