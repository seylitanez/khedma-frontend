import React from 'react'
import imgh from '@image/img_home.svg'
import "./home.scss";
import {Search} from '@p-pages';

export default function Home() {
  return (
    <div className='home'>
      <div className="img">
        <Search/>
        <img src={imgh} alt="" />
      </div>
    </div>
  )
}
