// import React, { Component } from 'react'
import { apiKey2, appiUrl } from '../helpers/UrlsApi'
import {urlBase} from '../helpers/UrlsApi'
import Modal from './Modal';
import { ContenedorModal, DataMovie, ModalBtnCerrar, ModalBtnContainer, ModalButtons  } from '../styles/Style'
import styled from 'styled-components';
////////
import React, { useEffect, useState } from 'react'
import Cards from './Cards'


export default function ApiFetch({showCategory, searchMovie }) {

    let url = ''
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [estado, setEstado] = useState(false)
    const [showInfo, setInfo] = useState({})

    if (searchMovie.length > 0) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=fa031f96936e4b36067a690a2e64116c&language=en-US&query=${searchMovie}&api_key=0ca79cfff3d14page=1&include_adult=false`
    } else {
        url = appiUrl
    }

    useEffect(() => {

        getData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchMovie])


    useEffect(() => {

        getScroll()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    useEffect(() => {
 

    }, [estado])

    const getData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)    
    }


    const getScroll = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&page=${page}&language=es-LA`)
        const data = await res.json()
        setMovies([...movies, ...data.results])
        
    }


    const scrollToEnd = () => {
        setPage(page + 1)
    }

    window.onscroll = function () {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            scrollToEnd()
        }
    }

    const closeModal =() =>{
        setEstado(false);
    }
    

    
    const mostrarModal = async(key) =>{

        setEstado(true)
                    
                    
        const resp = await fetch(urlBase+'movie/'+key+apiKey2);
            const data = await resp.json();
                        
            const {id, poster_path,original_title,overview,release_date,vote_average,runtime} = data
            let duracion;
            if (runtime > 60) {
                duracion = Number(runtime)-60
                // eslint-disable-next-line no-useless-concat
                duracion = "1h"+' '+String(duracion)+"min"
                            
            }else{
                duracion = Number(runtime)
                // eslint-disable-next-line no-useless-concat
                duracion = "0h"+' '+String(duracion)+"min"
                            
                }
            let detalle = {
                id,
                poster_path,
                original_title,
                overview,
                release_date,
                vote_average,
                duracion
                }
            setInfo(detalle)
                       
                        
        }
    let urlPoster = 'https://image.tmdb.org/t/p/w500/'+showInfo.poster_path     

    const ImagenModal= styled.div`
        background-image: url(${urlPoster}); 
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 300px;
        height: 370px;
        transform: matrix(0.71, -0.41, 1.22, 0.71, 0, 0);
        border-radius:10px;
    
    `




    return (
        <div>
            <h1>{showCategory}</h1>
            <div>
                {

                    // eslint-disable-next-line eqeqeq
                    showCategory == 'Todas las peliculas' ?
                        movies.map(data => (
                            <Cards
                                key={data.id}
                                movie={data}
                                mostrar={mostrarModal}
                                
                            />
                        // eslint-disable-next-line eqeqeq
                        )) : showCategory == 'Peliculas más valoradas' ?
                            movies.filter(vote => vote.vote_average >= 7).map(data => (
                                <Cards
                                    key={data.id}
                                    movie={data}
                                    mostrar={mostrarModal}
                                />
                            // eslint-disable-next-line eqeqeq
                            )) : showCategory == 'Peliculas menos valoradas' ?
                                movies.filter(voto => voto.vote_average < 7).map(data => (
                                    <Cards
                                        key={data.id}
                                        movie={data}
                                        mostrar={mostrarModal}
                                    />
                                )) : console.log('no existe')
                }
            </div>
            <Modal estado = {estado}>
                <ContenedorModal>
                    <ModalBtnCerrar onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </ModalBtnCerrar>
                    <ImagenModal/>
                    <DataMovie className='text-light'>
                        <h1>{showInfo.original_title}</h1>
                        <p>{showInfo.overview}</p>
                        <div className='w-100'>
                            <ul className='d-flex'>
                                <li className='me-5'>{showInfo.release_date}</li>
                                <li className='me-5'>Crimen/Suspenso </li>
                                <li className='me-5'>{showInfo.duracion}</li>
                            </ul>
                            <ModalBtnContainer>
                                <ModalButtons className='bg-warning'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                    </svg>
                                    <span>VER AHORA</span>    
                                </ModalButtons>
                                <ModalButtons>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                    <span>VER DESPUÉS</span>    
                                </ModalButtons>

                            </ModalBtnContainer>
                        </div>
                    </DataMovie>
                </ContenedorModal>
            </Modal> 

                    
        </div>
    )
}
