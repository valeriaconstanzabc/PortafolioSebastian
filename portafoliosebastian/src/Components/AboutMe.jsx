import React from 'react'
import cafe from '../Imgs/cafe.png'
import futbol from '../Imgs/futbol.png'
import musica from '../Imgs/musica.png'
import pasos from '../Imgs/pasos.png'
import cerebro from '../Imgs/cerebro.png'

const AboutMe = () => {
    return (
        <>
            <div id='sobremi' className="aboutMe-container">
                <div className="line"></div>
                <div className="aboutMe-tittle-container">
                    <h1>SOBRE MI</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>

                <div className="aboutMe-iconsAttributes-container">
                    <div className="containerIconsAttributes">
                        <img src={cafe} alt="Café"/>
                        <h3>3</h3>
                        <p>CAFÉS AL DÍA</p>
                    </div>

                    <div className="line-iconsAttributes"></div>

                    <div className="containerIconsAttributes">
                        <img src={futbol} alt="Fútbol"/>
                        <h3>375</h3>
                        <p>PARTIDOS JUGADO</p>
                    </div>

                    <div className="line-iconsAttributes"></div>

                    <div className="containerIconsAttributes">
                        <img src={musica} alt="Música"/>
                        <h3>57</h3>
                        <p>LISTAS REPRODUCIDAS</p>
                    </div>

                    <div className="line-iconsAttributes"></div>

                    <div className="containerIconsAttributes">
                        <img src={pasos} alt="Pasos"/>
                        <h3>8.033</h3>
                        <p>PASOS DIARIOS</p>
                    </div>

                    <div className="line-iconsAttributes"></div>

                    <div className="containerIconsAttributes">
                        <img src={cerebro} alt="Cerébro"/>
                        <h3>337</h3>
                        <p>NUEVOS APRENDIZAJES</p>
                    </div>
                </div>

                <div className="aboutMe-attributes-container">
                    <div className="attributes-me">
                        <h3>YO EN POCAS PALABRAS</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip.Lorem ipsum 
                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna 
                        </p>
                    </div>

                    <div className="line-attributes"></div>

                    <div className="attributes-skills">
                        <h3>HABILIDADES BLANDAS</h3>
                        <div className="attributesSkills colorOne">
                            <h4 className="percentage">80%</h4>
                            <h4 className="softSkill">COMPAÑERISMO</h4>
                        </div>
                        <div className="attributesSkills colorTwo">
                            <h4 className="percentage">70%</h4>
                            <h4 className="softSkill">COMPROMISO</h4>
                        </div>
                        <div className="attributesSkills colorThre">
                            <h4 className="percentage">100%</h4>
                            <h4 className="softSkill">PROACTIVIDAD</h4>
                        </div>
                        <div className="attributesSkills colorFour">
                            <h4 className="percentage">50%</h4>
                            <h4 className="softSkill">PUNTUALIDAD</h4>
                        </div>
                        <div className="attributesSkills colorFive">
                            <h4 className="percentage">90%</h4>
                            <h4 className="softSkill">PROFESIONALIDAD</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe
