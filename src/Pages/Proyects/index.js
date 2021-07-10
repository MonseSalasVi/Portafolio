import React, { useEffect, useState } from "react";
import { dataProyects } from "../../Firebase/firebaseContext";
import Card from "../../components/Card";
import Typography from "@material-ui/core/Typography";

function Proyects() {
	const [proyectsList, setproyectsList] = useState([]);

	useEffect(() => {
		async function getData() {
			const data = await dataProyects();
			setproyectsList(data);
		}
		getData();
	}, []);

	return (
		<div id='proyects' className='proyects'>
			<div className='proyects-title'>
				<Typography variant='h3'>Proyectos</Typography>
			</div>

			<div className='proyects-container'>
				{proyectsList.map(function (ele) {
					return <Card props={ele} key={ele.nombre} ></Card>;
				})}
			</div>
		</div>
	);
}

export default Proyects;
