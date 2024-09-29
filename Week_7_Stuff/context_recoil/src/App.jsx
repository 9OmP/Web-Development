import { RecoilRoot, useRecoilState, useRecoilState_TRANSITION_SUPPORT_UNSTABLE, useRecoilValue, useSetRecoilState }from 'recoil';
import { countAtom } from './store/atoms/count'
import { EvenSelector } from './store/selectors/EvenSelector';

function App() {

  return (
    <>
        <RecoilRoot>
            <Count />
        </RecoilRoot> 
    </>
  )
}

function Count(){
    return (
        <>
            <CountRenderer />
            <br />
            <Buttons/>
            <Even />
        </>
    )
}

function CountRenderer(){
    console.log("CountRenderer has rerendered")
    return (
        <div>
            {useRecoilValue(countAtom)}
        </div>
    )
}

function Buttons(){
    const setCount = useSetRecoilState(countAtom);
    console.log("Button has rerendered")
    return (
        <>
            <button onClick={()=>{
                setCount(count => count+1)   
            }}>Increase Count</button>
            <button onClick={()=>{
                setCount(count => count-1)
            }}>Decrease Count</button>
        </>
    )
}

function Even(){
    return useRecoilValue(EvenSelector) ? (<div> Count is even</div>) : null
}


export default App
