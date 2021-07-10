import React, { useState, useEffect } from "react";
import { dataEducation } from "../../Firebase/firebaseContext";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
//iconos
import LinkIcon from "@material-ui/icons/Link";

function Education() {
	const [education, setEducation] = useState([]);

	useEffect(() => {
		async function getData() {
			const data = await dataEducation();
			setEducation(data);
		}
		getData();
	}, []);

	return (
		<div id='education' className='education'>
			<div className='education-title'>
				<Typography variant='h3'>Education</Typography>
			</div>

			{education.map(function (ele) {
				const urlImg = "../img/proyects/" + ele.img;
				return (
					<div className='education-card' key={ele.nombre}>
							<img src={urlImg} alt={ele.nombre}></img>
							<div className='education-description'>
								<Typography className='title'> {ele.nombre}</Typography>
								<Typography className='description'>
									{" "}
									{ele.descripcion}
								</Typography>
								<Typography className='fecha'> {ele.fecha}</Typography>
								<Divider />

								<Link target='_blank' href={ele ? ele.url : null}>
									<LinkIcon fontSize='small' /> {ele.nombre}
								</Link>
							</div>
					</div>
				);
			})}
		</div>
	);
}

export default Education;
