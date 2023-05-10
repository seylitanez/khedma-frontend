import React from 'react'
import "./side.scss"
import { BsCardChecklist } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { RxDashboard } from 'react-icons/rx'
import { FcStatistics } from 'react-icons/fc'

export default function () {
    return (
        <div className='side-moderateur'>
            <div className="sidebar__item">
                <RxDashboard size={20} className='prf' />
                <Link to="dashboard" >Dashboard</Link>
            </div>
            <div className="sidebar__item">
                <BsCardChecklist size={20} className='prf' />
                <Link to='listuser'>ListUser</Link>
            </div>
            <div className="sidebar__item">
                <BsCardChecklist size={20} className='prf' />
                <Link to='listannonce'>ListAnnonce</Link>
            </div>
            <div className="sidebar__item">
                <FcStatistics size={20} className='prf' />
                <Link to='statistic'>Statistic</Link>
            </div>
        </div>
    )
}