import React, { useState } from "react";
import PropTypes from "prop-types";

//include images into your bundle
//create your first component
export function Print() {
	const [todo, setTodo] = useState("");
	const [lista, setLista] = useState(["a"]);
	const addTodo = () => {
		setLista([...lista, todo]);
		setTodo("");
	};
	const removeTodo = content => {
		setLista(lista.filter(e => e !== content));
	};

	return (
		<div>
			<input
				type="text"
				onChange={e => setTodo(e.target.value)}
				placeholder="Enter your To do"
				value={todo}></input>

			<button
				onClick={() => {
					addTodo();
				}}>
				Add
			</button>

			<div className="container">
				<div className="row">
					<div className="col-sm">
						{lista.map(todo => {
							let content = todo;
							return (
								<div key={todo.idx}>
									<li key={todo.idx}>{todo}</li>
									<button
										onClick={e => {
											removeTodo(content);
										}}>
										X
									</button>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

Print.propTypes = {
	items: PropTypes.string
};
