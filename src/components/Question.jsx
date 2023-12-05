import { useState } from "react"
import QuestionData from "../data/QuestionData";
import { Button } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function Question() {
  const [current, setCurrent] = useState(0);
  const [value, setValue] = useState(50);

  const nextQuestion = () => {
    current === QuestionData.length - 1 ? showResult : setCurrent(current + 1);
    setValue(50);
  }

  return (
    <>
      <p className="text-2xl my-3 text-center">{QuestionData[current].question}</p>
      <div className="flex w-full items-center justify-center my-5">
        <Slider
          size="md"
          value={value}
          onChange={setValue}
          hideValue={true}
          color={value === 50 ? "warning" : value < 50 ? "success" : "danger"}
          step={25}
          marks={[
            {
              value: 25,
              label: "เห็นด้วย",
            },
            {
              value: 50,
              label: "เฉยๆ",
            },
            {
              value: 75,
              label: "ไม่เห็นด้วย",
            },
          ]}
          maxValue={100}
          minValue={0}
          fillOffset={50}
          className="max-w-md"
          formatOptions={{ signDisplay: 'always' }}
        />
      </div>
      {current < QuestionData.length - 1 && <Button onClick={nextQuestion} className="mt-20 px-5 py-3 bg-teal-300 rounded-xl">
        <p className='text-xl'>คำถามถัดไป {">"}</p>
      </Button>}
      {current === QuestionData.length - 1 && 
      <Link to="/result">
        <Button onClick={nextQuestion} className="mt-20 px-5 py-3 bg-teal-300 rounded-xl">
          <p className='text-xl'>ดูผลลัพธ์ {">"}</p>
        </Button>        
      </Link>
      }
    </>
  )
}