import React, { useState, useEffect } from "react";
import Tarea from "./tarea.jsx";

//create your first component
const Home = () => {
	const [tarea, setInputs] = useState({ label: "" });
	const [lista, setLista] = useState([]);

	var pendiente = lista.length;
	if (pendiente === 0) {
		pendiente = "No tasks, add a task";
	} else {
		pendiente = lista.length + " items left";
	}

	const validacion = () => {
		const labels = lista.map((item) => {
			return item.label;
		});
		if (tarea.trim().length === 0) {
			alert("Tarea no valida (Vacia)");
		} else if (labels.includes(tarea.label) === true) {
			alert("Tarea no valida (Repetida)");
		} else {
			setLista([...lista, { label: tarea }]);
			setInputs("");
		}
		console.log(lista);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			validacion();
		}
	};
	const clickDelete = (indextarea) => {
		setLista(() => lista.filter((value, index) => index !== indextarea));
	};

	useEffect(() => {
		getTasks();
	}, []);

	const getTasks = async () => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/joselike"
		);
		const data = await response.json();
		{
			data.map((element) => {
				return setLista([...lista, { label: element.label }]);
			});
		}
	};

	return (
		<div className="container d-flex-inline justify-conttent-center flex-column">
			<h1 className="row text-center">todos</h1>
			<div className="d-table-row">
				<input
					className="shadow bas"
					id="entradatareas"
					value={tarea.label}
					onKeyDown={handleKeyDown}
					onChange={(e) => {
						setInputs(e.target.value);
					}}
				/>
				{lista.map((items, index) => {
					return (
						<Tarea
							key={items.index}
							items={items.label}
							delete={() => {
								clickDelete(index);
							}}
						/>
					);
				})}
				<div className="shadow basico contador border border-secondary ps-2">
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
