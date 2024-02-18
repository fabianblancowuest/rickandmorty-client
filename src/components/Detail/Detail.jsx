import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";

const Detail = () => {
	// Hook para traer el id del personaje
	const { id } = useParams();

	// Estado inicial del arreglo pensonajes
	const [character, setCharacter] = useState({});

	// Hook para traer datos desde la app de rick y morty
	useEffect(() => {
		// axios(`https://rickandmortyapi.com/api/character/${id}`)
		axios(`https://rickandmortyapi.com/api/character/${id}`).then(
			({ data }) => {
				if (data.name) {
					setCharacter(data);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			},
		);
		return setCharacter({});
	}, [id]);

	return (
		<div className={styles.container}>
			<div className={styles.item1}>
				<h1>{character.name}</h1>
				<h3>STATUS | {character.status}</h3>
				<h3>GENDER | {character.gender}</h3>
				{/* {watchCard ? <h3>ORIGIN | {character.origin.name}</h3> : null} */}
				<h3>SPECIE | {character.species}</h3>
				{/* {character.id ? (<h3>ORIGIN | {character.origin.name}</h3>) : null} */}
				<h3>ORIGIN | {character.origin?.name}</h3>
				{/* <h3>ur{character["location"]["name"]}</h3> */}
				<h3>LOCATION | {character.location?.name}</h3>
			</div>
			<div className={styles.item2}>
				<img
					className={styles.img}
					src={character.image}
					alt={character.name}
				></img>
			</div>
		</div>
	);
};

export default Detail;
