import React from 'react';
import 'aos/dist/aos.css';
import imgPretOr from '../images/GoldLoan.png';
import imgMaison from '../images/home2.jpg';
import imgSalaire from '../images/salary_plus.jpg';
import imgStock from '../images/stock.jpg';
import '../Style/services.scss';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    {
        url: "https://www.google.com/imgres?q=emi&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Ffr%2F0%2F05%2FEMI.PNG&imgrefurl=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2F%25C3%2589cole_Mohammadia_d%2527ing%25C3%25A9nieurs&docid=MQjYJ5eurdnSWM&tbnid=LnkbEEi8HJhgTM&vet=12ahUKEwiyrpD99NuPAxWkgP0HHSl-MiEQM3oECBcQAA..i&w=441&h=260&hcb=2&ved=2ahUKEwiyrpD99NuPAxWkgP0HHSl-MiEQM3oECBcQAA",
    },
    {
        url: "https://www.google.com/imgres?q=emi&imgurl=https%3A%2F%2Findustries.ma%2Fwp-content%2Fuploads%2F2022%2F05%2F279368465_1204376276633902_2592756510119465154_n.jpg&imgrefurl=https%3A%2F%2Findustries.ma%2Fformation-emploi-la-28eme-edition-du-forum-emi-a-ouvert-ses-portes%2F&docid=DDsajK5OX7PmSM&tbnid=PwktmZNSR1THlM&vet=12ahUKEwiyrpD99NuPAxWkgP0HHSl-MiEQM3oECBoQAA..i&w=2048&h=1362&hcb=2&ved=2ahUKEwiyrpD99NuPAxWkgP0HHSl-MiEQM3oECBoQAA",
    },
    {
        url: "https://www.google.com/imgres?q=emi&imgurl=https%3A%2F%2Fwww.idfcfirstbank.com%2Fcontent%2Fdam%2Fidfcfirstbank%2Fimages%2Fblog%2Fwhat-is-an-emi-717x404.jpg&imgrefurl=https%3A%2F%2Fwww.idfcfirstbank.com%2Ffinfirst-blogs%2Ffinance%2Fwhat-is-an-emi&docid=58ex5hY5yJqJgM&tbnid=XFpRmD69_77NwM&vet=12ahUKEwiyrpD99NuPAxWkgP0HHSl-MiEQM3oECEIQAA..i&w=717&h=404&hcb=2&ved=2ahUKEwiyrpD99NuPAxWkgP0HHSl-MiEQM3oECEIQAA",
    },
];

const donneesServices = [
    {
        image: imgMaison,
        title: 'CRÉDIT IMMOBILIER STAR',
        desc: `Fournit des prêts pour acheter un terrain pour la construction d'une maison...`,
        link: '/user_login',
        btn: 'En Savoir Plus',
    },
    {
        image: imgPretOr,
        title: 'PRÊT SUR OR',
        desc: 'Le prêt sur or est le moyen le plus pratique et facile de réaliser tous vos...',
        link: '/virementArgent',
        btn: 'En Savoir Plus',
    },
    {
        image: imgSalaire,
        title: 'COMPTE SALAIRE FONCTIONNAIRE',
        desc: 'Commencez à construire un avenir sûr et prospère avec un compte bancaire...',
        link: '/transactions',
        btn: 'En Savoir Plus',
    },
    {
        image: imgStock,
        title: 'PRÊT GARANTI PAR ACTIFS STAR',
        desc: '25% de commissions NFB Pour fournir du capital de fonctionnement...',
        link: '/transactions',
        btn: 'En Savoir Plus',
    }
];

const Services = () => {
    return (
        <>
            <div className="services_cls section_padding">

                <h1 className="main-title heading">Services
                </h1>
                <h3>Les employés de Wafasalaf peuvent effectuer les opérations suivantes.</h3>
                <div className="services-box">


                    {donneesServices.map((service, index) =>
                        (
                            <div key={index} data-aos="zoom-in-right" data-aos-delay="0" className="card">

                                <img src={service.image} alt={service.title} />

                                <div className="service-name">{service.title}</div>
                                <div className="service-desc">{service.desc}</div>

                                <a href={service.link}>
                                    <button>{service.btn}</button>
                                </a>

                            </div>
                        ))}
                </div>
            </div>
            <div className="myslider">
                <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                />
            </div>
        </>
    );
};

export default Services;
