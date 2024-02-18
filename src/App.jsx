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

function App() {
	// ** Estado incial del acceso al login
	const [access, setAccess] = useState(false);
	//** Estado inicial para validar que el usuario este registrado */
	const [datos, setDatos] = useState({});
	// ** Usuario y contraseña autorizado para el ingreso
	const navigate = useNavigate();

	function login(userData) {
		const { email, password } = userData;
		const URL = "http://localhost:3001/rickandmorty/user/login/";
		axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
			const { access } = data;
			// console.log(data);
			setAccess(data);
			access && navigate("/home");
		});
	} // **Función para limpiar las cards de la pantalla
	useEffect(() => {
		!access && navigate("/");
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
			<Nav logout={handleLogout} />
			{/* ) : null} */}
			<Routes>
				<Route
					exact
					path="/"
					element={<Login login={login} datos={datos}></Login>}
				></Route>
				<Route path="/signup" element={<SignUp></SignUp>}></Route>
				<Route path="/home" element={<Cards />}></Route>
				<Route path="/about" element={<About></About>}></Route>
				<Route path="/detail/:id" element={<Detail></Detail>}></Route>
				<Route path="favorites" element={<Favorites></Favorites>}></Route>
			</Routes>
		</div>
	);
}

export default App;
