import React from "react";
import { IcoFB, IcoTT, IcoYT } from "./Icones";

export default function FooterMediaArea(){
    return (
        <div className="follow">
            <h6>Follow Us</h6>
            <nav className="icons">
                <ul>
                    {/* Os links para as redes sociais só foram colocadas de "bonus" mesmo */}
                    <li>
                        <a href="https://www.youtube.com/" title="YouTube">
                            <div className="circle">
                                <IcoYT/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/" title="Facebook">
                            <div className="circle">
                                <IcoFB/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" title="Twitter">
                            <div className="circle">
                                <IcoTT/>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}