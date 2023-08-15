import Cards from './components/Cards/Cards';
import NewDog from './components/NewDog/NewDog';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { fetchDogs, uploadTemperaments } from './redux/actions';
import Presentation from './components/Presentation/Presentation';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchDogs());
    dispatch(uploadTemperaments());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Presentation/>} />
        <Route path="/home" element={<Cards/>} />
        <Route path="/newdog" element={<NewDog/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
