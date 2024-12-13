import React from 'react'

function Alert(props) {
  const capitalize =(word)=>{
       const lower = word.toLowerCase();
       return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
        
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg} 
       {/* if type of alert is successful then msg will execute */}  
      </div>

  )
}

export default Alert
