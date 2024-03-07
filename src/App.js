
import React from 'react';
import './App.css';
import Header from './components/Header';
import Props from './components/Props';
import Button from './components/Button';
import Fotter from './components/Fotter';


const text_div={
display : 'flex',
flexDirection : 'column',
alignItems : 'center',
justifyContent : 'center',
// height : '100vh',
textAlign : 'center',
padding : '120px 100px',

}
const inner_div={
  position : 'absolute',
  top : '150px',
  width : '500px',
  marginLeft : "200px",
  padding : '10px'
}
//font-size: 1.25rem;
// line-height: 1.625;


const button__style={
  width: '150px',
  height:'40px',
  borderRadius : '5px',
  backgroundColor : 'white',
  marginLeft : '20px',
  textAlign : 'center',
  fontSize : '14px',
  color: '#E11D48',
  // marginTop : '-20px',
  cursor : 'pointer'


}
const button___style={
  width: '150px',
  height:'40px',
  borderRadius : '5px',
  backgroundColor : 'blue',
  // marginLeft : '20px',
  textAlign : 'center',
  fontSize : '14px',
  color: 'white',
  // marginTop : '-20px',
  cursor : 'pointer'
}




function App() {
  return (
    <>
    <Header></Header>
    <div className='back-img'>
      <div style={inner_div}>  
        <h1 style={{fontSize:"48px",fontWeight:'bold',marginLeft:'50px'}}>Let us find your</h1>
        <h1 style={{fontSize:"48px",fontWeight:'bold',color:'#BE123C',marginTop:'-30px',marginLeft:'50px'}} >Forever Food.</h1>
        <p style={{fontSize:'1.25rem',lineHeight:'1.625',opacity:'1',fontWeigh:'800'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>

        <div style={{display:'flex',alignItems:'center',paddingTop:'20px',}}> 
          <Button  name={"Search Now"}></Button>
          <button style={button__style}>Known More</button>
        </div>
        </div>
      
    </div>
    <div>

    <div style={{display:'flex',position : 'relative'}}>

     <div className='home-img'></div>
     <div className='text-div'>
      <div style={text_div}>
      <h2 style={{fontSize:'25px',fontStyle:'italic'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
      <p style={{fontSize:'15px',fontStyle:'oblique'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
      <button style={button___style}>Get In Touch</button>
      </div>
     </div>

    </div>
    </div>
   <div style={{marginTop :'10px',display:'flex',gap:'20px',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
    <Props name='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.'></Props>

    
    <Props name='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.'></Props>

    <Props name="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!"></Props>

    <Props name='Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.'></Props>

    <Props name='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.'></Props>
    <Props name='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.'></Props>
    
    </div>

    <footer>
      <div>
        <Fotter></Fotter>
      </div>
    </footer>
    
    </>
    
    
    
  );
}


export default App;

