import React, {useState, useContext} from 'react';
import ContextUsers from './ContextUsers';
import  './Functional.css';
import { useDispatch, useSelector } from 'react-redux';


function Functional() {
    // const users = useContext(ContextUsers)
    const dispatch = useDispatch();
    const users = useSelector(state =>  state.users);
    console.log(users)
    return (
        <div>
            <div className="wrapper">
                {users.map((item, index) => {
                    return (
                        <div className="card">
                            <h2 className="name">{item.name}</h2>
                            <p className="userName">user name: {item.username}</p>
                            <div className="adress">adress:
                                <span className="city">{' ' +item.address.city}, </span>
                                <span className="suite">{item.address.suite}</span>
                            </div>
                            <p className="company">working in {item.company.name}</p>
                            <div className="contacts">
                                <span>contacts: </span>
                                <span>{item.email}, </span>
                                <span>{item.phone}</span>
                            </div>
                        </div>
                    )
                })}

            </div>
            {/* <button>GET INFORMATION</button> */}
        </div>


    );
}

export default Functional;