import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Authentication, { useSession } from "../../Security/SessionContext";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const WelcomeMessage = (props) => {
  const history = useHistory();
  const { isLoggedIn, setIsLoggedIn } = useSession();

  useEffect(() => {
    console.log("Bienvenue manager : " + props.user.firstName);
    if (!Authentication.checkAutherization("MANAGER", isLoggedIn, setIsLoggedIn)) {
      history.push("/employee_login");
    }
  }, []);

  return (
      <div className="bg_updateprofile">
        <Card.Body style={{ color: "white", padding: 5 }}>
          <Card.Title>Cher {props.user.firstName},</Card.Title>
          <Card.Text>
            Bienvenue sur le portail de gestion des agences d’<strong>EMI Banque</strong> !
            <br /><br />
            Nous sommes heureux de vous compter parmi nous en tant que responsable
            d’agence. Vous avez la mission essentielle de superviser les opérations
            et d’assurer la satisfaction de nos clients. Votre rôle est primordial
            pour maintenir les standards de qualité et d’efficacité de nos services bancaires.
          </Card.Text>
          <Card.Text>
            Ce portail est conçu pour vous offrir des outils simples et efficaces afin
            de gérer votre agence et accompagner vos clients de la meilleure manière possible.
          </Card.Text>
          <Card.Text>
            <strong>Fonctionnalités principales :</strong>
            <ul>
              <li>
                <strong>Gestion des comptes :</strong> consulter la liste des comptes
                actifs ou inactifs, identifier les comptes dormants et suspendre ceux
                qui n’ont pas eu d’activité depuis un an.
              </li>
              <li>
                <strong>Comptes clôturés :</strong> analyser les comptes fermés pour
                comprendre les raisons des clôtures et améliorer la fidélisation des clients.
              </li>
              <li>
                <strong>Historique des transactions :</strong> accéder facilement aux
                transactions de votre agence, que ce soit au jour le jour, par mois ou par an.
              </li>
              <li>
                <strong>Suivi des flux financiers :</strong> contrôler les entrées et
                sorties d’argent de votre agence afin de mieux gérer la trésorerie et
                optimiser les ressources.
              </li>
            </ul>
          </Card.Text>
          <Card.Text>
            La sécurité et la confidentialité sont au cœur de notre système.
            Soyez assuré que ce portail intègre des mesures robustes pour protéger
            les données sensibles et garantir l’intégrité des opérations.
            <br /><br />
            En cas de besoin, notre équipe support reste disponible pour vous accompagner.
          </Card.Text>
          <Card.Text>
            Encore une fois, bienvenue sur le portail de gestion des agences d’<strong>EMI Banque</strong>.
            Votre expertise et votre engagement sont essentiels à notre réussite commune.
            <br /><br />
            Cordialement,<br />
            EMI Banque
          </Card.Text>
        </Card.Body>
      </div>
  );
};

export default WelcomeMessage;
