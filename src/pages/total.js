import React, { useState } from 'react'
import DropDown from '../components/dropDown'
import Card from '../components/card'
import data from '../data/data.json'

function Total() {
  const totaldataArr = data.response.body.items.reduce((acc, cur) => {
    acc.push([cur.sidoName, cur.stationName, cur])
    return acc
  },[])

  return (
    <div>
      {totaldataArr && totaldataArr.map( (el, idx)=> {
        return <Card key ={idx} city = {el[0]} local={el[1]} currdata={el[2]} />
      })}
    </div>
  )
}

export default Total