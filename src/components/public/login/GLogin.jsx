import React from 'react'

import {GoogleLogin} from 'react-google-login';


export default function GLogin({titre,onSuccess}) {
    function onFailure(e){
        console.log(e);
    }

  return (
    <div><GoogleLogin clientId={"96654489585-9kfrhk9jgeq4nodccs7tg0lagl1hq6uj.apps.googleusercontent.com"} buttonText={titre} onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={"single_host_origin"} isSignedIn={true} /></div>
  )
}
