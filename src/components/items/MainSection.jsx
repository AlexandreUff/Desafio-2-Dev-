import React from "react";

export default function MainSection(props){
    return (
            /*
            A propriedade styleProps serve para caso o desenvolvedor queira passar
            algum estilo diferente do padrão existente dado pelo CSS (Ou complementar).
            Com isso, pode-se criar novas seções e passar novos estilos e não
            ficar "amarrado" a um padrão fornecido pelo CSS.
            Caso não queira passar nenhum estilo, poderá ficar livre também para tal,
            pois tanto ele quanto o CSS não são obrigatórios.
             */

        <section className={props.cssApply} style={props.styleProps}>
            {props.children}
        </section>
    )
}