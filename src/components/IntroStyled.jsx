import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useModal from "../hooks/useModal";
import { ModalStyled } from "./ModalStyled";

export const IntroStyled = ({ children }) => {
  const [isOpenModal, openModal, closeModal] = useModal(true);

  const DivContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 3rem;

    @media screen and (max-height: 25em) {
      min-height: 150vh;
    }
  `;

  const IntroContent = styled.div`
    font-size: 80%;
    text-align: start;
    width: 80vw;
  `;

  const DivIntroContainer = styled.div`
    border: thin solid #fff;
    padding: 0.5rem;
    min-height: 40vh;
    max-height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
  `;

  const H2 = styled.h1`
    font-family: "Courier New", Courier, monospace;
    font-weight: 300;
  `;

  const MiddleContent = styled.div`
    position: absolute;
    top: 30%;
    align-self: center;
    justify-self: center;
    text-align: center;
    background-color: #111;
    padding: 2rem;
    border: thin solid white;
    outline: thin solid white;
    outline-offset: -0.5rem;
    transition: opacity 300ms ease;
    font-family: "Courier New", Courier, monospace;
    font-weight: 200;

    &:hover {
      opacity: 0.8;
    }

    h2 {
      font-family: "Times New Roman", Times, serif;
      font-weight: 250;
    }

    h3 {
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    }

    @media screen and (max-height: 33em) {
      top: 0;
    }

    @media screen and (max-height: 25em) {
      top: 5%;
    }
  `;

  const TopContent = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 25vh;
    padding: 2rem;
    justify-self: center;
    align-self: center;
    text-align: center;
    background-color: #111;
    border: thin solid white;
    outline: thin solid white;
    outline-offset: -0.5rem;
    transition: opacity 300ms ease;
    overflow-y: scroll;

    @media screen and (max-height: 25em) {
      margin-top: 5rem;
      min-height: 50vh;
    }

    @media screen and (min-width: 48em) {
      max-width: 60vw;
    }
  `;

  return (
    <DivContainer>
      {children}
      <MiddleContent onClick={openModal}>
        <h1>Karol's Album</h1>
        <h2>With Carlos</h2>
        <h3>&lt;3</h3>
      </MiddleContent>
      <ModalStyled
        isOpen={isOpenModal}
        closeModal={closeModal}
        notPortal={true}
        isTransparent
      >
        <IntroContent>
          <DivIntroContainer>
            <H2>Que tal?</H2>
            <p>
              Despues de haber estado aproximadamente 8 horas detras de esto
              hago la primera entrega sobre este lindo album -aunque no es el
              mejor lo seguire mejorando con el pasar del tiempo- para una
              persona un tanto especial para mi, ademas de una pequeña frase por
              foto que puedes hacer click en ella!
            </p>
            <p>
              Espero y sea de agrado esto y pues nada!. Casi lo olvido!, estare
              monitoreando que hacen en este pequeño sitio, gracias y adios ;)
            </p>
            <h3>&lt;3</h3>
          </DivIntroContainer>
        </IntroContent>
      </ModalStyled>
      <TopContent>
        <iframe
          style={{ borderRadius: "12px", minWidth: "100%", height: "100%" }}
          src="https://open.spotify.com/embed/playlist/7I7i5Yg9k8IuWJ1Ebw3aAa?utm_source=generator"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </TopContent>
    </DivContainer>
  );
};
