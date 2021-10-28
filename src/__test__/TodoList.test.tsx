
import axios from "axios";
import TodoList from "../components/TodoList"
import { render, waitForElementToBeRemoved, screen } from "./CustomRender"
import { todos } from '../components/Todo';


describe("<App />", () => {
    it("Renders <TodoList /> component", async () => {
        render(<TodoList />);

        await waitForElementToBeRemoved(() => screen.getByText(/fetching todos.../i));

        expect(axios.get).toHaveBeenCalledTimes(1);
        todos.slice(0, 15).forEach((td) => {
            expect(screen.getByText(td.title)).toBeInTheDocument();
        });
    });
});