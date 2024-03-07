import React from 'react';

const footer={
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center',
    gap : '20px',
    // height : '250px',
    backgroundColor : 'whitesmoke'
}
function Fotter(){
    return (
        <>
        <div style={footer}> 

     <div style={{display:'flex', alignItems:'center',gap:'10px'}}>
        <img src={'https://cdn-icons-png.flaticon.com/128/6010/6010539.png'} alt='' style={{width:'40px',height:'40px'}}></img>
        <h2 style={{color:'green'}}>Logiopsum</h2>
     </div>

     <div style={{marginLeft:'35%',marginRight:'35%',textAlign:'center'}}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
     </div>
     <div>
     <ul style={{display:'flex',listStyle:'none',gap:'30px',cursor:'pointer'}}>
        <li>About</li>
        <li>Carrers</li>
        <li>History</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Blogs</li>
     </ul>
     </div>

     <div >
     <ul style={{display:'flex',listStyle:'none',gap:'30px',cursor:'pointer'}}>
        <li><a href={'vg'}><img src={'https://cdn-icons-png.flaticon.com/128/6422/6422199.png'} alt={''} style={{width:'40px',height:'40px'}}></img></a></li>
        <li><a href={'vg'}><img src={'https://cdn-icons-png.flaticon.com/128/6422/6422200.png'} alt={''} style={{width:'40px',height:'40px'}}></img></a></li>
        <li><a href={'bh'}><img src={'https://cdn-icons-png.flaticon.com/128/6422/6422210.png'} alt={''} style={{width:'40px',height:'40px'}}></img></a></li>
        <li><a href={'bnh'}><img src={'https://cdn-icons-png.flaticon.com/128/6424/6424084.png'} alt={''} style={{width:'40px',height:'40px'}}></img></a></li>
        <li><a href={'jn'}><img src={'https://cdn-icons-png.flaticon.com/128/6423/6423302.png'} alt={''} style={{width:'40px',height:'40px'}}></img></a></li>
        {/* <li><a href={''}><img src={''} alt={''} style={{width:'40px',height:'40px'}}></img></a></li> */}
     </ul>

     </div>

        </div>
        </>
    )
}

export default Fotter;