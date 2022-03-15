import React from "react";
import HeaderNavLink from "../items/HeaderNavLink"
import { IcoClose, LogoImg } from "./Icones";

export default function HeaderOptions(){

    function showMenu(){
        const floatOptions = document.querySelector('.optsFloat');
        floatOptions.classList.toggle('showOpt');
    }

    return (
        <>
            <img onClick={showMenu} src="./images/Group 2.svg" alt="Button of options link" className="header-options" title="Options" />
            <div className="optsFloat">
                <LogoImg/>
                <span onClick={showMenu} title="Close">
                    <IcoClose/>
                </span>

                <nav className="floatNav">
                    <ul>
                        <HeaderNavLink titulo="About Us" link="#"/>
                        <HeaderNavLink titulo="Models" link="#"/>
                        <HeaderNavLink titulo="Guarantee" link="#"/>
                    </ul>
                </nav>
            </div>
        </>
    )
}