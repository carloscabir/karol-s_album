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
    date: "29 de Noviembre 2022",
    sentence: "La mas linda o no?",
  },
  {
    date: "29 de Noviembre 2022",
    sentence: "",
  },
  {
    date: "13 de Diciembre 2022",
    sentence:
      "Sinceramente me encanto esta foto, no crees que hacemos una linda pareja?",
  },
  {
    date: "29 de Noviembre 2022",
    sentence: "Soltera y sin compromiso.",
  },
  {
    date: "13 de Noviembre 2022",
    sentence:
      "After a long call with you yesterday, we're together, and falling in love each other. 1°",
  },
  {
    date: "?? Agosto 2022",
    sentence: "Regreso a clases, mismo interes, obviamente a tí.",
  },
  {
    date: "13 de Diciembre 2022",
    sentence:
      "Tan lindos nosotros, será que me arrepentire en un futuro de esto?",
  },
  {
    date: "29 de Noviembre 2022",
    sentence: "Dos muchachos sonrientes, sin saber que el futuro los uniría.",
  },
  {
    date: "??? 2022",
    sentence:
      "Sin duda esta es una de mis favoritas, salgo horrible pero ese no es el caso.",
  },
  {
    date: "?? Agosto 2022",
    sentence:
      "No se si aun sabias que te seguia amando como la primera vez. na' creo 🦜",
  },
  {
    date: "13 de Diciembre 2022",
    sentence: "Porque paso un año tan rapido tras la ultima vez?, Lindo 16.",
  },
  {
    date: "29 de Noviembre 2022",
    sentence: "Ya te dije que amo esa sonrisa tuya?",
  },
  {
    date: "5 de Noviembre 2022",
    sentence:
      "Sin duda el ojo más lindo que he visto en mi vida, tan lindo como aquella vez en la que te vi en una pesadilla, sin duda fue pesadilla mas linda de mi vida. Cierto aun no me ducho, pero lo hare pronto.",
  },
  {
    date: "?? Agosto?",
    sentence: "Soy yo? o eres igual linda en cualquier parte?",
  },
  {
    date: "13 Diciembre 2022",
    sentence: "Dime que siempre vamos a estar juntos.",
  },
  {
    date: "29 de Noviembre 2022",
    sentence: "Fingamos que ya es amor si me tomas de la mano.",
  },
  {
    date: "28 de Octubre 2022",
    sentence: "Tú y tu cara con bigote. Amé.",
  },
  {
    date: "?? Agosto 2022",
    sentence: "You looked so nice that day.",
  },
  {
    date: "29 de Noviembre 2022",
    sentence: "Toma mi mano y vamonos de aquí.",
  },
  {
    date: "24 de Octubre 2022",
    sentence: "Cuantas veces tengo que decirte que amo esa sonrisa??",
  },
  {
    date: "???",
    sentence:
      "Tu y yo, yo con corte de cabello nuevo y tu igual de linda como siempre.",
  },
  {
    date: "1 de Diciembre 2022",
    sentence: "Es una lastima que perdi esa tan linda pulsera.",
  },
  {
    date: "27 de Noviembre 2022",
    sentence: "Nuestras dos manitas.",
  },
  {
    date: "??? Agosto 2022",
    sentence: "Tu sabes la fecha de estas fotos?, Yo lo perdí",
  },
  {
    date: "1 Diciembre 2022",
    sentence:
      "Sali con la cara tan mal, y tu como siempre de preciosa!. Porque??",
  },
  {
    date: "22 de Noviembre 2022",
    sentence: "Like 🦢",
  },
  {
    date: "??? Agosto?",
    sentence: "Sin duda somos una linda pareja. (?)",
  },
  {
    date: "27 de Noviembre 2022",
    sentence: "My darkest hours",
  },
  {
    date: "21 Noviembre",
    sentence: "Tu haciendome un regalo, por cierto, lo amé.",
  },
  {
    date: "??? Agosto",
    sentence: "🤨😈",
  },
  {
    date: "1 de Diciembre 2022",
    sentence: "Dios como amo a esta chica.",
  },
  {
    date: "21 de Noviembre 2022",
    sentence:
      "Creo que fue la primera vez que te vi con labial. Ya te dije que eres linda??🦜 ",
  },
  {
    date: "??? Agosto 2022",
    sentence:
      "Apesar de que no te agrade mucho como se ve tu cabello, nunca olvides que para mí es de lo mas lindo que existe en la via lactea.",
  },
  {
    date: "1 de Diciembre 2022",
    sentence: "Hand over hand - Roland Faunte",
  },
  {
    date: "21 de Noviembre 2022",
    sentence: "Mas besoosss",
  },
  {
    date: "??? Agosto 2022",
    sentence: "Like.",
  },
  {
    date: "1 de Diciembre 2022",
    sentence: "Como me gusta cuando haces esa cara de perrito 🥺",
  },
  {
    date: "19 de Noviembre 2022",
    sentence: `
    Harvey,
    Nobody knows what I see,
    Nobody knows I'm waiting,
    Waiting for you to call`,
  },
  {
    date: "??? Agosto 2022 ",
    sentence: "🤨🤨🤨🤨",
  },
  {
    date: "29 de Noviembre 2022",
    sentence:
      "POR QUE ME TOMAS FOTOS DISTRAIDOOOO????, por cierto, luces hermosa.",
  },
  {
    date: "16 de Noviembre 2022",
    sentence: "Un mes antes de aquel día, te amo.",
  },
  {
    date: "??? Agosto 2022",
    sentence: "NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO 😿",
  },
  {
    date: "29 de Noviembre 2022 ",
    sentence: "Soltera y sin compromiso, segun tú.",
  },
  {
    date: "16 de Noviembre 2022",
    sentence: "Ame esta.",
  },
  {
    date: "???  Agosto",
    sentence: "YO",
  },
  {
    date: "16 de Noviembre 2022",
    sentence: "Me siento muy afortunado de tenerte aquí sabes?",
  },
  {
    date: "16 de Noviembre 2022",
    sentence: "Nunca me he probado una falda xd",
  },
  {
    date: "??? Agosto 2022",
    sentence: "deja de tomarme fotos distraido por favor 😭",
  },
  {
    date: "21 de Enero 2023",
    sentence:
      "Before I've wrote this, I watched the photos and I think that I really miss you love.",
  },
  {
    date: "9 de Enero 2023",
    sentence: "Tan lindos los dos.",
  },
  {
    date: "13 de Enero 2023",
    sentence:
      "Amé ver Your Name contigo ese dia. Espero y se repita algo similar.",
  },
  {
    date: "13 de Enero 2024",
    sentence: "Yo como niño pequeño, nooooo",
  },
  {
    date: "21 de Enero 2023",
    sentence: "Ya para porfavor 😭😭",
  },
  {
    date: "9 de Enero 2023",
    sentence: "Quieres ponerte una mascarilla conmigo algun dia?",
  },
  {
    date: "13 de Enero 2023",
    sentence: "Sparkle.",
  },
  {
    date: "21 de Enero 2023",
    sentence: "Ese dia me salieron granos, que inusual.",
  },
  {
    date: "Collage",
    sentence: "Un lindo collage de google para nosotros <3",
  },
  {
    date: "12 de Enero 2023",
    sentence: "i miss u",
  },
  {
    date: "13 de Enero 2023",
    sentence: "Me encanto esta, salio esteril.",
  },
  {
    date: "21 de Enero 2023",
    sentence: "Tu y karim, si no me equivoco jaja.",
  },
  {
    date: "21 de Enero 2023",
    sentence:
      "Tu y tu linda sonrisa, en realidad sera tuya?, lo digo porque es tan linda que puede ser indepentiente",
  },
  {
    date: "12 de Enero 2023",
    sentence: "Ame esta escena, pero te amo más a tí.",
  },
  {
    date: "13 de Enero 2023",
    sentence: "But I've been the hardest to love.",
  },
  {
    date: "21 de Enero 2023",
    sentence: "Yo.",
  },
  {
    date: "21 de Enero 2023",
    sentence: "Would you like to get married with me?",
  },
  {
    date: "12 de Enero 2023",
    sentence: "Why are you so pretty?",
  },
  {
    date: "13 de Enero 2023",
    sentence: "Amo sacas fotos tipo.",
  },
  {
    date: "21 de Enero 2023",
    sentence: "yo",
  },
  {
    date: "21 de Enero 2023",
    sentence:
      "Ese dia estaba algo cansado pero al estar contigo hiciste olvidarme de esos problemas.",
  },
  {
    date: "12 de Enero 2023",
    sentence: "Yo cuando tenia cabello.",
  },
  {
    date: "13 de Enero 2023",
    sentence: "Why I'm falling in love again?",
  },
  {
    date: "21 de Enero 2023",
    sentence:
      "Recuerdo que esta fue la primera foto que me tomaste en aquel dia. 🦜",
  },
  {
    date: "21 de Enero 2023",
    sentence: "Tu me dijiste que sonriera xd",
  },
  {
    date: "13 de Enero 2023",
    sentence: "YA NO ME TOMES FOTOS DISTRAIDOOO -cara de pelotudo-",
  },
  {
    date: "13 de Enero 2023",
    sentence: "Amo hacer eso sabes?",
  },
  {
    date: "21 de Enero 2023",
    sentence:
      "Sabes que el album de After Hours de The weeknd trata sobre un error que cometio a su pareja?. Por cierto, me gustas.",
  },
  {
    date: "9 de Enero 2023",
    sentence: "Mal trio, pero creo que salimos bien.",
  },
  {
    date: "13 de Enero 2023",
    sentence:
      "Aveces frio y aveces como un niño que no se quiere despegar de ti. (?)",
  },
  {
    date: "21 de Enero 2023",
    sentence: "In your eyes.",
  },
  {
    date: "9 de Enero 2023",
    sentence: "I like you",
  },
  {
    date: "13 de Enero 2023",
    sentence:
      "Quieres ser mi novia de nuevo?. Por si cortamos te recordare que somos dos veces novios; algo tonto pero eficiente 😽",
  },
  {
    date: "13 de Enero 2023",
    sentence: "Puse las imagenes muy separadas, lo sé, peroooo ola",
  },
  {
    date: "21 de Enero 2023",
    sentence: "Y llegamos casi al final. 😁🤨",
  },
  {
    date: "13 de Diciembre 2022",
    sentence:
      "Se que aveces existen conflictos y todo llega a terminar en algun momento, pero sin duda tu seras alguien quien recordare mucho en el resto de mi vida. No quiero que esto sea solo una 'aventura', sino algo inolvidable. tqm k",
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
