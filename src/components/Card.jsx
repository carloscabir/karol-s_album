import React from "react";
import useModal from "../hooks/useModal";
import { ModalStyled } from "./ModalStyled";

export const Card = ({ imageName, quote, id }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const classNameReverse = id % 2 === 0 ? "" : "-end";

  if (!quote) {
    quote = { date: "any", sentence: "any" };
  }
  const { date, sentence } = quote;

  return (
    <img src={`/images/${imageName}`} alt={imageName} /> && (
      <div className="card" key={id}>
        <figure className="figure-card" onClick={openModal}>
          <img src={`/images/${imageName}`} alt={imageName} />
        </figure>
        <ModalStyled
          isOpen={isOpenModal}
          closeModal={closeModal}
          isReverse={classNameReverse}
          isAnimation
        >
          <div className="container-content-modal">
            <figure className={`figure-modal${classNameReverse}`}>
              <img src={`/images/${imageName}`} alt={imageName} />
              <figcaption className={`figc-modal${classNameReverse}`}>
                <h3 className="courier-new-fn">{date}</h3>
                <h4>"{sentence}</h4>
              </figcaption>
            </figure>
          </div>
        </ModalStyled>
      </div>
    )
  );
};
