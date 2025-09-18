import React from 'react'
import Marquee from "react-fast-marquee";

const MonMarquee = () => {
  return (
      <div>
        <Marquee style={{backgroundColor: "azure", color:'black'}}>
          Chers clients EMI Banque, Veuillez enregistrer votre adresse e-mail dans votre compte pour profiter de services bancaires en ligne
        </Marquee>
      </div>
  )
}

export default MonMarquee;
