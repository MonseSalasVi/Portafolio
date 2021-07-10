import React, { useEffect, useState } from "react";
import { dataExperience } from "../../Firebase/firebaseContext";
import Card from "../../components/Card";
import Typography from "@material-ui/core/Typography";

function Experience() {
	const [experience, setExperience] = useState([]);

	useEffect(() => {
		async function getData() {
			const data = await dataExperience();
			setExperience(data);
		}
		getData();
	}, []);

	return (
		<div id='experience' className='experience'>
			<div className='experience-title'>
				<Typography variant='h3'>EXPERIENCE WORKING WITH</Typography>
			</div>

			<div className='experience-container'>
				{experience.map(function (ele) {
					return <Card props={ele} key={ele.nombre} ></Card>;
				})}
			</div>
		</div>
	);
}

export default Experience;
