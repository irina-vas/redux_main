import './App.css';
import React, { useState, useEffect} from 'react';
import * as axios from 'axios';
import Functional from './components/Functional';
import Button from './components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { actionGet } from './actions';


function App() {

  const [btnOn, setBtnOn] = useState(true);
  const url = 'https://jsonplaceholder.typicode.com/users';

  const dispatch = useDispatch();
  const users = useSelector((state => state.users));

  console.log(users)

  const getUsers = (data) => {
    dispatch(actionGet(data))
  }


  
  useEffect(() => {
    axios.get(url)
        .then(response => response)
        .then(data => {
          getUsers(data.data);
        }).catch(error => console.error(error))
  }, []);
  
  


    let btnHandler = () => {
        setBtnOn(false);
    }



  return (
      <div className="App">
        {btnOn
          ? (<div><Button btnHandler={btnHandler} /></div>)
          : (<div><Functional /></div>)
        }
      </div>

  );
}

export default App;