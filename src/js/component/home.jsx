import React, { useState, useEffect } from "react";
import Tarea from "./tarea.jsx";

//create your first component
const Home = () => {
	const [tarea, setInputs] = useState({ label: "", done: false });
	const [lista, setLista] = useState([]);

	var pendiente = lista.length;
	if (pendiente === 0) {
		pendiente = "No tasks, add a task";
	} else {
		pendiente = lista.length + " items left";
	}

	useEffect(() => {
		getTasks();
	}, []);

	useEffect(() => {
		updateTasks();
	}, [lista]);

	const validacion = (e) => {
		const labels = lista.map((e) => e.label);
		if (e.target.value.trim().length === 0) {
			alert("Tarea no valida (Vacia)");
		} else if (labels.includes(e.target.value.trim()) === true) {
			alert("Tarea no valida (Repetida)");
		} else {
			setLista([...lista, tarea]);
		}
		console.log(lista);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			validacion(event);
			setInputs({ label: "", done: false });
		}
	};
	const clickDelete = (indextarea) => {
		setLista(lista.filter((value, index) => index !== indextarea));
	};

	const getTasks = async () => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/joselike"
		);
		const data = await response.json();
		setLista(data);
	};

	const updateTasks = async () => {
		await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/joselike",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(lista),
			}
		);
	};

	return (
		<div className="d-flex flex-column container align-items-center mx-auto">
			<h1 className="titulo justify-content-center">todos</h1>
			<div className="d-table-row">
				<input
					className="shadow bas"
					id="entradatareas"
					value={tarea.label}
					onKeyDown={handleKeyDown}
					onChange={(e) => {
						setInputs({ label: e.target.value, done: false });
					}}
				/>
				{lista.map((items, index) => {
					return (
						<Tarea
							key={index}
							items={items.label}
							delete={() => {
								clickDelete(index);
							}}
						/>
					);
				})}
				<div className="shadow basico contador border border-secondary ps-2 align-middle">
					{pendiente}
				</div>
				<div className="shadow basico1 border border-dark mx-auto"></div>
				<div className="shadow basico2 border border-secondary mx-auto"></div>
				<div className="shadow basico3 border border-secondary mx-auto"></div>
			</div>
		</div>
	);
};

export default Home;
