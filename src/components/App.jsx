import Header from "./Header/Header";
import Main from "./Main";
import Footer from "./Footer/Footer";
import { api } from "../utils/api";
import { useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <div>Erro ao carregar os dados.</div>;
  }

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <section className="container">
        <Header />
        <Main />
        <Footer />
      </section>
    </CurrentUserContext.Provider>
  );
}
export default App;
