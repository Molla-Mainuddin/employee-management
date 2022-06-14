import React from 'react'
import { Link } from 'react-router-dom';
import TableDataList from './TableDataList';

const Home = () => {
    return (
        <div className='pt-12 pb-6 w-full'>
            <div className='w-full pl-1 mx-2 lg:mx-0 lg:pl-40'>
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