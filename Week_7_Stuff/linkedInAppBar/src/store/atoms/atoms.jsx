import { atom, selector } from 'recoil';
import axios from 'axios';

export const networkAtom = atom({
    key: 'networkAtom',
    default: selector({
        key: 'networkAtomDefault',
        get: async () => {
            //await new Promise(res => setTimeout(res, 5000));
            const res = await axios.get('http://localhost:3000/')
            return res.data
        },
    })
})