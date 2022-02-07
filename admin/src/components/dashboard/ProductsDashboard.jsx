import { Delete } from '@mui/icons-material';

import { useState, useEffect } from 'react';

import API from '../../api';

import Image from 'next/image';

const ProductsDashboard = () => {
  const [books, setBooks] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch((prev) => e.target.value);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await API.getBooks();

        setBooks(res.data);
        setFilteredBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    if (search !== '' && books) {
      setFilteredBooks((prev) => {
        return books.filter((book) => {
          return (
            book._id.search(RegExp(search, 'i')) !== -1 ||
            book.title.search(RegExp(search, 'i')) !== -1 ||
            book.author.search(RegExp(search, 'i')) !== -1
          );
        });
      });
    }

    if (search === '' && books) {
      setFilteredBooks((prev) => [...books]);
    }
  }, [search]);

  return (
    <div className="w-full h-full p-4">
      <h1 className=" text-xl text-secondary font-semibold">Products Panel</h1>

      <div className="flex justify-between items-center my-1 max-w-6xl flex-wrap">
        <div className="flex my-2 items-center gap-x-3">
          <h2 className="text-black text-base whitespace-nowrap">
            Quick Search:{' '}
          </h2>

          <div className="border min-w-[200px] py-1 px-2">
            <input
              type="text"
              className="w-full text-sm font-normal outline-none placeholder:text-sm text-primary"
              placeholder="Id, Author, Title..."
              value={search}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <a
          href="https://legible.andrewpham.ca/legible/add-book"
          target="_blank"
        >
          <button className="text-white bg-[#34515f] rounded-full text-sm p-0 h-fit py-2 px-4 hover:scale-[1.02] shadow-md hover:shadow-lg duration-150 ease-out">
            Add new product
          </button>
        </a>
      </div>

      <div className="overflow-hidden h-4/6 max-w-6xl">
        <div className="grid grid-cols-[1fr_5fr_5fr_4fr_2fr_2fr] border border-[#40806b] sticky">
          <div className="flex justify-center items-center">
            <input type="checkbox" name="" id="" />
          </div>

          <div className="border-l pl-3 my-2 flex items-center border-[#40806b]">
            <p className="text-sm font-medium ">ID</p>
          </div>

          <div className="border-l pl-3 my-2 flex items-center border-[#40806b]">
            <p className="text-sm font-medium ">Title</p>
          </div>

          <div className="border-l pl-3 my-2 flex items-center border-[#40806b]">
            <p className="text-sm font-medium ">Author</p>
          </div>

          <div className="border-l pl-3 my-2 flex items-center border-[#40806b]">
            <p className="text-sm font-medium ">Price</p>
          </div>

          <div className="border-l pl-3 my-2 flex items-center border-[#40806b]">
            <p className="text-sm font-medium ">Action</p>
          </div>
        </div>

        <div className="h-full overflow-y-scroll">
          {filteredBooks?.map(({ _id, title, author, price, image }, i) => {
            return (
              <div
                key={i}
                className="grid grid-cols-[1fr_5fr_5fr_4fr_2fr_2fr] border border-t-0 border-[#40806b] h-12"
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
                  <p className="text-sm text-primary truncate">{title}</p>
                </div>

                <div className="pl-3 my-2 flex items-center w-full overflow-hidden">
                  <p className="text-sm font-normal text-primary truncate">
                    {author}
                  </p>
                </div>

                <div className="pl-3 my-2 flex items-center w-full overflow-hidden">
                  <p className="text-sm font-normal text-primary truncate">
                    {price}
                  </p>
                </div>

                <div className="pl-3 my-2 flex items-center">
                  <div className="flex items-center gap-x-1">
                    <button className="text-white text-xs bg-green-500 py-1 px-2 rounded-full shadow-sm hover:scale-105">
                      Edit
                    </button>

                    <Delete className="text-red-500 cursor-pointer hover:scale-105" />
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

export default ProductsDashboard;
