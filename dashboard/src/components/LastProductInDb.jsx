
export const LastProductInDb = () => {
  return (
    <div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto Agregado</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "40rem"}} src="images/poncho.jpg" alt=" Star Wars - Mandalorian "/>
									</div>
									<p>Poncho de lana de alpaca, producto muy cotizado por el valor calorico que ofrece en una noche fresca</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del Producto</a>
								</div>
							</div>
						</div>
  )
}
