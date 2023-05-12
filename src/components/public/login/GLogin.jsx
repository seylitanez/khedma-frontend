import React from 'react'
import { GoogleLogout } from 'react-google-login';

import {GoogleLogin} from 'react-google-login';


export default function GLogin({titre,onSuccess,onFailure}) {
    function onFailure(e){
        console.log(e);
    }
  return (
    <div>
      <GoogleLogin  clientId={"96654489585-9kfrhk9jgeq4nodccs7tg0lagl1hq6uj.apps.googleusercontent.com"} buttonText={titre} onSuccess={(e)=>onSuccess(e)} onFailure={onFailure} cookiePolicy={"single_host_origin"} isSignedIn={true} />
    </div>
  )
}
