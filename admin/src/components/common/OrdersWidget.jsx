import { useEffect, useState } from 'react';
import Image from 'next/image';

// API
import API from '../../api';

import { format } from 'date-fns';
import { AccountCircle } from '@mui/icons-material';

const UserItem = ({ id }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await API.getUser(id);
      setUser(res.data);
    };

    fetchUser();
  }, []);

  return (
    <div className="flex items-center gap-3">
      {user && (
        <>
          <div className="text-[#34515f]">
            <AccountCircle className="text-4xl" />
          </div>

          <div>
            <p className="text-sm font-semibold">{user.username}</p>
            <p className="text-gray-500 text-sm font-normal">{user.email}</p>
          </div>
        </>
      )}
    </div>
  );
};

const BookItem = ({ id }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const res = await API.getBook(id);
      setBook(res.data[0]);
    };

    fetchBook();
  }, []);

  return (
    <div className="flex items-center overflow-hidden">
      {book && (
        <>
          <div className="relative h-full w-10">
            <Image src={book.image} layout="fill" objectFit="contain" />
          </div>

          <div className="flex flex-col overflow-hidden">
            <p className="truncate text-sm">{book.title}</p>
            <p className="truncate text-sm font-normal text-gray-500">
              {book._id}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

const OrdersWidget = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        let res = await API.getOrders(true);
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="bg-neutral-100 shadow-lg p-4 min-w-[600px]">
      <h1 className="font-semibold text-lg mb-3 text-secondary">
        Latest New Orders
      </h1>
      <div className="min-w-[600px]">
        <div className="grid grid-cols-[3fr_3fr_1fr_1fr] font-semibold whitespace-nowrap gap-x-5 border-b border-black">
          <div>
            <p>Customer (User)</p>
          </div>
          <div>
            <p>Book</p>
          </div>
          <div>
            <p>Amount</p>
          </div>
          <div>
            <p>Date</p>
          </div>
        </div>

        {orders?.map((item, i) => {
          return (
            <div
              key={i}
              className="grid grid-cols-[3fr_3fr_1fr_1fr] gap-x-5 font-semibold whitespace-nowrap my-2 cursor-pointer hover:bg-neutral-200 rounded-lg p-1"
            >
              <UserItem id={item.userId} />
              <BookItem id={item.bookId} />
              <div className="truncate flex items-center">
                <p className="text-sm font-normal">{item.amount}</p>
              </div>
              <div className="truncate flex items-center">
                <p className="text-sm font-normal">
                  {format(new Date(item.createdAt), 'dd MMM yy')}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrdersWidget;
