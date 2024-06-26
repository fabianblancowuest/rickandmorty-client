import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Login from "./components/Login/Login";
import axios from "axios";
import "./App.css";
import Favorites from "./components/Favorites/Favorites";
import { swalFire3 } from "./sweetAlert";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";

function App() {
	const location = useLocation();
	// ** Estado incial del acceso al login
	const [access, setAccess] = useState(false);
	//** Estado inicial para validar que el usuario este registrado */
	const [datos, setDatos] = useState({});
	// ** Usuario y contraseña autorizado para el ingreso
	const navigate = useNavigate();

	const baseURL = "https://rym-server-u2eg.onrender.com";
	// const baseURL = "http://192.168.0.32:3001";

	function login(userData) {
		// const { email, password } = userData;
		// const URL = `${baseURL}/rickandmorty/user/login/`;
		// axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
		// 	const { access } = data;
		// 	// console.log(data);
		// 	setAccess(data);
		let access = true;
		access && navigate("/");
		// });
	} // **Función para limpiar las cards de la pantalla
	useEffect(() => {
		access && navigate("/");
	}, [access]);

	// ** Función para desloguearse
	function handleLogout() {
		swalFire3().then((result) => {
			if (result.isConfirmed) {
				setAccess(false);
				navigate("/");
			}
		});
	}

	return (
		<div className="App">
			{/* {useLocation().pathname !== "/" ? ( */}
			{location.pathname !== "/" && <Nav logout={handleLogout}></Nav>}
			{/* ) : null} */}
			<Routes>
				{/*<Route
					exact
					path="/"
					element={<Login login={login} datos={datos}></Login>}
				></Route>*/}
				<Route path="/signup" element={<SignUp></SignUp>}></Route>
				<Route exact path="/" element={<Landing></Landing>}></Route>
				<Route path="/cards" element={<Cards />}></Route>
				<Route path="/favorites" element={<Favorites></Favorites>}></Route>
				<Route path="/about" element={<About></About>}></Route>
				<Route path="/detail/:id" element={<Detail></Detail>}></Route>
			</Routes>
		</div>
	);
}

export default App;
