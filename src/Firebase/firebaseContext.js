import "firebase/firestore";

import firebase from "./settings"; //inicializacion de firebase

const dataEducation = async () => {
	const db = firebase.firestore();
	const data = await db.collection("educacion").get();
	return data.docs.map(doc => doc.data());
};

const dataProyects = async () => {
	const db = firebase.firestore();
	const data = await db.collection("proyectos").get();
	return data.docs.map(doc => doc.data());
}
const dataExperience = async () => {
	const db = firebase.firestore();
	const data = await db.collection("experienciaLaboral").get();
	return data.docs.map(doc => doc.data());
}


export { dataEducation, dataProyects, dataExperience };
