import React from 'react'
import { accountService } from '@service/Account.service';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Default() { 
    const navigate=useNavigate()
    useEffect(() => {
        if (accountService.isLogged()&&accountService.getRole()==='EMPLOYE') 
            navigate('/employe/profile/' + accountService.getUserName())
        if (accountService.isLogged()&&accountService.getRole()==='EMPLOYEUR') 
            navigate('/employeur/profile/' + accountService.getUserName())
        if (accountService.isLogged()&&accountService.getRole()==='MODERATEUR') 
            navigate('/moderateur')
        if (!accountService.isLogged())
            navigate('/')
    },[])
    return <></>
}