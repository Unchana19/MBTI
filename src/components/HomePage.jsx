import { Link } from "react-router-dom";
import mbti_picture from "../assets/mbti.png"
import { Button } from "@nextui-org/react";

export default function HomePage() {
  return (
    <>
      <h1 className='text-5xl text-center mb-5'>รู้จักตัวตนของคุณ</h1>
      <p className='text-center mb-5'>สร้างความสัมพันธ์ที่ดีกับคนรอบข้างด้วยการรู้จักตัวตนของพวกเขา</p>
      <img src={mbti_picture} />
      <Link to="/quiz">
        <Button className="mt-20 px-5 py-3 bg-teal-300 rounded-xl">
          <p className='text-xl'>เริ่มทำแบบทดสอบ</p>
        </Button>
      </Link>
    </>
  )
}