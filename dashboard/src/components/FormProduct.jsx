import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { UseFetch } from "../hooks/UseFetch";
import PropTypes from "prop-types";
//import { createProduct, updateProduct } from "../service/productServices";

export const FormProduct = (products, setProducts) => {

  const [categories, setCategories] = useState([]);
  const [sections, setSections] = useState([]);
  const [regions, setRegions] = useState([]);
  
  const getData = async () => {

    const categories = await UseFetch("dashboard/categories");
    const sections = await UseFetch("dashboard/sections");
    const regions = await UseFetch("dashboard/regions");

    setCategories([...categories.data])
    setSections([...sections.data])
    setRegions([...regions.data])

  };
    
    useEffect(() => {
      getData();
    }, []);

  const {formValues, setFormValues} = useState({
    
    title: "",
    categoryId: "",
    sectionId: "",
    regionId: "",
    price: "",
    discount: "",
    amount: "",
    amountmin: "",
    description: "",
});

const handleInputChange = ({ target }) => {
  setFormValues({
    ...formValues,
    [target.name]: target.value,
  })
}

const handleSubmitFormCreate = async (event) => {
  event.preventDefault();

  if (
    [
      formValues.title,
      formValues.categoryId,
      formValues.sectionId,
      formValues.regionId,
      formValues.price,
      formValues.amount,
      formValues.amountmin,
      formValues.description,
    ].includes("")
  ) {
    alert("upsss... no envíe vacío el formulario!!!");
    return;
  }

  const {data} = await UseFetch('dashboard/product', 'POST', formValues);

  setProducts([
    ...products,
    data
  ]);
      
}

  /* const handleSubmitForm = async (event) => {
      event.preventDefault();
      
        
      if (formValues.id) {
        const { data } = await updateProduct(formValues)
  
        const productsUpdated = products.map((product) => {
          if (product.id === data.id) {
            product = data;
          }
          return product;
        });
  
        
  
      setFormValues({
        id: null,
        title: "",
        categoryId: "",
        sectionId: "",
        regionId: "",
        price: "",
        discount: "",
        amount: "",
        amountmin: "",
        description: "",
      });
    };*/
  
  return (

    <Form className="row" onSubmit={handleSubmitFormCreate}>

      <Form.Group className="mb-3 col-12" >
        <Form.Label>Nombre del Producto</Form.Label>
        <Form.Control type="text" placeholder="Nombre del Producto" name="title" onChange={handleInputChange}/>
        
      </Form.Group>

      <Form.Group className="mb-3 col-12" >
        <Form.Label>Categoria</Form.Label>
        <Form.Select className="form-control" aria-label="Default select example" name="categoryId" onChange={handleInputChange}>
          <option hidden defaultChecked>Selecciona....</option>

          {categories.map((category, index) => <option key={index + category.title} value={category.id}>{category.title}</option>)}
                    
        </Form.Select>
        
      </Form.Group>

      <Form.Group className="mb-3 col-12" >
        <Form.Label>Seccion</Form.Label>
        <Form.Select className="form-control" aria-label="Default select example" name="sectionId" onChange={handleInputChange}>
          <option hidden defaultChecked>Selecciona....</option>

          {sections.map((section, index) => <option key={index + section.title} value={section.id}>{section.title}</option>)}

        </Form.Select>
        
      </Form.Group>

      <Form.Group className="mb-3 col-12" >
        <Form.Label>Region</Form.Label>
        <Form.Select className="form-control" aria-label="Default select example" name="regionId" onChange={handleInputChange}>
          <option hidden defaultChecked>Selecciona....</option>

          {regions.map((region, index) => <option key={index + region.title} value={region.id}>{region.title}</option>)}
          
        </Form.Select>
        
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-md-6" >
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" placeholder="Precio" name="price" onChange={handleInputChange}/>
        
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-md-6" >
        <Form.Label>Descuento</Form.Label>
        <Form.Control type="number" placeholder="Descuento" name="discount" onChange={handleInputChange}/>
        
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-md-6" >
        <Form.Label>Cantidad Disponible</Form.Label>
        <Form.Control type="number" placeholder="Cantidad Disponible" name="amount" onChange={handleInputChange}/>
        
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-md-6" >
        <Form.Label>Cantidad Minima</Form.Label>
        <Form.Control type="number" placeholder="Cantidad Minima" name="amountmin" onChange={handleInputChange}/>
        
      </Form.Group>

      <Form.Group className="mb-3 col-12" >
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" type="text" placeholder="Descipcion" name="description" onChange={handleInputChange}/>
        
      </Form.Group>
      
      <Form.Group className="mb-3 col-12 d-flex flex-column flex-md-row justify-content-between" >
        <Button type="submit" variant="outline-primary">Agregar</Button>
        <Button variant="outline-danger">Cancelar</Button>
      </Form.Group>
      
    </Form>
  );
};

FormProduct.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func,
  //formValues: PropTypes.object,
  //setFormValues: PropTypes.func,
};
