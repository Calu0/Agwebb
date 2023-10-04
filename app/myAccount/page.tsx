'use client'

import Menu from '../components/Menu'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import Account from '../components/Account';
import Logout from '../components/LogoutButton'

export default function Index() {

  const [menuVisible, setMenuVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const isMenuVisible = function () {
    return menuVisible && isMobile ? "none" : "block";
  };

  return (
    

    <div className='mainPage'>
        <Menu onToggleMenu={setMenuVisible}/>
        <section className="corePage" style={{ display: isMenuVisible() }}>
          <div className='accountPageContainer'>
            <div className='accountPageWrapper'>
            <h2>Mon compte</h2>
            <Account/>
            </div>
          </div>
        </section>      
    </div>
  )
}

