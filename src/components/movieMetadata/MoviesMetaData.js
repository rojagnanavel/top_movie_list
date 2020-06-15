import React from 'react';
import classes from './MoviesMetaData.module.css';
import {Link} from 'react-router-dom';
const MoviesMetaData = (props)=>{
        return (
            <div className={classes.imageAlignment}>
                <Link to={{
                    pathname:'/postermeta',
                    state:{
                        val:props.items
                    }
                }}>         
                <img className={classes.imageStyle} 
                                alt="Movie Posters" height='300' width='350' 
                                src={props.items.imageUrl} 
                                />
                </Link>
            </div>
            )

}
export default MoviesMetaData;

