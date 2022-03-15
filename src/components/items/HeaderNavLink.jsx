import React from "react";

export default function HeaderNavLink(props){
    return (
            <li>
                <a href={props.link} title={props.titulo}>
                    <h3>{props.titulo}</h3>
                </a>
            </li>
    )
}