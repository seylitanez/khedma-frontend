import { accountService } from '@service/Account.service';
import React from 'react'
import { Navigate } from 'react-router-dom';

export default function AuthGuard({role,children}) {
    return (accountService.isValid()&&accountService.isLogged()&&role===accountService.getRole())?children:<Navigate to="/"/>
}
