import React from 'react'
import Bookmark from './bookmark'

const Card = (props) => {
  const {dataTime, pm25Value, pm25Grade} = props.currdata ? props.currdata : props.findData(props.city, props.local)[0]

    const status = (grade) =>{
      switch(grade){
        case 1 :
          return "좋음"
        case 2:
          return "보통"
        case 3:
          return "나쁨"
        case 4:
          return "매우 나쁨"
        default : return
      }
    }

    return (
      <div>
        <div>
          <div className='place'>
            <span className='local'>{props.local}</span><span className='city'>{props.city}</span>
          </div>

          <div className='bookmark'>
            <Bookmark/>
          </div>
          <div className='state'>
            {`${status(Number(pm25Grade))}`}
          </div>
          <div className='fine-dust'>
            미세먼지 수치 : {pm25Value}
          </div>
          <div className='date'>
            {dataTime}
          </div>
        </div>
      </div>
    )
}

export default Card