import React from 'react'

const Listitem = ({
    list
}) => {
    console.log(list)
  return <>
  {
    list.map((item,index) => {
       return <li key={index} >{item}</li>
    })
  }
  </>
  
}

export default Listitem