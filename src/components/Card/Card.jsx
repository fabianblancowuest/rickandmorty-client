import { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
	addFavorite,
	deleteFavorite,
	deleteCharacter,
} from "../../redux/actions/actions";
import redHeart from "./../../assets/img/icons/red-heart.png";
import whiteHeart from "./../../assets/img/icons/white-heart.png";
import closeButton from "./../../assets/img/icons/close-button.png";

function Card(props) {
	const {
		name,
		status,
		species,
		gender,
		origin,
		image,
		id,
		location,
		isFavoriteView,
	} = props;
	const [isFav, setIsFav] = useState(false);

	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.favorites);

	function handleFavorite() {
		if (isFav) {
			setIsFav(false);
			dispatch(deleteFavorite(id));
		} else {
			setIsFav(true);
			dispatch(
				addFavorite({
					name,
					status,
					species,
					gender,
					origin,
					image,
					id,
					location,
				}),
			);
		}
		// despachar el objeto de la acción
	}

	const handleDelete = () => {
		dispatch(deleteCharacter(id));
	};

	useEffect(() => {
		favorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
			}
		});
	}, [favorites]);

	return (
		<div className={styles.card}>
			<div className={styles.buttons}>
				{!isFavoriteView && (
					<button className={styles.btn} onClick={handleDelete}>
						<img
							className={styles.closeIcon}
							src={closeButton}
							alt="close-button"
						></img>
					</button>
				)}

				{isFav ? (
					<button className={styles.btnFav} onClick={handleFavorite}>
						<img className={styles.favIcon} src={redHeart} alt="fav-icon"></img>
					</button>
				) : (
					<button className={styles.btnFav} onClick={handleFavorite}>
						<img
							className={styles.favIcon}
							src={whiteHeart}
							alt="fav-icon"
						></img>
					</button>
				)}
			</div>

			<Link to={`/detail/${id}`}>
				<h2 className={styles.title}>{name}</h2>
				<img className={styles.img} src={image} alt={name} />
				<h2>{species}</h2>
				<h2>{gender}</h2>
			</Link>
		</div>
	);
}

export default Card;
