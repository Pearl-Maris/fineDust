import React from 'react'

const DropDown = (props) => {
  if(props.type==="city"){
    return (
      <div>
        <select onChange={props.onChangeLocalList}>
          {props.options && props.options.map(el =>{
            return <option key={el}>{el}</option>
          })}
        </select>
      </div>
    );
  }

  return (
    <div>
      <select onChange={props.onGetLocal}>
        {props.options && props.options.map(el =>{
          return <option key={el}>{el}</option>
        })}
      </select>
    </div>
  );
}

export default DropDown