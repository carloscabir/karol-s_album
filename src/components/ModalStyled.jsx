// import "./Modal.css";
import ReactDOM from "react-dom";
import styled, { keyframes, css } from "styled-components";

const openModal = keyframes`
 0% {
    opacity: 0;
    transform:  scale(0) ;
  }
  
  70% {
    transform: scale(1) ;
  } 

  100% {
    opacity: 1;
  }
`;

const ArticleModal = styled.article`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #00000090;
  display: none;
  align-items: center;
  justify-content: center;

  ${({ isOpen, isAnimation }) =>
    isAnimation
      ? isOpen &&
        css`
          display: flex;
          animation: ${openModal} 500ms ease-in-out;
        `
      : isOpen &&
        css`
          display: flex;
        `}
`;

const DivModalContainer = styled.div`
  position: relative;
  min-width: 30%;
  max-width: 90%;
  min-height: 40vh;
  max-height: 50vh;
  /* border-radius: 0.5rem; */
  overflow: scroll;
  background-color: #111;
  text-align: center;
  padding: 0.5rem;
  border: thin solid #fff;
  box-shadow: 1rem 1rem 3rem 0 #000;

  @media screen and (min-width: 60em) {
    .modal-container {
      min-width: 30%;
      max-width: 50%;
      min-height: 40vh;
      max-height: 90vh;
    }
  }
`;

const ButtonModal = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  width: 6vw;
  max-width: 3rem;
  height: 6vw;
  max-height: 3rem;

  font-weight: 900;
  text-align: center;
  font-size: 1rem;
  color: #fff;
  background-color: transparent;
  border: none;

  padding: 0.5rem;
  transition: all 500ms ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
    transform: scale(0.9);
  }

  ${({ isReverse }) =>
    isReverse &&
    css`
      right: none;
      left: 4vw;
    `}
`;

export const ModalStyled = ({
  children,
  isOpen,
  closeModal,
  isReverse = false,
  notPortal = false,
  isAnimation = false,
  isTransparent = false,
}) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return notPortal ? (
    <ArticleModal
      isOpen={isOpen}
      isAnimation={isAnimation}
      onClick={closeModal}
    >
      <DivModalContainer onClick={handleModalContainerClick}>
        <ButtonModal isReverse={isReverse} onClick={closeModal}>
          <p>X</p>
        </ButtonModal>
        {children}
      </DivModalContainer>
    </ArticleModal>
  ) : (
    ReactDOM.createPortal(
      <ArticleModal
        isOpen={isOpen}
        isAnimation={isAnimation}
        onClick={closeModal}
      >
        <DivModalContainer onClick={handleModalContainerClick}>
          <ButtonModal isReverse={isReverse} onClick={closeModal}>
            <p>X</p>
          </ButtonModal>
          {children}
        </DivModalContainer>
      </ArticleModal>,
      document.getElementById("modal")
    )
  );
};
