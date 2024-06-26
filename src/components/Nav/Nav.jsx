import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import navImg from "../../assets/img/backgrounds/navImg.png";
import { useLocation, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanFavorites } from "../../redux/actions/actions";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import closeSession from "./../../assets/img/icons/cerrar-sesion.png";
import { IoClose } from "react-icons/io5";

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
		<>
			<nav>
				{
					/*currentPath !== "/" &&*/ currentPath !== "/signup" && (
						<div className={styles.toggleMenuContainer}>
							{isMenuOpen && (
								<IoClose
									id="menuToggle"
									className={styles.menuToggle}
									onClick={handleToggleMenu}
								/>
							)}
							:{" "}
							{!isMenuOpen && (
								<FaBars
									id="menuToggle"
									className={styles.menuToggle}
									onClick={handleToggleMenu}
								></FaBars>
							)}
						</div>
					)
				}
				{/* {currentPath !== "/" && currentPath !== "/signup" ? ( */}
				<div
					className={`${styles.navContainer} ${
						isMenuOpen ? styles.menuToggleShow : ""
					} `}
				>
					{/* Navigation */}
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
							to="/cards"
						>
							Home
						</NavLink>
						<div className={styles.navImgContainer}>
							<NavLink to={"/"}>
								<img src={navImg} className={styles.navImg}></img>
							</NavLink>
						</div>
					</div>
					{/* {currentPath === "/favorites" ? (
						<div className={styles.btnFavoritesContainer}>
							<button
								className={styles.btnFavorites}
								onClick={handleCleanFavorites}
								disabled={!favorites.length}
							>
								CLEAN FAVORITES
							</button>
						</div>
					) : null} */}
					<div className={styles.searchBarContainerPrincipal}>
						<SearchBar />
						<button className={styles.button} onClick={props.logout}>
							<span className={styles.logoutText}>Logout</span>
							<img
								className={styles.logoutIcon}
								src={closeSession}
								alt="cerrar-sesion"
							></img>
						</button>
					</div>
				</div>
				{/* ) : null} */}
			</nav>
		</>
	);
};

export default Nav;
