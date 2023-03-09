import { useContext } from 'react';
import Cardui from '../ui/card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';
function MeetupItem(props) {
   const favoritesCtx =  useContext(FavoritesContext);
console.log(props.id)
   const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
console.log(itemIsFavorite)
   function toggleFavoriteStatusHandler() {
      if (itemIsFavorite) {
         favoritesCtx.removeFavorite(props.id);

      } else {
         favoritesCtx.addFavorite({
            id: props.id,
            title: props.title,
            description: props.description,
            image: props.image,
            address: props.address,
         });
      }
    
   }

   return <li className={classes.item}>
      <Cardui>
         <div className={classes.image}>
            <img src={props.image} alt={props.title} />
         </div>
         <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
         </div>
         <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites' }
               </button>
         </div>
      </Cardui>

   </li>
}
export default MeetupItem;