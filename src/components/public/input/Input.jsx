import React from 'react'

export default function Input({type,onChange,placeholder,id,className,onInput,children}) {
    if (children===undefined) {
        return(<input type={type} className={className} required onChange={onChange} placeholder={placeholder} id={id} onInput={onInput} />)
    }
    return (
        <>  
            <label htmlFor={id}>{children}</label>
            <input type={type} className={className} required onChange={onChange} placeholder={placeholder} id={id} onInput={onInput} />
        </>
    )
}