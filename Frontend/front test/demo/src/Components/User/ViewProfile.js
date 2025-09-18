import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSession } from "../../Security/SessionContext";
import Authentication from "../../Security/SessionContext";

function ViewProfile(props) {
  const { isLoggedIn, setIsLoggedIn } = useSession();
  const history = useHistory();
  const location = useLocation();

  const [profile, setProfile] = useState(props.user);

  useEffect(() => {
    if (!Authentication.checkAutherization("USER", isLoggedIn, setIsLoggedIn))
      history.push("/user_login");
  }, []);

  // 🎨 Styles internes
  const containerStyle = {
    background: "linear-gradient(135deg, #0d6efd, #198754)", // bleu -> vert
    minHeight: "100vh",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    padding: "20px",
    width: "600px",
  };

  const titleStyle = {
    color: "#0d6efd", // bleu
    textAlign: "center",
    marginBottom: "20px",
    fontWeight: "bold",
  };

  const itemStyle = {
    backgroundColor: "#f8f9fa",
    border: "none",
    borderBottom: "1px solid #ddd",
    padding: "12px",
  };

  const strongStyle = {
    color: "#198754", // vert
  };

  return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h3 style={titleStyle}>Détails du profil</h3>

          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item style={itemStyle}>
                <strong style={strongStyle}>ID Compte:</strong> {profile.id}
              </ListGroup.Item>
              <ListGroup.Item style={itemStyle}>
                <strong style={strongStyle}>Prénom:</strong> {profile.firstName} {" | "}
                <strong style={strongStyle}>Nom:</strong> {profile.lastName} {" | "}
                <strong style={strongStyle}>Genre:</strong> {profile.gender}
              </ListGroup.Item>
              <ListGroup.Item style={itemStyle}>
                <strong style={strongStyle}>Email:</strong> {profile.email} {" | "}
                <strong style={strongStyle}>Date de naissance:</strong> {profile.dob}
              </ListGroup.Item>
              <ListGroup.Item style={itemStyle}>
                <strong style={strongStyle}>Téléphone:</strong> {profile.mobileNumber}
              </ListGroup.Item>
              <ListGroup.Item style={itemStyle}>
                <strong style={strongStyle}>ID Agence:</strong> {profile.branchId}
                {" | "}
                <strong style={strongStyle}>Nom Agence:</strong> {profile.branchName}
              </ListGroup.Item>
              <ListGroup.Item style={itemStyle}>
                <strong style={strongStyle}>Rue:</strong> {profile.street}
                {" | "}
                <strong style={strongStyle}>Ville:</strong> {profile.city}
              </ListGroup.Item>
              <ListGroup.Item style={itemStyle}>
                <strong style={strongStyle}>État:</strong> {profile.state}
                {" | "}
                <strong style={strongStyle}>Pays:</strong> {profile.country}
              </ListGroup.Item>
              <ListGroup.Item style={itemStyle}>
                <strong style={strongStyle}>Code Postal:</strong> {profile.zipCode}
              </ListGroup.Item>
              <ListGroup.Item style={itemStyle}>
                <strong style={strongStyle}>Numéro de Carte:</strong> {profile.cardNumber}
              </ListGroup.Item>
              <ListGroup.Item style={itemStyle}>
                <strong style={strongStyle}>Localisation:</strong> {profile.location}
              </ListGroup.Item>
              <ListGroup.Item style={itemStyle}>
                <strong style={strongStyle}>Créé le:</strong> {profile.createdOn}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </div>
      </div>
  );
}

export default ViewProfile;
