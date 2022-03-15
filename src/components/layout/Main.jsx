import React from "react"
import MainSection from "../items/MainSection"

export default function Main(){
    return (
        <main>
            <MainSection cssApply="area-1">
                    <h4>Measuring everything</h4>
                    <img src="./images/Bitmap Copy.png" alt="Imagem de uma fita métrica enrolada." />
            </MainSection>

            <MainSection cssApply="area-2">
                    <h4>We are Leader <br /> in Measure Tapes</h4>
                    <h5>There are 5x the circumference of planet earth in metric tapes.</h5>

                    <img src="./images/Group 1.png" alt="Imagem de uma fita métrica pouco esticada." />
            </MainSection>
    </main>
    )
}