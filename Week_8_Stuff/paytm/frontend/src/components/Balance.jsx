import axios from "axios";
import { useEffect, useState } from "react";

export const Balance = () => {
  // Move useState inside the component function
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    axios
      .request({
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/v1/account/balance',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setAmount(response.data.balance);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-4 text-lg">
        Rs {amount ? amount : 'Loading...'}
      </div>
    </div>
  );
};
