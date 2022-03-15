import React from "react"
import HeaderLogoContent from "../items/HeaderLogoContent"
import HeaderNavLink from "../items/HeaderNavLink"
import HeaderOptions from "../items/HeaderOptions"

export default function Header(){
    return (
        <header>
        <HeaderOptions/>
        <HeaderLogoContent/>

        <nav className="nav-main-header">
            <ul>
                <HeaderNavLink titulo="About Us" link="#"/>
                <HeaderNavLink titulo="Models" link="#"/>
                <HeaderNavLink titulo="Guarantee" link="#"/>
            </ul>
        </nav>
    </header>
    )
}