import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const TableDataList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const res = await axios.get("/employees");
        setUsers(res.data);
    }

    const deleteEmployee = async (id) => {
        // document.getElementById("deleteMessage").innerHTML="deleting...";
        const res = await axios.delete(`/employees/${id}`);
        if (res.status === 200) {
            swal({
                title: "Data Deleted Successfully !",
                text: "",
                icon: "success",
                button: "OK!",
            });
        }
        loadUsers();
    }

    return (
        <div className="w-[90%] overflow-x-auto border shadow-md mx-auto lg:w-4/5 ">
            <table className="w-full text-base text-left text-gray-500">
                <thead className="text-xs text-gray-50 uppercase bg-gray-600">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            SL No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Employee Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Employee Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Age
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Salary
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 && <p className='p-4 text-gray-800'>Loading...</p>}
                    {
                        users.length > 0 && (users.map((user, index) => (

                            <tr className="border-b  odd:bg-white even:bg-gray-100">
                                <th scope='row' className="px-6 py-4">
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">
                                    {user.id}
                                </td>
                                <td className="px-6 py-4">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4">
                                    {user.gender}
                                </td>
                                <td className="px-6 py-4">
                                    {user.age}
                                </td>
                                <td className="px-6 py-4">
                                    {user.salary}
                                </td>
                                <td className="px-6 py-4 flex items-center space-x-2">
                                    <Link to={`/edit/${user.id}`} className="font-medium text-blue-500 hover:underline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                    <button className="font-medium text-red-500 flex space-x-1 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => deleteEmployee(user.id)} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {/* <p id='deleteMessage' className='text-sm'></p> */}
                                    </button>
                                </td>
                            </tr>
                        )))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableDataList