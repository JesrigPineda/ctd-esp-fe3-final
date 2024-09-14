import React from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from "./utils/global.context";

const Card = ({ dentist }) => {

  const{state, dispatch} = useDentistStates()
  const isFav = state.favs.find((fav) => fav.id == dentist.id)

  const addFav = ()=>{
    dispatch({type: isFav ? 'REMOVE_FAV': 'ADD_FAV', payload: dentist})
  }

  return (
    <div className="card">
        <img src="/images/doctor.jpg" alt="" width={200}/>
        <div className="card-text">
          <Link to={'/detail/' + dentist.id}><h3>{dentist.name}</h3></Link>
          <h3>{dentist.username}</h3>
        </div>
        <button onClick={addFav} className="favButton">{isFav ? '❤️' : '⭐' }</button>
    </div>
  );
};

export default Card;
