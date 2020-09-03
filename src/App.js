import React, { useState, useEffect } from 'react';
import Header from './component/Header/Header.js'
import './App.css';
import Cart from './component/Cart/Cart.js';
import courseInfo from './Course-data/data.js';
import Select from './component/Select/Select.js';


function App() {

    const [courses, setCourses]= useState([])
    const [carts, setCart]= useState([])
    useEffect(()=>{
       setCourses(courseInfo)
       console.log(courseInfo)
    }, []);
    
    const handleCourse = (course)=>{
        const newCart = ([...carts , course]);
        setCart(newCart)
    }

  return (
    <div >
       <Header></Header>
       <div style={{display: "flex"}}>
     <div>
            {
             courses.map( course => <Select crs={course} handleCourse={handleCourse} key={course.id}></Select>)   
            }
    </div>
    <div>
    <Cart cart={carts}></Cart>
    </div>
    </div>
    </div>
  );
}

export default App;
