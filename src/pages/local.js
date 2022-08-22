import React, { useState } from 'react'
import DropDown from '../components/dropDown'
import Card from '../components/card'
import data from '../data/data.json'


function Local() {
  const [currentCity, setCurrentCity] = useState("서울")
  const [currentLocal, setCurrentLocal] = useState("중구")
  const getCitiesWithLocal = data.response.body.items.reduce((acc, cur) => { 
    if(!acc[cur.sidoName]){
      acc[cur.sidoName] = [cur.stationName];
    }else if(!acc[cur.sidoName].includes(cur.stationName)){
      acc[cur.sidoName].push(cur.stationName)
    }
    //{서울:[중구, 강남구], 경기:[부천] }
    acc[cur.sidoName].sort((a, b) => b-a)
    return acc
  },{})
  
  const onChangeLocalList = (e) =>{
    setCurrentCity(e.target.value)
    setCurrentLocal(getCitiesWithLocal[e.target.value][0])
  }

  const getCities = data.response.body.items.reduce((acc, el)=>{
    if(!acc.includes(el.sidoName)){
      acc.push(el.sidoName)
    }
    return acc
  },[])

  const onGetLocal = (e) => {
    setCurrentLocal(e.target.value)
  }

  const findData = (city, local) =>{
    const datum = data.response.body.items.filter(el =>{
      return el.sidoName === currentCity && el.stationName === currentLocal
    })
    return datum
  }

  return (
    <div>
      <div>
        <DropDown options = {getCities} onGetLocal={onGetLocal} onChangeLocalList={onChangeLocalList} type = "city" />
        <DropDown options = {getCitiesWithLocal[currentCity]} onGetLocal={onGetLocal}/> 
      </div>
      <div>
        <Card city = {currentCity} local={currentLocal} findData={findData} />
      </div>
    </div>
  )
}
  
  export default Local