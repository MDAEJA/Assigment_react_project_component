import React from 'react';
import logo from '../assets/images/logo.svg';
// import inner_home_img from '../assets/images/inner_home_img.avif'


const header_img={
  display : 'flex',
  justifyContent : 'center',
 
  gap : '5px',
  cursor : 'pointer'
  
}
const logo_heading={
    fontWeight : 'semibold',
    fontSize : '1.5rem',
    lineHeight : '2rem',
    marginTop : '15px',
    cursor : 'pointer'
}
const unorderlist={
    display : 'flex',
    gap : '20px',
    listStyle : 'none',
    fontWeight : '500',
    fontSize : '1rem',
    lineHeight : '2rem',
    cursor : 'pointer'
}
const header_button ={
    width : '100px',
    height : '40px',
    borderRadius : '10px',
    backgroundColor : 'blue',
    padding : '10px',
    textAlign : 'center',
    marginTop : '12px',
    color : 'white',
    fontSize :'15px',
    cursor : 'pointer'
}
const navbar={
    backgroundColor : 'white',
    border : '2px solid black',
    // backgroundColor : 'yellow',
    display : 'flex',
    justifyContent : 'space-around',
    alignItem : 'center',
    position : 'sticky',
    top : '0px',
    width : '100%',
    zIndex : '3'
}

function Header(){
    return (
        <>
        <div style={navbar}> 
            <div style={header_img}>
                <img src={logo} alt={"logo-img"}></img>
                <span style={logo_heading}>GeeksFoods</span>
            </div>

            <div>
              
              <ul style={unorderlist}>
                 <li style={{color : 'blue'}}>Home</li>
                 <li>Quote</li>
                 <li>Restaurants</li>
                 <li>Foods</li>
                 <li>Contact</li>
              </ul>

            </div>

            <div>
         
         <button style={header_button}>Get started</button>

            </div>

        </div>

        </>
        
    )
}

export default Header;
