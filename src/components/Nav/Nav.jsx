import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import navImg from "../../assets/img/backgrounds/navImg.png";
import { useLocation, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanFavorites } from "../../redux/actions/actions";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Nav = (props) => {
	const favorites = useSelector((state) => state.favorites);
	const dispatch = useDispatch();
	const location = useLocation();
	const currentPath = location.pathname;
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleCleanFavorites = () => {
		dispatch(cleanFavorites());
	};

	const handleToggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<div>
			{currentPath !== "/" && currentPath !== "/signup" && (
				<FaBars
					id="menuToggle"
					className={styles.menuToggle}
					onClick={handleToggleMenu}
				/>
			)}
			{/* {currentPath !== "/" && currentPath !== "/signup" ? ( */}
			<div
				className={`${styles.navContainer} ${
					isMenuOpen ? styles.menuToggleShow : ""
				} `}
			>
				<div className={styles.homeAbout}>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.navLink
						}
					>
						About
					</NavLink>

					<NavLink
						to="/favorites"
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.navLink
						}
					>
						Favorites
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.navLink
						}
						to="/home"
					>
						Home
					</NavLink>
					<img src={navImg} className={styles.navImg}></img>
				</div>
				<div className={styles.nav}>
					<SearchBar />
				</div>
				{currentPath === "/favorites" ? (
					<button
						className={styles.button}
						onClick={handleCleanFavorites}
						disabled={!favorites.length}
					>
						CLEAN FAVS
					</button>
				) : null}
				<button className={styles.button} onClick={props.logout}>
					Logout
				</button>
			</div>
			{/* ) : null} */}
		</div>
	);
};

export default Nav;
