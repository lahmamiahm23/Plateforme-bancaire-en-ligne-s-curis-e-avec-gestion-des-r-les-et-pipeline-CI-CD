import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Authentication, { useSession } from "../../Security/SessionContext";

const WelcomeMessage = (props) => {
  const { isLoggedIn, setIsLoggedIn } = useSession();
  const history = useHistory();

  useEffect(() => {
    if (!Authentication.checkAutherization("ADMIN", isLoggedIn, setIsLoggedIn))
      history.push("/employee_login");
  }, []);

  return (
      <div className="bg_updateprofile">
        <Card.Body style={{ color: "white", padding: 5 }}>
          <Card.Title>Bienvenue à EMI Banque</Card.Title>
          <Card.Title>Cher {props.user.firstName},</Card.Title>
          <Card.Text>
            Bienvenue sur le portail administratif d'EMI Banque !
            <br /><br />
            Nous sommes ravis de vous accueillir en tant qu’administrateur, chargé
            de superviser et de gérer les opérations de notre établissement bancaire.
            Vous jouez un rôle clé dans l’efficacité, la sécurité et la qualité
            de nos services afin d’assurer la satisfaction de nos clients.
          </Card.Text>
          <Card.Text>
            EMI Banque met à votre disposition des outils puissants pour faciliter
            la gestion et la prise de décisions. Ce portail vous permet d’accéder
            à un ensemble complet de fonctionnalités pour simplifier vos tâches
            administratives et prendre des décisions éclairées.
          </Card.Text>
          <Card.Text>
            <strong>Fonctionnalités principales :</strong>
            <ul>
              <li>
                Historique des transactions : Consultez l’historique des transactions
                de chaque agence. Que ce soit pour analyser les tendances mensuelles
                ou annuelles, vous pouvez accéder facilement aux données en sélectionnant
                l’agence et la période souhaitée.
              </li>
              <li>
                Entrées et sorties d’argent : Suivez les flux financiers des agences
                pour gérer efficacement la trésorerie et optimiser l’allocation des ressources.
              </li>
              <li>
                Gestion des agences : Ajoutez de nouvelles agences et assignez des
                responsables pour superviser leurs activités. Vous pouvez ainsi étendre
                notre réseau ou optimiser les agences existantes selon les objectifs
                stratégiques.
              </li>
            </ul>
          </Card.Text>
          <Card.Text>
            La sécurité et la confidentialité des opérations bancaires sont essentielles.
            Notre portail est équipé de mesures robustes pour protéger les données
            sensibles et garantir l’intégrité du système bancaire.
            <br /><br />
            Pour toute assistance ou question concernant les fonctionnalités du portail,
            notre équipe support est disponible pour vous aider rapidement.
          </Card.Text>
          <Card.Text>
            Encore une fois, bienvenue sur le portail administratif d'EMI Banque.
            Votre expertise et votre engagement sont des atouts précieux pour notre
            organisation, et nous sommes impatients de réussir ensemble.
            <br /><br />
            Cordialement,
            <br />
            EMI Banque
          </Card.Text>
        </Card.Body>
      </div>
  );
};

export default WelcomeMessage;
