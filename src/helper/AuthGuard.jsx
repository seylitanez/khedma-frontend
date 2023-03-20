import React from 'react'
import { accountService} from "@service";
import { Navigate } from 'react-router-dom';

export default function AuthGuard({role,children}) {
    return (accountService.isLogged()&&role===accountService.getRole())?children:<Navigate to="/auth"/>
}
