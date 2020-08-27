import React from 'react';
import './country.css'


const country = (props) => {
    
    const addCountry = props.handleCountry;
    
    return (
        <div className="Country">
         
         <div className="img">
             {
                  <p>{props.coun.name}</p>
              
            }
          
          {
                <img src={props.coun.flag} alt=""/>
          }
          
          </div>
          <button onClick={()=>addCountry(props.coun)}>Add me</button>
         
        </div>
    );
};

export default country;