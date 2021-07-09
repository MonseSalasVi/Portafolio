//import React, { useEffect, useState } from "react";
import "firebase/firestore";

import firebase from "./settings"; //inicializacion de firebase

const dataEducation = async () => {
	const db = firebase.firestore();
	const data = await db.collection("educacion").get();
	return data.docs.map(doc => doc.data());
};

export { dataEducation };
