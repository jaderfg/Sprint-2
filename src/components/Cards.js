import React from 'react'
import styled from 'styled-components'
import { imageUrl } from '../helpers/UrlsApi'
import { CalificacionContainer } from '../styles/Style'


const Cards = ({movie,mostrar}) => {
    
    
    

    const CardContainer = styled.button`
        background-image: url('${imageUrl}${movie.poster_path}');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 220px;
        height: 330px;
        padding: 48px, 25px;
        margin:24px;
        border:none;
    `
    
    


    return (
        
        <CardContainer className='rounded-2' onClick={() =>mostrar(movie.id)}>
            <CalificacionContainer>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>            
                <span>{movie.vote_average}</span>
            </CalificacionContainer>
        </CardContainer>
        
                                   
    )
}

export default Cards
