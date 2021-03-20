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
        <img className="portfolio-image-popupbox" src={Ecommerce} alt="" />
        <p>
          E-commerce application that simplfies the process of purchasing and
          selling used products for college students.{" "}
        </p>
        <b> Bitbucket:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://jira.cs.rutgers.edu:8445/projects/CM/repos/college-marketplace/browse",
              "_blank"
            )
          }
        >
          {" "}
          https://jira.cs.rutgers.edu:8445/projects/CM/repos/college-marketplace/browse
        </a>
      </>
    );
    PopupboxManager.open({ content })
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Ecommerce project",
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
         <p>
           Nike Selenium Bot that scrapes data and purchases limited edition
           items from Nike website
         </p>
         <b> Github:</b>{" "}
         <a
           className="hyper-link"
           onClick={() =>
             window.open(
               "https://github.com/Mohamed-Moussa81/Nike-Sneaker",
               "_blank"
             )
           }
         >
           {" "}
           https://github.com/Mohamed-Moussa81/Nike-Sneaker
         </a>
       </>
     );
     PopupboxManager.open({ content });
     PopupboxManager.update({
       content,
       config: {
         titleBar: {
           enable: true,
           text: "NikeBot",
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
         <p>
           Railway Booking system that allows customers to browse train
           schedules and reserve available train reservations
         </p>
         <b> Github:</b>{" "}
         <a
           className="hyper-link"
           onClick={() =>
             window.open(
               "https://github.com/tanaysomisetty/railway-booking-system",
               "_blank"
             )
           }
         >
           {" "}
           https://github.com/tanaysomisetty/railway-booking-system
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
        <p>
          Android application that provides users with the option to select
          Museums nearby and purchase tickets.
        </p>
        <b> Github:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/Mohamed-Moussa81/Android-Museum-Project",
              "_blank"
            )
          }
        >
          {" "}
          https://github.com/Mohamed-Moussa81/Android-Museum-Project
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
        <p>Space Invaders 2d game implemented using Pygame Framework</p>
        <b> Github:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/Mohamed-Moussa81/Space-Invaders",
              "_blank"
            )
          }
        >
          {" "}
          https://github.com/Mohamed-Moussa81/Space-Invaders
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

            <img className="portfolio-image" src={Ecommerce} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick = {openPopupboxNikeBot}>

            <img className="portfolio-image" src={NikeBot} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick = {openPopupboxRailroad}>
 
            <img className="portfolio-image" src={Railroad} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick = {openPopupboxMuseum}>
  
            <img className="portfolio-image" src={Museum} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick = {openPopupboxSpaceInvaders}>
   
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
