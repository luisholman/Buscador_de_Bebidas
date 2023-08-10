import { useState } from 'react'
import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import { useCategorias } from '../hooks/useCategorias'
import {useBebidas} from '../hooks/useBebidas'

export const Formulario = () => {

    const [busqueda, setBusqueda]=useState({
        nombre: '',
        categoria: ''
    });

    const [alerta, setAlerta] = useState('')
    const { categorias } = useCategorias()
    const { consultarBebida } = useBebidas()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        consultarBebida(busqueda)
    }

  return (
    <Form
    onSubmit={handleSubmit}
    >

        {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
        <Row>
            <Col md={6}>
                <Form.Group className="mb-5">
                    <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>
                    <Form.Control
                    id='nombre'
                    type='text'
                    placeholder='Ej: Tequila, Vodka, etc'
                    name='nombre'
                    value={busqueda.categoria}
                    onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}
                    />
                </Form.Group>
            </Col>

            <Col md={6}>
            <Form.Group className="mb-5">
                    <Form.Label htmlFor='categoria'>Categoria Bebida</Form.Label>
                    <Form.Select
                        id="categoria"
                        name="categoria"
                        value={busqueda.nombre}
                    onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}
                    >
                        <option> - selecciona categoria - </option>
                        {categorias.map(categoria => (
                            <option
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                            >
                                {categoria.strCategory}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Col>

            <Row className='justify-content-end'>
                <Col md={3}>
                <Button 
                type='submit'
                className='btn btn-danger text-uppercase w-100'
                
                >
                    Buscar Bebidas
                </Button>
                </Col>
            </Row>
        </Row>
    </Form>
  )
}
