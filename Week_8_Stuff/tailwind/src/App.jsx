import { RevenueCard, RevenueCardSecondary } from './components/RevenueCard';
import './index.css'; 

function App() {
    return (
        <div className='grid grid-cols-4 p-4 '>
            <RevenueCard title={"Next Payout"} amount={"2,312.23"} order_count={23} />
            <RevenueCardSecondary  />
        </div>
    )
    }

export default App
