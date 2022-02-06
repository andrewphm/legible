import { Visibility } from '@mui/icons-material';
import { useState, useEffect } from 'react';

import API from '../../api';

const OrdersDashboard = () => {
  const [orders, setOrders] = useState(null);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch((prev) => e.target.value);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await API.getOrders();

        setOrders(res.data);
        setFilteredOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    if (search !== '' && orders) {
      setFilteredOrders((prev) => {
        return orders.filter((order) => {
          return (
            order._id.search(search) !== -1 ||
            order.userId.search(search) !== -1 ||
            order.bookId.search(search) !== -1
          );
        });
      });
    }

    if (search === '' && orders) {
      setFilteredOrders((prev) => [...orders]);
    }
  }, [search]);

  return (
    <div className="w-full h-full p-4">
      <h1 className=" text-xl text-secondary font-semibold">Orders Panel</h1>

      <div className="flex my-2 items-center gap-x-3">
        <h2 className="text-black text-base whitespace-nowrap">
          Quick Search:{' '}
        </h2>

        <div className="border min-w-[200px] py-1 px-2">
          <input
            type="text"
            className="w-full text-sm font-normal outline-none placeholder:text-sm text-primary"
            placeholder="Id, Book Id, User Id..."
            value={search}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="max-w-5xl h-4/5 overflow-hidden">
        <div className="grid grid-cols-[1fr_5fr_5fr_5fr_2fr_2fr] border border-[#40806b] sticky">
          <div className="flex justify-center items-center">
            <input type="checkbox" name="" id="" />
          </div>

          <div className="border-l pl-3 my-2 flex items-center border-[#40806b]">
            <p className="text-sm font-medium ">ID</p>
          </div>

          <div className="border-l pl-3 my-2 flex items-center border-[#40806b]">
            <p className="text-sm font-medium ">Customer ID</p>
          </div>

          <div className="border-l pl-3 my-2 flex items-center border-[#40806b]">
            <p className="text-sm font-medium ">Book ID</p>
          </div>

          <div className="border-l pl-3 my-2 flex items-center border-[#40806b]">
            <p className="text-sm font-medium ">Amount</p>
          </div>

          <div className="border-l pl-3 my-2 flex items-center border-[#40806b]">
            <p className="text-sm font-medium ">Action</p>
          </div>
        </div>

        <div className="h-full overflow-y-scroll">
          {filteredOrders?.map(({ _id, bookId, userId, amount }, i) => {
            return (
              <div
                key={i}
                className="grid grid-cols-[1fr_5fr_5fr_5fr_2fr_2fr] border border-t-0 border-[#40806b]"
              >
                <div className="flex justify-center items-center">
                  <input type="checkbox" name="" id="" />
                </div>

                <div className="pl-3 my-2 flex items-center w-full overflow-hidden">
                  <p className="text-sm font-normal text-primary truncate">
                    {_id}
                  </p>
                </div>

                <div className="pl-3 my-2 flex items-center w-full overflow-hidden">
                  <p className="text-sm text-primary truncate">{userId}</p>
                </div>

                <div className="pl-3 my-2 flex items-center w-full overflow-hidden">
                  <p className="text-sm font-normal text-primary truncate">
                    {bookId}
                  </p>
                </div>

                <div className="pl-3 my-2 flex items-center w-full overflow-hidden">
                  <p className="text-sm font-normal text-primary truncate">
                    {amount}
                  </p>
                </div>

                <div className="pl-3 my-2 flex items-center">
                  <div className="flex items-center gap-x-1">
                    <button className="text-white text-xs flex items-center bg-green-500 py-1 px-2 rounded-full shadow-sm hover:scale-105">
                      <Visibility className="text-sm mr-1" />
                      View
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrdersDashboard;
