import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
const TrackOrder = () => {
  const { trackingNumber } = useParams();
  const [orderData, setOrderData] = useState([
    {
      eventDescription: "Order Confirmed",
      city: "Khilkhet",
    },
    {
      eventDescription: "Order Shipped",
      city: "Rajshahi",
    },
    {
      eventDescription: "Order Delivered",
      city: "khilkhet",
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="m-10">
        <div className="flex flex-col items-center mb-10">
            <title>courier</title>
         
          <p className="text-black font-semibold mt-3">
            Tracking Number: {trackingNumber}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative text-black-50">
            {orderData.map((item, index) => (
              <li key={index} className="mb-10 ms-6 list-none">
                <span
                  className="absolute flex items-center justify-center w-8 h-8 
							bg-black-100 rounded-full -start-4 ring-4 ring-black"
                >
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight ml-2">
                  {item.eventDescription}
                </h3>

                <p className="text-sm ml-3">Shippment scanned at {item.city}</p>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
