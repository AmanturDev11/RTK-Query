import { api as index } from "..";
import { CRUD } from "./types";

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getTodos: builder.query<CRUD.GetCrudResponse, CRUD.GetCrudRequest>({
			query: () => ({
				url: "",
				method: "GET",
			}),
			providesTags: ["crud"],
		}),

		createTodo: builder.mutation<
			CRUD.CreateCrudResponse,
			CRUD.CreateCrudRequest
		>({
			query: ({ firstName, lastName }) => ({
				url: "",
				method: "POST",
				body: { firstName, lastName },
			}),
			invalidatesTags: ["crud"],
		}),
	}),
});
export const { useGetTodosQuery, useCreateTodoMutation } = api;
