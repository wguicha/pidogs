import './App.css';
import Cards from './components/Cards/Cards';
import NewDog from './components/NewDog/NewDog';
import Nav from './components/Nav/Nav'
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from 'react-router-dom';
import { fetchDogs, uploadTemperaments } from './redux/actions';

function App() {

  let location = useLocation();
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchDogs());
    dispatch(uploadTemperaments());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

 // onSearch={onSearch} onRandom={onRandom} onClear={onClear}
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home" element={<Cards/>} />
        <Route path="/newdog" element={<NewDog/>} />
      </Routes>
    </div>
  );
}

export default App;
