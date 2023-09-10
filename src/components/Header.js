import React from 'react';
import headerLogo from '../image/logo.png';

function Header() {
    return (
        <header className='header'>
            <img src={headerLogo} alt='логотип' className="logo" />
        </header>
    )
}

export default Header;