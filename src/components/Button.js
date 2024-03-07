import React from "react";

const button_style={
    width: '150px',
    height:'40px',
    borderRadius : '5px',
    backgroundColor : '#E11D48',
    marginLeft : '20px',
    textAlign : 'center',
    fontSize : '14px',
    color: 'white',
    cursor : 'pointer'
    


}

function Button(props){
    return(
        <button style={button_style}>{props.name}</button>
    )
}
export default Button;