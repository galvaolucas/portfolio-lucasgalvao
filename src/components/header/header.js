import React from 'react'
import './header.css'
import Web from '../home/web/web'
import Mobile from '../home/mobile/mobile'

function Header() {
//condicao para abrir o menu mobile
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className='header'>
            <div className='logo'> Lucas's Portfolio</div>
                <div className='menu'> 
                    <div className = 'web-menu'>
                    <Web />
                    </div>
            
                    <div className='mobile-menu'> 
                    <div onClick={()=>setIsOpen(!isOpen)}>
                    <i class="fi-rr-apps menu-icon"></i>                   
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} /> }
                    </div>
            </div>
        </div>
    )
};

export default Header