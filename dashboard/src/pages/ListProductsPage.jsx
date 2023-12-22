import { Card,CardBody,CardHeader,CardTitle,Col, Row, Table } from "react-bootstrap";
import { FormSearch } from "../components/FormSearch";
import { FormProduct } from "../components/FormProduct";
import { TableItem } from "../components/TableItem";
import { useEffect, useState } from "react";
import { UseFetch } from "../hooks/UseFetch";
import { deleteProduct } from "../service/productServices";
import ReactPaginate from 'react-paginate';



export const ListProductsPage = () => {

  const [products, setProducts] = useState([]);
  const [changeImage, setChangeImage] = useState(false);


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
    image: ""
  });

  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleEditForm = (idProduct) => {

    const {id, title, categoryId, sectionId, regionId, price, discount, amount, amountmin, description, image} = products.find(product => product.id === idProduct)

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
      image 
    });

    setChangeImage(false)
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

  /* paginator settings */

const [itemOffset, setItemOffset] = useState(0);

const endOffset = itemOffset + itemsPerPage;
const currentItems = products.slice(itemOffset, endOffset);
const pageCount = Math.ceil(products.length / itemsPerPage);

const handlePageClick = (event) => {
  const newOffset = (event.selected * itemsPerPage) % products.length;
 
  setItemOffset(newOffset);
};

       return (<Row>

        <Col sm={12} lg={4}>
          <Card>
          <CardHeader>
              <CardTitle>
                {'Agregar' }Producto
              </CardTitle>
            </CardHeader>
            <CardBody>
              <FormProduct setChangeImage={setChangeImage} changeImage={changeImage} products={products} setProducts={setProducts} formValues={formValues} setFormValues={setFormValues}/>
            </CardBody>
          </Card>
        </Col>

        <Col sm={12} lg={8}>
          <Card className="shadow mb-5">
          <CardHeader>
              <CardTitle>
              <div className="d-flex flex-column flex-md-row justify-content-between">

                <FormSearch/>

                <ReactPaginate
            pageCount={pageCount}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            pageRangeDisplayed={4}
            onPageChange={handlePageClick}
            breakClassName="page-item"
            breakLinkClassName="page-link"
            marginPagesDisplayed={2}
            containerClassName="pagination justify-content-center cursorPage"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
      
          />
                                
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
        currentItems.map((product, index) => (<TableItem key={product.title+index} product={product} handleEditForm={handleEditForm} handleDeleteProduct={handleDeleteProduct}/>))}
      
      
      </tbody>
    </Table>
   
    </Card.Body>
    
      </Card>
        </Col>
        </Row>)
      
}
