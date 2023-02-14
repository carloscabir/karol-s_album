import React from "react";
import { Card } from "./Card";

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
  "love.jpeg",
];
const quotes = [
  {
    date: "24 Diciembre 2022",
    sentence:
      "Tan linda como siempre, y mira, tienes un gorro tan lindo como tú.",
  },
  {
    date: "29 de Noviembre",
    sentence: "La mas linda o no?",
  },
  {
    date: "29 de Noviembre",
    sentence: "",
  },
  {
    date: "13 de Diciembre",
    sentence:
      "Sinceramente me encanto esta foto, no crees que hacemos una linda pareja?",
  },
  {
    date: "29 de Noviembre",
    sentence: "Soltera y sin compromiso.",
  },
  {
    date: "13 de Noviembre",
    sentence:
      "After a long call with you yesterday, we're together, and falling in love each other. 1°",
  },
  {
    date: "?? Agosto",
    sentence: "Regreso a clases, mismo interes, obviamente a tí.",
  },
  {
    date: "13 de Diciembre",
    sentence:
      "Tan lindos nosotros, será que me arrepentire en un futuro de esto?",
  },
  {
    date: "29 de Noviembre",
    sentence: "Dos muchachos sonrientes, sin saber que el futuro los uniría.",
  },
  {
    date: "???",
    sentence:
      "Sin duda esta es una de mis favoritas, salgo horrible pero ese no es el caso.",
  },
  {
    date: "?? Agosto",
    sentence:
      "No se si aun sabias que te seguia amando como la primera vez. na' creo 🦜",
  },
  {
    date: "13 de Diciembre",
    sentence: "Porque paso un año tan rapido tras la ultima vez?, Lindo 16.",
  },
  {
    date: "29 de Noviembre",
    sentence: "Ya te dije que amo esa sonrisa tuya?",
  },
  {
    date: "5 de Noviembre",
    sentence:
      "Sin duda el ojo más lindo que he visto en mi vida, tan lindo como aquella vez en la que te vi en una pesadilla, sin duda fue pesadilla mas linda de mi vida. Cierto aun no me ducho, pero lo hare pronto.",
  },
  {
    date: "?? Agosto?",
    sentence: "Soy yo? o eres igual linda en cualquier parte?",
  },
  {
    date: "",
    sentence: "",
  },
];

export const Album = () => {
  return (
    <div className="album">
      {pathsOfPhotos.map((el, i) => (
        <Card imageName={el} quote={quotes[i]} id={i} />
      ))}
    </div>
  );
};
