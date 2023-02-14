import { Album } from "./components/Album.jsx";
import { ImageCarrousel } from "./components/ImageCarrousel.jsx";
import { IntroStyled } from "./components/IntroStyled";

function App() {
  return (
    <div className="app">
      <IntroStyled>
        <ImageCarrousel />
      </IntroStyled>
      <Album />
    </div>
  );
}

export default App;
