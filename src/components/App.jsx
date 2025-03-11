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
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  function handleCardLike(card) {
    if (!card) {
      return;
    }

    const newIsLiked = !card.isLiked;

    api
      .changeLikeCardStatus(card._id, newIsLiked)
      .then((newCard) => {
        const updatedCard = {
          ...newCard,
          isLiked: newIsLiked,
        };

        setCards((state) =>
          state.map((c) => (c._id === card._id ? updatedCard : c))
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.error(err));
  }

  const handleAddPlaceSubmit = (data) => {
    api
      .addCard(data.name, data.link)
      .then((newCard) => {
        console.log(newCard);
        setCards([newCard, ...cards]);
        setPopup(null);
      })
      .catch((err) => console.error(err));
  };
  const handleUpdateUser = (data) => {
    api
      .updateProfile(data.name, data.about)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  // function handleOpenPopup(popupToOpen) {
  //   setPopup(popupToOpen);
  // }

  function handleClosePopup() {
    setPopup(null);
  }

  const handleUpdateAvatar = (data) => {
    api
      .updateAvatar(data.avatar)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };
  if (error) {
    return <div>Erro ao carregar os dados.</div>;
  }

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
        handleAddPlaceSubmit,
        handleClosePopup,
        popup,
        setPopup,
        handleCardLike, // Adicione estas funções ao contexto
        handleCardDelete,
      }}
    >
      <section className="container">
        <Header />
        <Main cards={cards} />
        <Footer />
      </section>
    </CurrentUserContext.Provider>
  );
}

export default App;
