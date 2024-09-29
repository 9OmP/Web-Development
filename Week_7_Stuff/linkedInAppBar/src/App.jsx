import React, { useEffect } from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import { networkAtom } from './store/atoms/atoms';
import { totalNotificationSelector } from './store/selectors/totalNotificationSelector'

function App() {
    
    return (
        <>
            <RecoilRoot>
                <MainApp />
            </RecoilRoot>
        </>
    )
}

function MainApp(){
    const network = useRecoilValue(networkAtom)
    const all = useRecoilValue(totalNotificationSelector);
    return (    
        <>
            <button>Home</button>
            
            <button>My network ({network.network > 100 ? "99+" : network.network})</button>
            <button>Jobs ({network.jobs})</button>
            <button>Messaging ({network.messaging})</button>
            <button>Notifications ({network.notifications})</button>
            
            <button>Me ({all})</button>
        </>
    )
}

export default App
