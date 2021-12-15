import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link, NavLink,  } from 'react-router-dom'
import { ButtonSearch, FormSearch, InputSearch,Categorias } from '../styles/Style'

const BarraNav = ({seccion,estadoSearch}) => {

    console.log(seccion);

    const handleClick = (e) => {
        e.preventDefault();
        seccion(e.target.name)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        estadoSearch(e.target.value)
    }


    return (
        <div>
            <Nav className="mb-5 text-Light px-5 py-3 nav">
                <Categorias className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <Link to="/" className="nav-link">
                        <img src="https://res.cloudinary.com/jadergomez/image/upload/v1639411382/png-clipart-film-outdoor-cinema-ticket-movie-home-s-logo-film_bronmq.png"
                        width="106px" alt=''/>
                    </Link> 
                    <Categorias className="nav-item ">
                        <NavLink
                            name="Todas las peliculas"
                            className="nav-link text-white"
                            to="/"
                            onClick={handleClick}
                        >Todas</NavLink>
                    </Categorias>
                    <Categorias className="nav-item ">
                        <NavLink
                        name="Peliculas más valoradas"
                        className="nav-link text-white"
                        to="/Peliculas"
                         onClick={handleClick}
                        >Mas Valoradas</NavLink>
                    </Categorias>
                    <Categorias className="nav-item ">
                        <NavLink
                        name="Peliculas menos valoradas"
                        className="nav-link text-white"
                        to="/Peliculas"
                        onClick={handleClick}
                        >Menos Valoradas</NavLink>
                    </Categorias>         
                </Categorias>         
                <FormSearch className="d-flex " onSubmit={handleSubmit}>
                    <InputSearch
                    type="text"
                    placeholder="Buscar tu pelicula favorita"
                    onChange={handleInputChange}
                    />
                    <ButtonSearch type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </ButtonSearch>
                </FormSearch>

                <Link to="/SignIn" className="nav-link text-light align-self-center">Sign In</Link>
                <Link to="/SignUp" className="nav-link text-light align-self-center">Sign Up</Link> 
                              
            </Nav>
        </div>
    )
}

export default BarraNav
