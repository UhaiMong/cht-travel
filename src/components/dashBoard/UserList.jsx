import React, { useEffect } from "react";
import { useGetHotelQuery } from "../../api/hotelSlice";
import toast from "react-hot-toast";

import { GrEdit } from "react-icons/gr";
import { BiHotel } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { BsList } from "react-icons/bs";
import { FaUserAlt, FaUserTie } from "react-icons/fa";
import Loading from "../reusable/Loading";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const domain = "http://api.hilltractstech.com/api/users";

  async function getUsers() {
    try {
      const res = await axios.get(domain);
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  }
  getUsers();

  return (
    <div className="">
      <div className="w-full rounded-lg border border-gray-200 bg-white shadow-lg">
        <div className="font-bold gap-2 h-16 text-lg p-2 rounded-t-md flex items-center bg-gradient-to-r from-[#111827] to-[#4B5563] text-white">
          <FaUserAlt size={20} />
          All Users
        </div>

        <div className="overflow-x-auto p-3">
          <table className="w-full table-auto">
            <thead className="bg-gray-50 text-xs font-bold uppercase text-black">
              <tr>
                <th className="p-2">
                  <div className="text-left font-semibold">ID</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold">Email</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold">Role</div>
                </th>
              </tr>
            </thead>

            {users.length === 0 && <Loading />}
            <tbody className="divide-y divide-gray-100 text-sm">
              {users?.map(({ _id, email, role, i }) => (
                <tr
                  key={i}
                  className="hover:bg-indigo-50 transition rounded-md cursor-pointer"
                >
                  <td className="p-2">
                    <div className="text-black ">{_id}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-black">{email}</div>
                  </td>
                  <td className="p-2">
                    <div className="font-bold">
                      {role && <FaUserTie size={23} />}
                    </div>
                  </td>

                  {/* <td className="p-2">
                    <div className="flex justify-center">
                      <button onClick={() => removeHotel(_id)}>
                        <svg
                          className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td> */}

                  <td className="p-2 flex justify-center items-center space-x-3">
                    {/* {!categories && (
                        <Link to={`hotel/${_id}`}>
                          <AiFillEdit size={23}></AiFillEdit>
                        </Link>
                      )} */}

                    {/* <DeleteHotel id={_id} color="#c00" /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
