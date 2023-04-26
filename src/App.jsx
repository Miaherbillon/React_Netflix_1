import "./App.css";
import netflix from "./assets/Netflixjson.json";
import Section from "./components/Section/Section";
import Header from "./components/Section/Header";

const App = () => {
  return (
    <div className="background_Black">
      <Header />
      {netflix.map((elem) => {
        // console.log(elem.images);
        return (
          <div>
            <div className="titre">{elem.category} : </div>
            <div className="photos">
              {elem.images.map((image) => {
                console.log(image);
                return (
                  <>
                    <div className="Photo">
                      <img src={image} alt="photos films" />;
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default App;
