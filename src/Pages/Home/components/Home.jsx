import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableDataList from './TableDataList';
import AddUser from './AddUser';

const Home = () => {
    return (
        <div className=''>
            <div className='w-4/5 mx-auto'>
                <Link to="/users/add" type="button" class="text-white bg-teal-500 hover:bg-teal-600 
                 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-8">
                    Add User
                </Link>
            </div>

            <TableDataList />
        </div>
    );
}

export default Home