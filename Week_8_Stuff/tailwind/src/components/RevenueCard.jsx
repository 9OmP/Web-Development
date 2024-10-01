export const RevenueCard = ({
    title,
    order_count,
    amount  
}) =>{
    return (
        <div className="flex flex-col rounded-[8px] shadow hover:bg-[#0E4F82] bg-[#146EB4]">
            <div className=" p-3 ">
                <div className="flex gap-2 text-white">
                {title}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
                </div>
                <div className="flex justify-between">
                    <div className="text-3xl font-medium text-white">
                    ₹ {amount}
                    </div>
                    <div className="flex text-white underline font-medium">
                        {order_count ? <div>{order_count} order(s)</div> : null}  
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>
                    </div>
                </div>
            </div>
            <div className="rounded-[8px] bg-[#0E4F82] flex justify-between p-3 text-white">
                    <p>Next Payment Date:</p>
                    <p>Today, 4:00pm</p>
            </div>
        </div>
    )
}


export const RevenueCardSecondary = ({
    title,
    order_count,
    amount  
}) =>{
    return (
        <div className="flex flex-col rounded-[8px] shadow hover:bg-[#0E4F82] bg-[#146EB4]">
            <div className=" p-3 ">
                <div className="flex gap-2 text-white">
                {title}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
                </div>
                <div className="flex justify-between">
                    <div className="text-3xl font-medium text-white">
                    ₹ {amount}
                    </div>
                    <div className="flex text-white underline font-medium">
                        {order_count ? <div>{order_count} order(s)</div> : null}  
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>
                    </div>
                </div>
            </div>
            <div className="rounded-[8px] bg-[#0E4F82] flex justify-between p-3 text-white">
                    <p>Next Payment Date:</p>
                    <p>Today, 4:00pm</p>
            </div>
        </div>
    )
}