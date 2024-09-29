import exp from 'constants';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import { filterInput } from '../atoms/filterInput';
import { todosAtom } from '../atoms/todosAtom';

export const filteredTodos = selector({
    key: 'filteredTodos',
    get: ({ get }) => {
        const todos = get(todosAtom);
        const filter = get(filterInput);
        return todos.filter(
            (todo) => todo.title.toLowerCase().includes(filter.toLowerCase().trim()) || todo.description.toLowerCase().includes(filter.toLowerCase().trim())
        )
    }
})