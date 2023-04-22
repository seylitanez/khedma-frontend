import React from 'react'

export default function ({children,id,style,className,onClick}) {
  return (
    <button id={id} className={className} style={style} onClick={onClick}>{children}</button>
  )
}