import React from 'react';
import GithubLogo from '../images/GithubLogo.png';
import LinkedIn from '../images/LinkedIn.png';

function Footer(props) {
    return (
        <div className="footer">
            <div className="links">

                <div className="kel">
                    
                    <a 
                        href="https://github.com/azack22"
                        target="blank"
                        rel="noreferrer"
                    >
                        <img src={GithubLogo} alt="Github"/>
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/abdirizak-hussein/"
                        target="blank"
                        rel="noreferrer"
                    >
                        <img src={LinkedIn} alt="LinkedIn"/>
                    </a>

                    <h4>Abdirizak Hussein</h4>

                </div>

                <div className="abdi">

                    <a 
                        href="https://github.com/KelpiusZ"
                        target="blank"
                        rel="noreferrer"
                    >
                        <img src={GithubLogo} alt="Github"/>
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/kelpius-zannou/"
                        target="blank"
                        rel="noreferrer"
                    >
                        <img src={LinkedIn} alt="LinkedIn"/>
                    </a>

                    <h4>Kelpius Zannou</h4>

                </div>
            </div>
        </div>
    );
}

export default Footer;