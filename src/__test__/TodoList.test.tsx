
import axios from "axios";
import TodoList from "../components/TodoList"
import { render, waitForElementToBeRemoved, screen } from "./CustomRender"
import { todos } from '../components/Todo';


describe('<TodoList />', () => {
    it('it <TodoList /> render todos', async () => {
        render(<TodoList />);
        await waitForElementToBeRemoved(() => screen.getByText(/Fetching todos.../i));

        expect(axios.get).toHaveBeenCalledTimes(1);
        todos.slice(0, 15).forEach((td: { title: string }) => {
            expect(screen.getByText(td.title)).toBeInTheDocument();
        })
    })
})