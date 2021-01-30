import React, { 
  // useState, 
  // useEffect 
} from 'react';
import {
  Route,
  // Switch,
  withRouter,
  // useHistory,
  // Redirect,
} from 'react-router-dom';
// import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
// import Login from './Login';
// import Register from './Register';
// import EditProfilePopup from './EditProfilePopup';
// import EditAvatarPopup from './EditAvatarPopup';
// import AddPlacePopup from './AddPlacePopup';
// import PopupWithImage from './PopupWithImage';
// import PopupWithForm from '../PopupWithForm/PopupWithForm';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import api from '../../utils/Api';
// import auth from '../../utils/auth';
// import ProtectedRoute from '../../utils/ProtectedRoute';
// import InfoToolTip from './InfoToolTip';
import './App.css';

function App() {
  // const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  // const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  // const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  // const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);

  // const [selectedCard, setSelectedCard] = useState(null);
  // const [currentUser, setCurrentUser] = useState(null);
  // const [cards, setCards] = useState([]);
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [userEmail, setUserEmail] = useState('');
  // const [tooltipMode, setTooltipMode] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [registered, setRegistered] = useState(false);
  // const [token, setToken] = useState(localStorage.getItem('token'));

  // const history = useHistory();

  // function handleEditProfileClick() {
  //   setIsEditProfilePopupOpen(true);
  // }
  // function handleAddPlaceClick() {
  //   setIsAddPlacePopupOpen(true);
  // }
  // function handleEditAvatarClick() {
  //   setIsEditAvatarPopupOpen(true);
  // }
  // function handleCardClick(card) {
  //   setSelectedCard(card);
  // }
  // function closeAllPopups() {
    // setIsAddPlacePopupOpen(false);
    // setIsEditProfilePopupOpen(false);
    // setIsEditAvatarPopupOpen(false);
    // setSelectedCard(null);
    // setIsInfoToolTipOpen(false);
  // }

  // function handleToolTip(success) {
  //   setTooltipMode(success);
  //   setIsInfoToolTipOpen(true);
  // }

  // function handleUpdateUser({ name, about }) {
  //   api
  //     .updateProfile({ name, about }, token)
  //     .then((res) => {
  //       setCurrentUser(res.data);
  //     })
  //     .catch((err) => console.log(err));
  //   closeAllPopups();
  // }

  // function handleUpdateAvatar({ avatar }) {
  //   api
  //     .updateAvatar(avatar.current.value, token)
  //     .then((res) => {
  //       setCurrentUser(res.data);
  //     })
  //     .catch((err) => console.log(err));
  //   closeAllPopups();
  // }

  // function handleCardLike(card) {
  //   // Check one more time if this card was already liked
  //   // const isLiked = card.likes.includes(currentUser._id);

  //   // Send a request to the API and getting the updated card data
  //   api
  //     // .changeLikeCardStatus(card._id, isLiked, token)
  //     .then((newCard) => {
  //       // Create a new array based on the existing one and putting a new card into it
  //       const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
  //       // Update the state
  //       setCards(newCards);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // function handleCardDelete(card) {
  //   api
  //     // .deleteCard(card._id, token)
  //     .then(() => {
  //       setCards(cards.filter((c) => c._id !== card._id));
  //     })
  //     .then((res) => closeAllPopups())
  //     .catch((err) => console.log(err));
  // }

  // function handleAddPlace({ title, link }) {
  //   api
  //     .addNewCard({ title, link }, token)
  //     .then((newCard) => {
  //       setCards([newCard.data, ...cards]);
  //     })
  //     .then((res) => closeAllPopups())
  //     .catch((err) => console.log(err));
  // }

  // function resetForm() {
  //   setEmail('');
  //   setPassword('');
  // }

  // function handleLogin() {
  //   setLoggedIn(true);
  // }

  // function handleLoginSubmit(e) {
  //   e.preventDefault();
  //   auth
  //     .authorize(email, password)
  //     .then((data) => {
  //       if (data && data.token) {
  //         setToken(data.token);
  //         localStorage.setItem('token', data.token);
  //         handleLogin();
  //         history.push('/main');
  //       } else {
  //         resetForm();
  //         if (!email || !password) {
  //           handleToolTip('error');
  //           throw new Error(
  //             '400 - one or more of the fields were not provided'
  //           );
  //         }
  //         if (!data) {
  //           handleToolTip('error');
  //           throw new Error(
  //             '401 - the user with the specified email not found'
  //           );
  //         }
  //       }
  //     })
  //     .catch((err) => console.log(err.message));
  // }

  // function handleRegisterSubmit(e) {
  //   e.preventDefault();
  //   auth
  //     .register(email, password)
  //     .then((res) => {
  //       //  if (!(res.data && res.data._id)) {
  //       if (!(res && res._id)) {
  //         handleToolTip('error');
  //         // throw new Error(`400 - ${res.message ? res.message : res.error}`);
  //         // throw new Error(
  //         //   `409(Conflict)  - ${res.message ? res.message : res.error}`
  //         // );
  //         if (res.status === 409) {
  //           return Promise.reject(new Error('(Conflict) - User already taken'));
  //         }
  //       } else {
  //         handleToolTip('success');
  //       }
  //     })
  //     .then((res) => {
  //       setRegistered(true);
  //       history.push('/signin');
  //       return res;
  //     })
  //     .then(resetForm)
  //     .catch((err) => console.log(err));
  // }

  // function handleLogout() {
  //   localStorage.removeItem('token');
  //   setLoggedIn(false);
  //   history.push('/signin');
  // }

  // useEffect(() => {
  //   // if (token) {
  //     auth
  //       // .getContent(token)
  //       .getContent()
  //       .then((res) => {
  //         setLoggedIn(true);
  //         setUserEmail(res.data.email);
  //       })
  //       .catch((err) => console.log(err));
  //   // } else {
  //   //   setLoggedIn(false);
  //   }
  // // }, [token]);
  // );


  // useEffect(() => {
  //   api
  //     // .getUserInfo(token)
  //     .getUserInfo()
  //     .then((res) => {
  //       setCurrentUser(res.data);
  //       api
  //         // .getInitialCards(token)
  //         .getInitialCards()
  //         .then((res) => {
  //           if (res.data) {
  //             setCards((cards) => res.data);
  //             // setCards((cards) => [...cards, res.data]);
  //           }
  //         })
  //         .catch((err) => console.log(err));
  //     })
  //     .catch((err) => console.log(err));
  //   // }, [token]);
  // }, []);

  return (
    // <CurrentUserContext.Provider>
    <Route>
      {/* <Switch> */}
      {/* <Header /> */}
      <Main />
      <About />
      <Footer />

      {/* </Switch> */}
    </Route>
    // </CurrentUserContext.Provider>
    // <CurrentUserContext.Provider value={currentUser}>
    //   <Switch>
    //     <Main />
    //     <Route exact path='/signin'>
    //       <Header
    //         userEmail={userEmail}
    //         loggedIn={loggedIn}
    //         onLogout={handleLogout}
    //         link={{ description: 'Sign up', to: '/signup' }}
    //       />
    //       {/* <Login
    //         loggedIn={loggedIn}
    //         email={email}
    //         setEmail={setEmail}
    //         password={password}
    //         setPassword={setPassword}
    //         userEmail={setUserEmail}
    //         setUserEmail={setUserEmail}
    //         handleLogin={handleLogin}
    //         handleLoginSubmit={handleLoginSubmit}
    //         onLogout={handleLogout}
    //         isOpen={isInfoToolTipOpen}
    //         handleToolTip={handleToolTip}
    //         success={tooltipMode}
    //       /> */}
    //       {/* <InfoToolTip
    //         isOpen={isInfoToolTipOpen}
    //         success={tooltipMode}
    //         onClose={closeAllPopups}
    //         loggedIn={loggedIn}
    //       /> */}
    //     </Route>
    //     <Route exact path='/signup'>
    //       <Header
    //         userEmail={userEmail}
    //         loggedIn={loggedIn}
    //         link={{ description: 'Log in', to: '/signin' }}
    //       />
    //       {/* <Register
    //         registered={registered}
    //         email={email}
    //         setEmail={setEmail}
    //         password={password}
    //         setPassword={setPassword}
    //         handleRegisterSubmit={handleRegisterSubmit}
    //         setUserEmail={setUserEmail}
    //         handleLogin={handleLogin}
    //         handleToolTip={handleToolTip}
    //       /> */}
    //       {/* <InfoToolTip
    //         isOpen={isInfoToolTipOpen}
    //         success={tooltipMode}
    //         onClose={closeAllPopups}
    //         loggedIn={loggedIn}
    //       /> */}
    //     </Route>
    //     {/* <Route exact path='/'>
    //       {loggedIn ? <Redirect to='/main' /> : <Redirect to='/signin' />}
    //     </Route> */}
    //     <Route path='/main'>
    //       {/* <EditProfilePopup
    //         isOpen={isEditProfilePopupOpen}
    //         onClose={closeAllPopups}
    //         onUpdateUser={handleUpdateUser}
    //       /> */}
    //       {/* <EditAvatarPopup
    //         isOpen={isEditAvatarPopupOpen}
    //         onClose={closeAllPopups}
    //         onUpdateAvatar={handleUpdateAvatar}
    //       /> */}
    //       {/* <AddPlacePopup
    //         isOpen={isAddPlacePopupOpen}
    //         onClose={closeAllPopups}
    //         onAddPlace={handleAddPlace}
    //       /> */}
    //       <PopupWithForm
    //         name='confirmation'
    //         title='Are you sure?'
    //         isOpen={false}
    //         onClose={closeAllPopups}
    //       />
    //       {/* <PopupWithImage onClose={closeAllPopups} card={selectedCard} /> */}
    //       <Header
    //         loggedIn={loggedIn}
    //         userEmail={userEmail}
    //         link={{ description: 'Log out', to: '/signin' }}
    //         onLogout={handleLogout}
    //       />
    //       <ProtectedRoute
    //         path='/main'
    //         loggedIn={loggedIn}
    //         component={Main}
    //         // onEditProfile={handleEditProfileClick}
    //         // onAddPlace={handleAddPlaceClick}
    //         // onEditAvatar={handleEditAvatarClick}
    //         onCardClick={handleCardClick}
    //         onCardLike={handleCardLike}
    //         onCardDelete={handleCardDelete}
    //         onClose={closeAllPopups}
    //         // isEditProfilePopupOpen={isEditProfilePopupOpen}
    //         // isAddPlacePopupOpen={isAddPlacePopupOpen}
    //         // isEditAvatarPopupOpen={isEditAvatarPopupOpen}
    //         selectedCard={selectedCard}
    //         cards={cards}
    //       />
    //     </Route>
    //     <Redirect from='*' to='/' />
    //   </Switch>
    //   <Footer />
    // </CurrentUserContext.Provider>
  );
}

export default withRouter(App);


// import React from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import './App.css';
// import logo from '../../logo.svg';

// function App() {
//   return (
//     <>
//     <Switch>
//       <Route exact path='/signin'>
//         <Header link={{ description: 'Sign up', to: '/signup' }} />
//       </Route>
//       <div className='App'>
//         <header className='App-header'>
//           <img src={logo} className='App-logo' alt='logo' />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className='App-link'
//             href='https://reactjs.org'
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//       <Redirect from='*' to='/' />
//       <Footer />
//     </Switch>
//     </>
//   );
// }

// export default App;