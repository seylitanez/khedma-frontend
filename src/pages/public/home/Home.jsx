import React from 'react'
import imgh from '@image/img_home.svg'
import "./home.scss";
import {Search} from '@p-pages';
import { useContext } from 'react';

export default function Home() {
  return (
    <div className='home'>
      <div className="img">
        <img src={imgh} alt="" />
      </div>
        <Search/>
    </div>
  )
}
