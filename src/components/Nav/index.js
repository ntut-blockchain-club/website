import "./index.scss";
import { useState } from "react";
import Nav_menu_list from "./Nav_menu_list";
import Ntut_Logo from '../../assets/images/ntut_blockchain_club_logo_v3_white.svg';
import { BsLine, BsFacebook, BsInstagram, BsDiscord } from  "react-icons/bs";
function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="nav_container">
                <img className="logo" src={Ntut_Logo} alt="logo"  />
            <div className="nav_menu">
            <a className="nav_link" href="https://www.facebook.com/NTUTBlockchain/"><BsFacebook /></a>
            <a className="nav_link" href="https://discord.gg/T49uBSxenv"><BsDiscord /></a>
            <a className="nav_link" href="https://line.me/ti/g/o-rA-MI7M7"><BsLine /></a>
            <a className="nav_link" href="https://www.instagram.com/ntut.blockchain"><BsInstagram /></a>
            <a className="nav_link join" href="https://forms.gle/LGU7sS4RRSGDtBxE7">加入我們！</a>
            </div>
            <div className="nav_menu_button" onClick={toggle}>
            <svg t="1661880574810" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2478" width="200" height="200"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 784H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 472H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" p-id="2479" fill="#ffffff"></path></svg>
            {
                isOpen ? (
                    console.log("isOpen"),
                    <Nav_menu_list />
                ) : null

            }
            
            </div>


        </div>
    );
}

export default Nav;
