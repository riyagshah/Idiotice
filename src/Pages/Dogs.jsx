import React from "react";
import DogCard from "../Components/DogCard";
import { useEffect } from "react";
import { getshoes } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import {  useLocation, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "../App.css"
const Shoes = () => {
  const data = useSelector((state) => state.appreducer.shoes);
 
  //const [searchParams] = useSearchParams();
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    
      // const sortBy = searchParams.get("sortBy");
 
     
 if(!data.length)
 {
  dispatch(getshoes())
  
 }




    
  }, [data.length,dispatch]);
  return (
    <div>
    
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px"}}
    >
      {data.map((item,index) => (
   
  
 
    <Link key={uuidv4()} to={`/dogs/${item}`}>
           <DogCard item={item} index={index} />
         </Link>

        
     ))} 
    </div>
    </div>
  );
};

export default Shoes;





