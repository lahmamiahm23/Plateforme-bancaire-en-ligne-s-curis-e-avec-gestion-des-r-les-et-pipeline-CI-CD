import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import Authentication, { useSession } from "../../Security/SessionContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const WelcomeMessage = (props) => {
  const { isLoggedIn, setIsLoggedIn } = useSession();
  const history = useHistory();

  useEffect(() => {
    if (!Authentication.checkAutherization("USER", isLoggedIn, setIsLoggedIn))
      history.push("/user_login");
  }, []);

  // 🎨 Styles internes
  const containerStyle = {
    background: "linear-gradient(135deg, #0d6efd, #198754)",
    minHeight: "100vh",
    padding: "20px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "20px",
    maxWidth: "800px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "15px",
  };

  const strongStyle = {
    color: "#00ffcc",
  };

  return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <Card.Body>
            <Card.Title style={titleStyle}>
              Cher(e) client(e), {props.user.firstName}
            </Card.Title>

            <Card.Text>
              Bienvenue sur la plateforme en ligne de <strong>EMI Banque</strong> !
              <br />
              <br />
              Nous sommes ravis de vous compter parmi nos clients et nous vous
              remercions pour la confiance accordée à notre institution. Chez EMI
              Banque, nous nous engageons à vous offrir des solutions bancaires
              <strong> modernes, sécurisées et accessibles </strong> pour vous
              accompagner dans votre parcours financier.
            </Card.Text>

            <Card.Text>
              En tant que titulaire de compte, vous bénéficiez d’une suite
              complète de fonctionnalités pour simplifier vos opérations
              bancaires. Que ce soit pour vos transactions quotidiennes, la
              gestion de vos cartes ou encore le suivi de vos finances, notre
              plateforme est conçue pour vous offrir confort et efficacité.
            </Card.Text>

            <Card.Text>
              <strong style={strongStyle}>Fonctionnalités principales :</strong>
              <ul>
                <li>
                  <strong>Transfert d’argent :</strong> envoyez de l’argent en
                  toute sécurité vers vos comptes ou vers des tiers.
                </li>
                <li>
                  <strong>Gestion des cartes :</strong> commandez de nouvelles
                  cartes bancaires ou gérez vos cartes existantes en ligne.
                </li>
                <li>
                  <strong>Historique des transactions :</strong> consultez vos
                  mouvements financiers (quotidien, mensuel, annuel).
                </li>
                <li>
                  <strong>Analyse financière :</strong> obtenez des rapports et
                  conseils personnalisés pour mieux gérer votre budget.
                </li>
              </ul>
            </Card.Text>

            <Card.Text>
              Votre <strong>sécurité</strong> et votre <strong>confidentialité</strong>
              sont notre priorité absolue. La plateforme est protégée par des
              systèmes de sécurité avancés pour vous garantir une expérience
              bancaire fiable.
              <br />
              <br />
              En cas de besoin, notre service d’assistance est à votre disposition
              pour répondre rapidement à toutes vos questions.
            </Card.Text>

            <Card.Text>
              Encore une fois, bienvenue chez <strong>EMI Banque</strong>. Nous
              sommes fiers de vous accompagner dans vos projets financiers.
              <br />
              <br />
              Cordialement, <br />
              <strong>EMI Banque</strong>
            </Card.Text>
          </Card.Body>
        </div>
      </div>
  );
};

export default WelcomeMessage;
