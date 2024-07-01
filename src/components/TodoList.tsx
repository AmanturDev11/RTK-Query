import { useEffect, useState } from "react";
import { useCreateTodoMutation, useGetTodosQuery } from "../redux/api/crud";

const TodoList = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const { data, isLoading } = useGetTodosQuery();
	const [createTodo] = useCreateTodoMutation();
	console.log(data);

	const addTodo = async () => {
		await createTodo({ firstName, lastName });
	};

	useEffect(() => {
		addTodo();
	}, []);

	return (
		<div>
			<input
				type="text"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<input
				type="text"
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>
			<button onClick={addTodo}>Add</button>
			{isLoading ? (
				<>
					<h1>Loading...</h1>
				</>
			) : (
				<>
					{data?.map((item) => (
						<div key={item._id}>
							<h1>{item.firstName}</h1>
							<h1>{item.lastName}</h1>
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default TodoList;
