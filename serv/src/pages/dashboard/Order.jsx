import React from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Order = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("acessToken");

  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:6001/payments?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  // console.log(orders);

  const formatDate = (createdAt) => {
    const createdAtDate = new Date(createdAt);
    return createdAtDate.toLocaleDateString();
  };

  return (
    <div>
      <div className="relative bg-red-500 h-24 w-full" />
      <div className="max-w-7xl px-32 py-11 flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0">
        <p className="text-red-600 font-bold text-xl md:w-1/2">Cart Items</p>
      </div>

      {/* table content */}
      <div>
        {orders.length > 0 ? (
          <div className="mx-32">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-red-500 text-white ">
                  <tr>
                    <th>#</th>
                    <th>Order Date</th>
                    <th>transitionID</th>
                    <th>Status</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {orders.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td> {formatDate(item.createdAt)}</td>
                      <td>
                        <div className="font-normal">{item.transitionId}</div>
                      </td>
                      <td> {item.status}</td>
                      <th className="font-normal btn "> ₹ {item.price}</th>
                      <th>
                        <Link
                          to="/contact"
                          className="btn btn-ghost btn-sm text-red-500"
                        >
                          Contact
                        </Link>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center mt-20">
            <p>Cart is empty. Please add products.</p>
            <Link to="/">
              <button className="btn bg-green text-white mt-3">
                Back to Home
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;