import PropType from 'prop-types'
import { useState } from "react"
import { Form, InputGroup } from 'react-bootstrap';

export const FormSearch = () => {

    const [valuesForm, setvaluesForm] = useState({});

    const handleInputChange = ({target}) => {
        setvaluesForm({
            ...valuesForm,
            [target.name] : target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
    }

  return (
    <Form onSubmit={handleSubmit} className='d-row aling-items-center'>

    <InputGroup>
        
        <input type="text" name="keyword" className="form-control" onChange={handleInputChange} placeholder='Buscar Producto'/>
        <button className="btn btn-outline-primary input-group-text" type="submit"><i className="fa fa-search"></i></button>
        
        </InputGroup>
    </Form>
  )
}

