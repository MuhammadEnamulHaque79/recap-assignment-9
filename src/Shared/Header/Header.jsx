import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       
            <div className="navbar bg-pink-500">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl text-white">Dream Hub</a>
                </div>
                <div className="flex-none">
                   
                    <div className="start-end flex">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                          
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                       
                    </div>
                </div>
            </div>
    
    );
};

export default Header;