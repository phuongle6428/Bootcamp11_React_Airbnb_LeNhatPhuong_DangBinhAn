import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import MenuIcon from '@material-ui/icons/Menu'
import { Avatar,IconButton } from '@material-ui/core'

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="logo" />
            </Link>
            <div className="header__center">
                <input type="text" placeholder="Bắt đầu tìm kiếm"/>
                <SearchIcon className="search__icon"/>
            </div>
            <div className="header__right">
                <p>Trở thành chủ nhà</p>
                <IconButton>
                    <LanguageIcon/>
                </IconButton>
                
                    <IconButton>
                        <MenuIcon className="menu__icon"/>
                        
                    </IconButton>
                    <Avatar className="ava__icon"/>
                
                
            </div>
        </div>
        // <div className="header">
        //     {/* left */}
        //     <div>
        //         <Link to="/">
        //             <img className="header__icon" 
        //             src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" 
        //             alt="logo" />
        //         </Link>
        //     </div>

        //     {/* middle */}
        //     <div className="header__center">
        //          <input type="text" placeholder="Bắt đầu tìm kiếm" />
        //          <SearchIcon className="search__icon"/>
        //     </div>

        //     {/* right */}
        //     <div></div>
        // </div>
    )
}

export default Header;
