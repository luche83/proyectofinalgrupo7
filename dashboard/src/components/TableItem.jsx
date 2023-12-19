import PropTypes from 'prop-types'

export const TableItem = ({product : {title, category, section, region, price, discount, amount, amountmin}}) => {
  return (
    <tr>
          <td>{title}</td>
          <td>{category.title}</td>
          <td>{section.title}</td>
          <td>{region.title}</td>
          <td>{price}</td>
          <td>{discount}</td>
          <td>{amount}</td>
          <td>{amountmin}</td>
          <td>
            <div className='d-flex'>
              <button className='btn btn-sm btn-outline-primary mr-2'><i className="fa-solid fa-file-circle-plus"></i></button>
                <button className='btn btn-sm btn-outline-success mr-2'><i className="fa-regular fa-pen-to-square"></i></button>
                <button className='btn btn-sm btn-outline-danger'><i className="fa-solid fa-trash-can"></i></button>
            </div>
          </td>
        </tr>
  )
};

TableItem.propTypes = {
    product : PropTypes.object,
    
}
