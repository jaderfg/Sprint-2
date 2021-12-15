//inscribirse
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { userUrl } from '../helpers/UrlsApi';
import axios from 'axios';


export default class SignUp extends Component {

    constructor(){
        super();
        this.state = {
            registro:[],
            
        };
    }


    render() {

      
    const {nombre,apellido,contraseña,email} = this.state.registro;

    const postData = () => {
        axios.post(userUrl,this.state.registro)
       .then(response => console.log(response.data))
       .catch(error => console.log(error))
        
    }


   const handleChanged = ({target}) => {
    this.setState({
      ...this.state.registro,
      [target.name]: target.value
    })

    }
  const handleSubmit = (e) => {
    e.preventDefault();
   }




        return (
            <div>
                <h1>Registrate</h1>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Mazda-Chevrolet-etc" onChange={handleChanged} 
                    name="nombre" value={nombre} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Aveo GT 2021" onChange={handleChanged}
                    name="apellido" value={apellido}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control type="email" placeholder="Ej: 15.000.000" onChange={handleChanged}
                    name="email" value={email}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ubicacion del Vehiculo</Form.Label>
                    <Form.Control type="password" placeholder="Ej: Medellín" onChange={handleChanged}
                    name="contraseña" value={contraseña}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => postData()}>
                    Enviar registro
                </Button>
                </Form>
            </div>
        )
    }
}

