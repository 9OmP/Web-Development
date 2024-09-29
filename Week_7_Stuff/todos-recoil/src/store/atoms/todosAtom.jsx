import { atom } from 'recoil';

export const todosAtom = atom({
    key: 'todos',
    default: [{
        id: 1,
        title: 'Task1',
        description: 'Description1'
    },{
        
        id: 2,
        title: 'Task2',
        description: 'Description2'
    }
    ],
})