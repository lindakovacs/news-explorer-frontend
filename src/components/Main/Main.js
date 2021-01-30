import React from 'react';
import Header from '../Header/Header';
// import Search from '../Search/Search';

import './Main.css';

function Main() {
// function Main(props) {
  return (
    <section className='main'>
      <Header />
      {/* <Header buttonClick={props.headerClick} loggedIn={props.loggedIn} /> */}
      <section className='main__content'>
        <h1 className='main__title'>What's going on in the world?</h1>
        <p className='main__subtitle'>
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        {/* <Search onSubmit={props.search} /> */}
      </section>
    </section>
  );
}
export default Main;


// import React, { useContext } from 'react';
// import NewsCard from '../NewsCard/NewsCard';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import About from '../About/About';
// import './Main.css';

// function Main(props) {
//   const currentUser = useContext(CurrentUserContext);

//   return (
//     <>
//       <section className='profile'>
//         <div className='profile__container'>
//           <div className='profile__image-container'>
//             <button
//               className='profile__image-edit'
//               aria-label='Update profile image'
//               onClick={props.onEditAvatar}
//             ></button>
//             <img
//               className='profile__image'
//               src={currentUser && currentUser.avatar}
//               alt='profile-picture'
//             />
//           </div>
//           <div className='profile__info'>
//             <div className='profile__text'>
//               <h1 className='profile__title'>
//                 {currentUser && currentUser.name}
//               </h1>
//               <p className='profile__subtitle'>
//                 {currentUser && currentUser.about}
//               </p>
//             </div>
//             <button
//               className='button profile__edit-button'
//               aria-label='Edit button'
//               onClick={props.onEditProfile}
//             ></button>
//           </div>
//         </div>
//         <button
//           className='button profile__add-button'
//           aria-label='Add button'
//           onClick={props.onAddPlace}
//         ></button>
//       </section>

//       {/* Template initial cards */}
//       <section className='cards'>
//         <ul className='cards__grid'>
//           {props.cards.map((card, index) => (
//             <NewsCard
//               key={index}
//               card={card}
//               onCardClick={props.onCardClick}
//               onCardLike={props.onCardLike}
//               onCardDelete={props.onCardDelete}
//             />
//           ))}
//         </ul>
//         <About />
//       </section>
//     </>
//   );
// }
// export default Main;