import React, { useEffect, useState } from "react";
import styled from "styled-components";

const pathsOfPhotos = [
  "1672021060854.jpg",
  "1672021061734.jpg",
  "1672021063920.jpg",
  "1672021060985.jpeg",
  "1672021061755.jpg",
  "1672021062667.jpg",
  "1672021063940.jpg",
  "1672021061005.jpeg",
  "1672021061776.jpg",
  "1672021062948.jpg",
  "1672021063961.jpg",
  "1672021061021.jpeg",
  "1672021061803.jpg",
  "1672021063028.jpg",
  "1672021063984.jpg",
  "1672021061039.jpeg",
  "1672021061820.jpg",
  "1672021063177.jpg",
  "1672021064007.jpg",
  "1672021061835.jpg",
  "1672021063226.jpg",
  "1672021064052.jpg",
  "1672021061498.jpg",
  "1672021062105.jpg",
  "1672021063670.jpg",
  "1672021061521.jpg",
  "1672021062127.jpg",
  "1672021063717.jpg",
  "1672021061559.jpg",
  "1672021062146.jpg",
  "1672021063745.jpg",
  "1672021061581.jpg",
  "1672021062163.jpg",
  "1672021063770.jpg",
  "1672021061605.jpg",
  "1672021062178.jpg",
  "1672021063799.jpg",
  "1672021061626.jpg",
  "1672021062233.jpg",
  "1672021063826.jpg",
  "1672021061668.jpg",
  "1672021062496.jpg",
  "1672021063849.jpg",
  "1672021061691.jpg",
  "1672021062522.jpg",
  "1672021063872.jpg",
  "1672021061713.jpg",
  "1672021062543.jpg",
  "1672021063896.jpg",
  "IMG_20230121_182230_221.jpg",
  "IMG-20230109-WA0013.jpg",
  "IMG-20230113-WA0015.jpg",
  "IMG-20230113-WA0027.jpg",
  "IMG_20230121_182336_999.jpg",
  "IMG-20230109-WA0014.jpg",
  "IMG-20230113-WA0016.jpg",
  "IMG-20230121-WA0023.jpg",
  "IMG_20230121_182402_931-COLLAGE.jpg",
  "IMG-20230112-WA0010.jpg",
  "IMG-20230113-WA0020.jpg",
  "IMG-20230121-WA0027.jpg",
  "IMG_20230121_182414_667.jpg",
  "IMG-20230112-WA0011.jpg",
  "IMG-20230113-WA0021.jpg",
  "IMG-20230121-WA0028.jpg",
  "IMG_20230121_182537_049.jpg",
  "IMG-20230112-WA0012.jpg",
  "IMG-20230113-WA0022.jpg",
  "IMG-20230121-WA0029.jpg",
  "IMG_20230121_182602_534.jpg",
  "IMG-20230112-WA0013.jpg",
  "IMG-20230113-WA0023.jpg",
  "IMG-20230121-WA0030.jpg",
  "IMG_20230121_182633_781.jpg",
  "IMG-20230113-WA0012.jpg",
  "IMG-20230113-WA0024.jpg",
  "IMG-20230121-WA0031.jpg",
  "IMG-20230109-WA0011.jpg",
  "IMG-20230113-WA0013.jpg",
  "IMG-20230113-WA0025.jpg",
  "IMG-20230121-WA0032.jpg",
  "IMG-20230109-WA0012.jpg",
  "IMG-20230113-WA0014.jpg",
  "IMG-20230113-WA0026.jpg",
  "IMG-20230121-WA0033.jpg",
];

const numInit = 0;

export const ImageCarrousel = () => {
  const [numberForName, setNumberForName] = useState(numInit);
  const [name, setName] = useState(pathsOfPhotos[numberForName]);

  const TIME_PER_IMAGE_IN_MS = 10000;

  useEffect(() => {
    const interval = setInterval(() => {
      setNumberForName((numberForName) => numberForName + 1);
    }, TIME_PER_IMAGE_IN_MS);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (numberForName >= pathsOfPhotos.length) setNumberForName(numInit);
    setName(pathsOfPhotos[numberForName]);
  }, [numberForName]);

  const DivIamge = styled.div`
    min-height: 100vh;
    min-width: 100%;
    background-image: url(/images/${name});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50%;
    background-attachment: fixed;
    opacity: 0.4;
    animation: changeImg ${TIME_PER_IMAGE_IN_MS}ms linear infinite alternate
      both;
    display: inline-block;
    overflow: hidden;

    @keyframes changeImg {
      0% {
        transform: translateX(-100%);
        filter: brightness(0%) blur(12px);
      }

      50% {
        transform: translateX(0);
        filter: brightness(100%) blur(8px);
      }

      100% {
        transform: translateX(110%);
        filter: brightness(30%) blur(1px);
      }
    }

    @media screen and (min-width: 48em) {
      background-size: 70%;
      background-position: center;
    }

    @media screen and (min-width: 60em) {
      background-size: 50%;
      background-position: center;
    }
  `;

  return (
    <>
      <DivIamge />
    </>
  );
};
