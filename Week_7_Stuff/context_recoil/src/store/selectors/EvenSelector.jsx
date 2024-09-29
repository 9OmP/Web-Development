import { selector } from 'recoil';
import { countAtom } from '../atoms/count';

export const EvenSelector = selector({
    key: "EvenSelector",
    get: ({get})=>{
        const count = get(countAtom);
        return count % 2 === 0;
    }
})