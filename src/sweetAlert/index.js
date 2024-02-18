import Swal from "sweetalert2";

const img =
	"https://s.yimg.com/ny/api/res/1.2/ERF8gU34MVP46JXFYeTvQQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/cinemablend_388/4cea827a41d7c66770e144612647cf50";

const swalFire1 = () => {
	return Swal.fire({
		title: "¡ID no válido!",
		color: "red",
		text: "Debe ingresar un ID entre 1 y 826",
		imageUrl: img,
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: "Wrong ID",
	});
};

const swalFire2 = () => {
	return Swal.fire({
		title: "¿Estás seguro?",
		text: "¡No podrás revertir esto!",
		icon: "warning",
		showCancelButton: true,
		cancelButtonText: "Cancelar",
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "¡Si, limpiala!",
	});
};

const swalFire3 = () => {
	return Swal.fire({
		title: "Are you sure you want to log out?",
		showDenyButton: true,
		confirmButtonColor: "green",
		denyButtonText: "No, cancel.",
		// showCancelButton: true,
		confirmButtonText: "Yes, log out.",
		// denyButtonText: `Don't save`,
	});
};

export { swalFire1, swalFire2, swalFire3 };
