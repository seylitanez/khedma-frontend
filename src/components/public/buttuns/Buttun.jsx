import React from 'react'

export default function ({children,id}) {
  return (
    <button id={id}>{children}</button>
  )
}
