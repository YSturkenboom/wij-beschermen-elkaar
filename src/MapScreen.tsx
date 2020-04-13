import React, { useState } from 'react';
import './MapScreen.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Print, LocalShipping, LocalHospital, LocalLaundryService, EmojiPeople } from '@material-ui/icons';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon
} from "react-share";

function MapScreen() {
  const shareUrl = 'https://wij-beschermen-elkaar.netlify.com'
  const msgTitle = 'Hey, help ook mee met bescherming bezorgen of maken aan zorgmedewerkers, tegen corona. Iedereen kan meedoen, jij en ik ook!'
  return (
    <div className="map-screen mx-auto">
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet"></link>
      <div className="container pt-4 pb-6">
        <h1 className="text-center mt-6">Hoofddorp beschermt elkaar</h1>
        <p className="mt-3 maxw mx-auto headingbox p-4 ">
          🆘 <b>Een oproep aan de inwoners van Hoofddorp en omstreken:</b><br></br><br></br>
          COVID-19 treft ons allemaal, en alleen samen kunnen we het ook overwinnen. Maar dat betekent niet dat we stil hoeven te zitten. Iedereen, jij ook, kan helpen, op een manier die echt praktisch is!
          Laten we niet allemaal op eigen houtje werken, maar onze krachten bundelen om zo praktische oplossingen te bieden voor het gebrek aan beschermend materieel voor zorgmedewerkers.<br></br>
          Met jouw hulp en expertise op jouw gebied kunnen we een enorm verschil maken.<br></br><br></br>
          De kracht van dit initiatief zit hem in de samenwerking, dus deel dit vooral met zoveel mogelijk mensen op social media. Dit is geen kettingbrief, maar een oproep tot actie!<br></br>
          <div className='d-flex justify-content-center align-items-center'>
            <b>Deel met vrienden en kennissen:</b>
            <FacebookShareButton
              url={shareUrl}
              quote={msgTitle}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={shareUrl}
              title={msgTitle}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton
              url={shareUrl}
              title={msgTitle}
              separator=":: "
              className="Demo__some-network__share-button"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <TelegramShareButton
              url={shareUrl}
              title={msgTitle}
              className="Demo__some-network__share-button"
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
          </div> 
          
          <a href="#contact">We zijn nog hard op zoek naar sponsors!</a>
        </p>
        <div className='d-flex justify-content-center btns'>
          <LocalHospital />
          <a className='help-btn help-btn-2 shadow' href="https://yasturkenboom.typeform.com/to/dTDDg6" target="_blank">Ik ben een zorgmedewerker en heb spullen nodig!</a>
        </div>
        <p className="headingbox p-4 maxw mx-auto mt-3" >
          🛡️ <b>Wees het schild voor onze zorgmedewerkers</b><br></br><br></br>
          Met 3D-printers is het mogelijk om gezichtsbescherming te printen, die eenvoudig en goedkoop in elkaar kan worden gezet. Heb jij een 3D-printer of een bedrijf dat 3D-printers heeft?
          Dan kun jij de middelen produceren die nu mensen kunnen helpen! Of jouw leegstaande ruimte, die kan het centrum worden om prints op te halen, in elkaar te zetten en steriliseren<br></br><br></br>
          <div className="d-flex flex-column justify-content-center image-flex">
            <div className="d-flex flex-column align-items-center exImage">
              <img className="mb-2" src="https://cdn.prusa3d.com/wp-content/uploads/2020/03/shield-1.jpg" />
              credit: Prusa Research, bron https://www.prusa3d.com/covid19/
            </div>
            <div className="d-flex flex-column align-items-center exImage">
              <img className="mb-2" src={require("./meplusmasklol.jpeg")} />
              een van onze eigen prototypes (gebruikte 3d model is niet van ons)
            </div>
          </div>
          
          <b>We produceren momenteel spullen die NIET bedoeld zijn voor gebruik in een IC, of op plekken waar het risico op besmetting erg hoog is. Gebruik is op eigen risico!</b>
        </p>
        <div className="d-flex flex-column mx-auto w-100 btns">
          <div className='d-flex justify-content-center'>
            <Print />
            <a className='help-btn shadow' href="https://yasturkenboom.typeform.com/to/B7FLTr" target="_blank">Wij hebben / ik heb 3D-printer(s) en wil onderdelen printen</a>
          </div>
          <div className='d-flex justify-content-center'>
            <LocalShipping />
            <a className='help-btn shadow' href="https://yasturkenboom.typeform.com/to/B7FLTr" target="_blank">Wij willen / ik wil geprinte spullen brengen naar zorginstellingen</a>
          </div>
          <div className='d-flex justify-content-center'>
            <LocalLaundryService />
            <a className='help-btn shadow' href="https://yasturkenboom.typeform.com/to/B7FLTr" target="_blank">Wij hebben / ik heb een ruimte om geprinte spullen te verzamelen, steriliseren, en te verstrekken</a>
          </div>
          <div className='d-flex justify-content-center'>
            <LocalHospital />
            <a className='help-btn shadow' href="https://yasturkenboom.typeform.com/to/B7FLTr" target="_blank">Wij zijn / ik ben een zorgprofessional en ik wil helpen met veiligheid en medische kennis</a>
          </div>
          <div className='d-flex justify-content-center'>
            <EmojiPeople />
            <a className='help-btn shadow' href="https://yasturkenboom.typeform.com/to/B7FLTr" target="_blank">Wij zijn een groep/gemeenschap/community die willen meedoen! Of we hebben ons eigen initiatief en we willen in contact komen.</a>
          </div>
        </div>

        <div id="contact" className="maxw mx-auto headingbox p-4">
          <h2>Contact</h2>
          Heb je een opmerking of idee, of mis je opties op deze site? Ook voor zakelijke voorstellen.
          <div>
            <a href="mailto:y.a.sturkenboom@gmail.com">Email ons</a> of <a href="tel:31636402010">Bel ons</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapScreen;

