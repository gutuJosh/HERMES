import PropTypes from 'prop-types';
import React, { useState } from 'react';

const CustomSelector = (props) => {
  
  const [toggle, setToggle] = useState(false);
  const [placeholder, setPlaceholder] = useState(props.placeholder);

  let counter = 0;
  return(
    <div className={props.containerClass}>
     <label className="selector-label">{props.label}</label>
     <div className="custom-selector">
     <input 
      type="checkbox" 
      id={props.selectorId} 
      className="open-select-list"
      checked={toggle}
      onChange={(event)=>{
         if(event.target.checked === true){
           setToggle(true);
         }
         else{
           setToggle(false);
         }
      }}
      />
     <label className="placeholder pointer" htmlFor={props.selectorId}>{placeholder}</label>
     <div className="select-menu">
       <ul className="select-options list-group">
        {props.options.map((item, i) => {
           counter++;
           return (
          <li key={i}>
              <input 
               type="radio" 
               name={props.name} 
               id={props.name+'_'+counter} 
               value={item.value} 
               data-title={item.title}
               className="custom-option"
               defaultChecked={props.selectedValue === item.value ? true : false} 
               onChange={(event) => {
                 setPlaceholder(event.target.dataset.title);
                 setToggle(false);
                 props.change;
               }}
               />
              <label className="pointer" htmlFor={props.name+'_'+counter}>{item.title}</label>
          </li>
           )
        })}
       </ul>
      </div>
     </div>
     <span className="text-error small mtop10">{props.errorMessage}</span>
     <span className="text-warning small mtop10">{props.warningMessage}</span>
     <span className="text-success small mtop10">{props.successMessage}</span>
   </div>
  );
};
  
CustomSelector.protoTypes = {
    containerClass: PropTypes.string,
    label: PropTypes.string,
    selectorId: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options:PropTypes.object.isRequired,
    name: PropTypes.string,
    selectedValue:PropTypes.oneOfType([ 
        PropTypes.string, 
        PropTypes.number,
        PropTypes.bool
      ]),
    change:PropTypes.func,
    errorMessage:PropTypes.string,
    warningMessage:PropTypes.string,
    successMessage:PropTypes.string
}
export default CustomSelector;