import PropTypes from 'prop-types'
import { MetricItem } from "./MetricItem";

export const Metrics = ({totalProducts}) => {

	const items = [
		{
			id: crypto.randomUUID(),
			color: "primary",
			title: "Productos en Almacen",
			value: totalProducts,
			icon: "fa-film"
		},
		{
			id: crypto.randomUUID(),
			color: "success",
			title: "Categorias y Secciones",
			value: 79,
			icon: "fa-award"
		},
		{
			id: crypto.randomUUID(),
			color: "warning",
			title: "Usuarios Registrados",
			value: 49,
			icon: "fa-user"
		}
	]

return (
    <div className="row">
			{items.map(({id, title, value, color, icon }) => (
				<MetricItem key={id} title={title} value={value} color= {color} icon={icon}/>
			))}	
	</div>
);
};

Metrics.propTypes = {
	totalProducts : PropTypes.number
}