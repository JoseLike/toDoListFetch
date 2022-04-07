import React, { useState } from "react";
import PropTypes from "prop-types";

const Tarea = (props) => {
	const [clase, setClase] = useState("d-none boton float-end");

	return (
		<div className="d-flex tareas">
			<div
				className={"shadow bas tarea border border-secondary ps-5"}
				onMouseOver={() => setClase("d-block boton float-end")}
				onMouseOut={() => setClase("d-none boton float-end")}>
				{props.items}
				<button className={clase} onClick={props.delete}>
					X
				</button>
			</div>
		</div>
	);
};

Tarea.propTypes = {
	items: PropTypes.string,
	delete: PropTypes.func,
};

export default Tarea;
