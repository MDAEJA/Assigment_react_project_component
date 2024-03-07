import React from 'react';
import seo from '../assets/images/seo.avif';

const property_style={
    width : '350px',
    // height : '230px',
    // border : '2px solid black',
    textAlign : 'center',
    padding : '10px ',
    marginLeft : '20px',
    borderRadius : '10px',
    backgroundColor : 'whitesmoke',
    fontSize:'15px',
    fontStyle:'oblique'
}

function Props(props){
    return (
        <>
        <div>

        <div style={property_style}>
            <p>{props.name}</p>
        </div>

        <div style={{display : 'flex',gap :'20px',marginLeft:'30px'}}>
            <div>
            <img src={seo} alt={"seo-img"} style={{width:'55px',height:'55px',borderRadius:'50%',marginTop:'20px'}}></img>
            </div>
            <div>
                <h4>Gladis Lennon</h4>
                <p style={{marginTop:'-20px'}}>Head of SEO</p>
            </div>
        </div>

        </div>
        </>
    )
}
export default Props;