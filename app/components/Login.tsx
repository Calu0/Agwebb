"use client"

import React, { useState } from 'react'
import Messages from "./messages"


const Login = function login() {

  const [visible, setVisible] = useState(false);

  function showField() {
    return visible ? "block" : "none";
  }

  function hiddenInput(){
    return visible ? "block" : "hidden";
  }

  
  return (
    <div className="formWrapper">
      <form
        action="../auth/sign-in"
        method="post"
      >
        <label htmlFor="email">
        Adresse mail
        </label>
        <input
          name="email"
          placeholder="JohnDoe@gmail.com"
          required
        />
        <label htmlFor="username" style={{display : showField()}}>
          Nom d'utilisateur
        </label>
        <input
          name="username"
          type={hiddenInput()}
          placeholder="JohnDoe7"
          required
        />
        <label htmlFor="password">
          Mot de passe
        </label>
        <input
          type="password"
          name="password"
          placeholder="************"
          required
        />
      <div className="btnContainer">   
        <button
        onClick={() => setVisible(false)}        
        >
          Se connecter
        </button>
        <button
          formAction="../auth/sign-up"
          onClick={() => setVisible(true)}
        >
          Créer un compte
        </button>
      </div>
        <Messages />
      </form>
    </div>
  )
}

export default Login