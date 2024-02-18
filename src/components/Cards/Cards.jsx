import { createRef } from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Cards = () => {
	// Función para recorrer el arreglo de objeto de personajes y renderizar cada propiedad en la pantalla
	const characters = useSelector((state) => state.characters);
	const show = characters?.map((character, index) => {
		if (character.id) {
			return (
				<div key={index}>
					<Card
						id={character?.id}
						name={character?.name}
						status={character?.status}
						species={character?.species}
						gender={character?.gender}
						origin={character.origin?.name}
						image={character?.image}
						// Agregar un identificador único como ref
						ref={(el) => (this[`cardRef_${character.id}`] = el)}
					/>
				</div>
			);
		}
	});

	const lastCardRef = createRef();

	useEffect(() => {
		// Si existe una última carta, desplázate hacia ella con un efecto suave
		if (lastCardRef.current) {
			lastCardRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [show]);
	return (
		<div className={styles.cards}>
			{/* Ejecutamos la función que recorre el arreglo */}
			{show}
			{/* Referencia a la última Card */}
			<div ref={lastCardRef}></div>
		</div>
	);
};

export default Cards;
