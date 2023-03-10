import { createContext, useState } from 'react';
const FavouritesContext = createContext({
        favorites: [],
        totalFavortes: 0,
        addFavorite: (favoriteMeetup) => {},
        removeFavorite: (meetupId) => {},
        itemIsFavorite: (meetupId) => {}, 
    });



 export function FavoritesContextProvider(props) {
    
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });


    }
    
    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.Id === meetupId);
    }


    
    
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };

   return <FavouritesContext.Provider value={context}>
    {props.children}

   </FavouritesContext.Provider>
 }
 export default FavouritesContext ;
