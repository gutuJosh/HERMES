import PropTypes from 'prop-types';
import React, { useState } from 'react';

const DynamicTabs = (props) => {

 const [active, setActive] = useState(props.activeTab);
 let counter = 0;

 function switchTab(event){
   setActive(event.target.value);
 }

  return(
    <div className="tabs-container">
      <nav className="tab-menu">
       <ul className={`flex ${props.flexType}`}>
       {props.tabs.map((item, i) => {
           counter++;
           return (
               <li key={i} className={props.flexType === 'full' ? "flex-item" : ""}>
                 <input 
                  type="radio" 
                  id={props.name.replace(/ /g, '-')+'_'+counter} 
                  name={props.name}
                  value={item.id}
                  onChange={switchTab}
                 />
                 <label htmlFor={props.name.replace(/ /g, '-')+'_'+counter}>{item.title}</label>
               </li>
           )
           })}
       </ul>
      </nav>
      <div className="tab-list">
      {props.children.map((component, i) => {
           counter++;
           return (
               <div className={component.key === active ? 'active' : ''} key={i} >
                 {component} 
               </div>
           )
           })}
      </div>
    </div>
);
  };

DynamicTabs.protoTypes = {
    flexType: PropTypes.string,
    tabs: PropTypes.array,
    children: PropTypes.element.isRequired
    
}

export default DynamicTabs;