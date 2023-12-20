import { Card,CardBody,CardHeader,CardTitle,Col, Row, Table } from "react-bootstrap";
import { FormSearch } from "../components/FormSearch";
import { FormProduct } from "../components/FormProduct";
import { TableItem } from "../components/TableItem";
import { useEffect, useState } from "react";
import { UseFetch } from "../hooks/UseFetch";
import ReactPaginate from 'react-paginate'
//import { deleteProduct } from "../service/productServices";


export const ListProductsPage = () => {

  const [products, setProducts] = useState([]);

  const [formValues, setFormValues] = useState({
    id: null,
    title: "",
    categoryId: "",
    sectionId: "",
    regionId:"",
    price: "",
    discount: "",
    amount:"",
    amountmin:"",
    description: "",
  });

  const handleEditForm = (idProduct) => {

    const {id, title, categoryId, sectionId, regionId, price, discount, amount, amountmin, description} = products.find(product => product.id === idProduct)

    setFormValues({
      id,
      title,
      categoryId,
      sectionId,
      regionId,
      price,
      discount,
      amount,
      amountmin,
      description,
    })
  }

  const handleDeleteProduct = async (id) => {
    const {msg} = await deleteProduct(id);
    console.log(msg);
    const productsFiltered = products.filter(product => product.id !== id);

    setProducts([...productsFiltered])
  }

  const getData = async () => {
    const { data } = await UseFetch("dashboard/products");

    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

       return (<Row>

        <Col sm={12} lg={4}>
          <Card>
          <CardHeader>
              <CardTitle>
                {'Agregar' }Producto
              </CardTitle>
            </CardHeader>
            <CardBody>
              <FormProduct products={products} setProducts={setProducts} formValues={formValues} setFormValues={setFormValues}/>
            </CardBody>
          </Card>
        </Col>

        <Col sm={12} lg={8}>
          <Card className="shadow mb-5">
          <CardHeader>
              <CardTitle>
              <div className="d-flex flex-column flex-md-row justify-content-between">

                <FormSearch/>

                                
              </div>
              </CardTitle>
            </CardHeader>
        <Card.Body>
        
        <Table striped borderless responsive>
        <thead>
        <tr>
          <th>Producto</th>
          <th>Categoria</th>
          <th>Seccion</th>
          <th>Region</th>
          <th>Precio</th>
          <th>Desto.</th>
          <th>Cant.</th>
          <th>Cant. Min.</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>

      {
        products.map((product, index) => (<TableItem key={product.title+index} product={product} handleEditForm={handleEditForm}/>))}
      
      
      </tbody>
    </Table>
   
    </Card.Body>
    
      </Card>
        </Col>
        </Row>)
      
}
