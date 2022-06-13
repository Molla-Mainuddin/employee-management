import React from 'react'
import { Link } from 'react-router-dom';
import TableDataList from './TableDataList';

const Home = () => {
    return (
        <div className=''>
            <div className='w-4/5 mx-auto'>
                <Link to="/adduser" type="button" id='mybutton' className="text-white bg-teal-500 hover:bg-teal-600 
                 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-8">
                    Add Employee
                </Link>
            </div>

            <TableDataList />
        </div>
    );
}

export default Home