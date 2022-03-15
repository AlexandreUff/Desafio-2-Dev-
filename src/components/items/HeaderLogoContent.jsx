import React from "react"
import { LogoImg } from "./Icones"

export default function HeaderLogoContent(){
    return (
        <div className="logo-content">
            <LogoImg/>
            <div>
                <h1>zutterman</h1>
                <h2>Measure Tapes</h2>
            </div>
        </div>
    )
}