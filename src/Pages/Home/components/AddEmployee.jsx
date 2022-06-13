import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
    const[employeeData, setEmployeeData] = useState({
        id: "",
        name: "",
        gender: "",
        age: "",
        salary: ""
    });
    // console.log(employeeData);
    const onInputChange = (event)=>{
        setEmployeeData({ ...employeeData, [event.target.name]:event.target.value });
    };
    const {id,name,gender,age,salary} = employeeData;

    const onSubmit = async (event)=>{
        event.preventDefault();
        const res = await axios.post("/employees",employeeData);
        if(res.status===200){
            setEmployeeData({
                id: "",
                name: "",
                gender: "",
                age: "",
                salary: ""
            })
        }
    }

    return (
        <div className=''>
            {/* For Back to home button */}
            <div className='mt-8 w-4/5 mx-auto'>
                <Link to="/" type="button" className="text-white bg-teal-500 hover:bg-teal-600 
                 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
                    <span className='flex items-center space-x-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                        </svg>
                        <p>Back to Home</p>
                    </span>
                </Link>
            </div>
            <form className='flex justify-center' onSubmit={(event)=> onSubmit(event)}>
                <div className="border p-6 w-full max-w-lg rounded-lg shadow-lg">
                    {/* For Employee Id */}
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3">
                            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Employee Id
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                                focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="id"
                                name='id' 
                                type="number"
                                required
                                value={id}
                                onChange={ onInputChange } 
                            />
                        </div>
                    </div>
                    {/* For Employee name */}
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3">
                            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Employee Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white 
                                focus:border-gray-500" 
                                id="name" 
                                type="text"
                                name="name"
                                required
                                value={name}
                                onChange={ onInputChange } 
                            />
                        </div>
                    </div>
                    {/* For gender */}
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3">
                            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Gender
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
                                rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="gender"
                                name='gender' 
                                type="text"
                                required
                                value={gender}
                                onChange={ onInputChange } 
                            />
                        </div>
                    </div>
                    {/* For age */}
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3">
                            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Age
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
                                rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="age"
                                name="age" 
                                type="text"
                                required
                                value={age}
                                onChange={ onInputChange } 
                            />
                        </div>
                    </div>
                    {/* For Salary */}
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3">
                            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Salary
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
                                rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="salary" 
                                name="salary"
                                type="number"
                                required
                                value={salary}
                                onChange={ onInputChange } 
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <input className="shadow bg-teal-400 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white 
                                font-bold py-2 px-4 rounded cursor-pointer" 
                                type="submit"
                                value="Add" 
                            />
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddUser