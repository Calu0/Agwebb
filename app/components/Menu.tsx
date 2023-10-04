'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaArrowLeft } from 'react-icons/fa'
import Logout from './LogoutButton'
import Link from 'next/link'



const Menu = ({ onToggleMenu }:any) => {

    const [visible, setVisible] = useState(false);

    function displayDiv() {
        return visible ? "block" : "none";
    }

    const hideWhenDisplay = function() {
        return visible ? "none" : "block";
    }

    useEffect(() => {
        onToggleMenu(visible);
      }, [visible, onToggleMenu]);

    return (
        <div id='menu'>
            <div className='icon menuIcon' onClick={() => setVisible(!visible)} style={{ display: hideWhenDisplay() }}><FaBars size={20}/></div>
            <nav className='menuContainer' style={{ display: displayDiv() }}>
                <div className='menuWrapper'>
                    <div className='icon arrowLeft' onClick={() => setVisible(!visible)}><FaArrowLeft size={20}/></div>
                    <div className='menuTxt'>
                        <h1>NewProject</h1>
                        <ul>
                        <Link href="/"><li>Tableau de bord</li></Link>
                        <Link href="/myProjects" onClick={() => setVisible(!visible)}><li>Mes projets</li></Link>
                        <Link href="/myAccount" onClick={() => setVisible(!visible)}><li>Mon compte</li></Link>
                            <li><Logout/></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu