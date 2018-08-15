import React from 'react';


const SubHead = (props) =>{
    return(
        <React.Fragment>
            <label>Toggle the Parent Component: </label>
            <button onClick={props.func.clickToggle}>toggle</button>
            <input onChange={props.func.typeValue} type="text" value={props.v}/>
        </React.Fragment>
    )
}

export default SubHead;