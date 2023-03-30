import React from 'react'

export default function Input({ type, onChange, placeholder, id, className, onInput, value, name, requirede,children}) {
    if (children===undefined) {
        return(<input type={type} className={className} requirede onChange={onChange} placeholder={placeholder} id={id} onInput={onInput}name={name} value={value}/>)
    }
    return (
        <>  
            <label htmlFor={id}>{children}</label>
            <input type={type} className={className} required={requirede} onChange={onChange} placeholder={placeholder} id={id} onInput={onInput}name={name} value={value}/>
        </>
    )
}