import { todos } from '../../components/Todo';

export default {
    get: jest.fn().mockImplementation((url) => {
        switch (url) {
            case "https://jsonplaceholder.typicode.com/todos":
                return Promise.resolve({ data: todos });
            default:
                throw new Error(`UNMATCHED URL: ${url}`);
        }
    })
}