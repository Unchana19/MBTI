import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Question from './components/Question';
import Result from './components/Result';
import NotFound from './components/NotFound';
import { Card, CardBody } from "@nextui-org/react";

function App() {
  return (
    <HashRouter>
      <div className='w-screen h-screen bg-slate-950 flex flex-col justify-center items-center'>
        <Card className='h-5/6 w-11/12 bg-teal-100 rounded-3xl drop-shadow-[0_0_1.5rem_rgba(150,150,255,.25)]'>
          <CardBody className='flex flex-col items-center justify-center'>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/quiz" element={<Question />}></Route>
              <Route path="/result" element={<Result />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </CardBody>
        </Card>
      </div>
    </HashRouter>
  )
}

export default App
