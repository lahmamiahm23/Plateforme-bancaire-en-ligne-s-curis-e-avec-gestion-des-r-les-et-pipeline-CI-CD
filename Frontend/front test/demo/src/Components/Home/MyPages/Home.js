import React, { useEffect } from 'react';
import Service from '../MyPages/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Style/home.scss';
import image_accueil from '../images/home-img.svg';
import logo_banque from '../images/logo3.png';
import portefeuille from '../images/wallet.png';
import argentRapide from '../images/fastMoney.png';
import paiementFacile from '../images/easyP.png';


const Accueil = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);


    return (
        <section className="home_cls">

            <div className="home-cntr">

                <div className="home_txt">

                    <p1 className="greetings">Bienvenue chez,</p1>
                    <div data-aos="fade-right" data-aos-delay="0" className="name_logo_bx">
                        <img src={logo_banque} alt="" />
                    </div>
                    <p>
                        "Où la banque rencontre l'innovation et la commodité !"
                    </p>
                    <h3>Ceci est un site web pour les employés de Wafasalaf (Découvrez nos services ci-dessous).</h3>

                    <div className="features">
                        <div data-aos="fade-up-right" data-aos-delay="20" className="ft">
                            <img src={paiementFacile} alt="paiement facile" />
                            <span>Paiements Faciles</span>
                        </div>
                        <div data-aos="fade-up-right" data-aos-delay="20" className="ft">
                            <img src={argentRapide} alt="argent rapide" />
                            <span>Paiements Rapides</span>
                        </div>
                        <div data-aos="fade-up-right" data-aos-delay="20" className="ft">
                            <img src={portefeuille} alt="portefeuille sécurisé" />
                            <span>Paiements Sécurisés</span>
                        </div>


                    </div>
                </div>

                <div className="home_img">
                    <img src={image_accueil} alt="accueil Wafasalaf" />
                </div>

            </div>
            <Service />


        </section>
    );
};

export default Accueil;
