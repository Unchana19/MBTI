import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import ResultData from "../data/ResultData";
import { useEffect, useState } from "react";
import "./Result.css";

export default function Result() {
  const [randomNum, setRandomNum] = useState(0);

  const randomNumberInRange = (min, max) => { 
    return Math.floor(Math.random()  
            * (max - min + 1)) + min; 
  }; 

  const randomIndex = () => { 
    setRandomNum(randomNumberInRange(0, ResultData.length - 1)); 
  }; 

  useEffect(() => {
    randomIndex();
  }, []);
  

  return (
    <>
      <h1 className={`text-5xl text-center text-${ResultData[randomNum].color} mb-5`}>{ResultData[randomNum].type}</h1>
      <p className={`text-center mb-5`}>{ResultData[randomNum].description}</p>
      <img  width="350rem" src={ResultData[randomNum].image} />
      <Link to="/">
        <Button className={`mt-20 px-5 py-3 bg-teal-300 rounded-xl`}>
          <p className='text-xl'>กลับหน้าหลัก</p>
        </Button>
      </Link>
    </>
  )
}