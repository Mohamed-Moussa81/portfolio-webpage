import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import Ecommerce from "../resources/projects/ecommerce.png";
import NikeBot from "../resources/projects/nike-bot.jpg";
import Railroad from "../resources/projects/rail-road.jpg";
import Spaceinvaders from "../resources/projects/space-invaders.jpg";
import Museum from "../resources/projects/museum.jpg";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
//React CSS popupbox
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  //Ecommerce Popup
  const openPopupboxEcommerce = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={Ecommerce} alt=""/>
          <p>Incididunt reprehenderit ea dolore duis culpa offon.</p>
          <b> Github:</b>{" "}
          <a className="hyper-link"
            onClick= {() => window.open("https://google.com","_blank")}> https://google.com
          </a>
        
      </>
    );
    PopupboxManager.open({ content })
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Ecommerce project.",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
}
  const popupBoxConfigEcommerce = {
    titleBar: {
      enable: true,
      text: "Ecommerce project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  //Nike Bot Popup
   const openPopupboxNikeBot= () => {
     const content = (
       <>
         <img className="portfolio-image-popupbox" src={NikeBot} alt="" />
         <p>Incididunt reprehenderit ea dolore duis culpa offon.</p>
         <b> Github:</b>{" "}
         <a
           className="hyper-link"
           onClick={() => window.open("https://google.com","_blank")}
         >
           {" "}
           https://google.com
         </a>
       </>
     );
     PopupboxManager.open({ content });
     PopupboxManager.update({
       content,
       config: {
         titleBar: {
           enable: true,
           text: "Nike project.",
         },
         fadeIn: true,
         fadeInSpeed: 500,
       },
     });
   };
   
  //Railroad
   const openPopupboxRailroad = () => {
     const content = (
       <>
         <img className="portfolio-image-popupbox" src={Railroad} alt="" />
         <p>Incididunt reprehenderit ea dolore duis culpa offon.</p>
         <b> Github:</b>{" "}
         <a
           className="hyper-link"
           onClick={() => window.open("https://google.com", "_blank")}
         >
           {" "}
           https://google.com
         </a>
       </>
     );
     PopupboxManager.open({ content });
     PopupboxManager.update({
       content,
       config: {
         titleBar: {
           enable: true,
           text: "Railroad project",
         },
         fadeIn: true,
         fadeInSpeed: 500,
       },
     });
   };

  //Museum
  const openPopupboxMuseum = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={Museum} alt="" />
        <p>Incididunt reprehenderit ea dolore duis culpa offon.</p>
        <b> Github:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com", "_blank")}
        >
          {" "}
          https://google.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Android Museum Project.",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  //Space Invaders
  const openPopupboxSpaceInvaders = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={Spaceinvaders} alt="" />
        <p>Incididunt reprehenderit ea dolore duis culpa offon.</p>
        <b> Github:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com", "_blank")}
        >
          {" "}
          https://google.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Space Invaders Project.",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };


  


  return (
    <div id="projects" className="portfolio-wrapper">
      <div className="container">
        <h1 className="test-uppercase text-center py-5">Projects</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick = {openPopupboxEcommerce}>
            {/* Import project images*/}
            <img className="portfolio-image" src={Ecommerce} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick = {openPopupboxNikeBot}>
            {/* Import project images*/}
            <img className="portfolio-image" src={NikeBot} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick = {openPopupboxRailroad}>
            {/* Import project images*/}
            <img className="portfolio-image" src={Railroad} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick = {openPopupboxMuseum}>
            {/* Import project images*/}
            <img className="portfolio-image" src={Museum} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick = {openPopupboxSpaceInvaders}>
            {/* Import project images*/}
            <img className="portfolio-image" src={Spaceinvaders} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupBoxConfigEcommerce}/>
    </div>
  );
};
export default Portfolio;
