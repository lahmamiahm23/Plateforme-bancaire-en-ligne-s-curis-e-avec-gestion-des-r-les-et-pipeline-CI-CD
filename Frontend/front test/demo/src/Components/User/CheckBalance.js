import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import BankServices from "../../BankService/BankServices";
import { HttpStatusCode } from "axios";
import { useSession } from "../../Security/SessionContext";
import Authentication from "../../Security/SessionContext";

function CheckBalance(props) {
  const { isLoggedIn, setIsLoggedIn } = useSession();
  const [accountId] = useState(props.user.id);
  const history = useHistory();

  useEffect(() => {
    if (!Authentication.checkAutherization("USER", isLoggedIn, setIsLoggedIn)) {
      history.push("/user_login");
    }

    BankServices.getBalance(accountId).then((obj) => displayMessage(obj));
  }, []);

  function displayMessage(obj) {
    const message = document.getElementById("messagecb");
    const money = document.getElementById("money");
    const success = obj.status === HttpStatusCode.Ok;

    if (success) {
      money.textContent = `Votre solde : ${obj.data} MAD`;
      money.style.color = "green";
      money.style.fontWeight = "bold";
      message.textContent = "Opération réussie ✅";
      message.style.color = "green";
    } else {
      message.textContent = obj.response?.data?.message || "Erreur lors de la récupération du solde ❌";
      message.style.color = "red";
    }
  }

  return (
      <div
          style={{
            backgroundColor: "#f5f7fa",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Arial, sans-serif",
          }}
      >
        <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
              width: "400px",
            }}
        >
          <h1 style={{ color: "#004080", marginBottom: "10px" }}>
            Détails du solde
          </h1>
          <hr style={{ margin: "20px 0" }} />
          <div id="messagecb" style={{ marginBottom: "15px", fontSize: "16px" }}></div>
          <h2 id="money" style={{ fontSize: "22px" }}></h2>
        </div>
      </div>
  );
}

export default CheckBalance;
