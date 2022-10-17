<<<<<<< HEAD
import Header from './components/header/Header';
import ShowUser from './components/ShowUser/ShowUser';
=======
import { useEffect, useState } from 'react';
import Header from './Components/header/Header';
import Loading from './Components/Loading/Loading';
import ShowUser from './Components/ShowUser/ShowUser';
>>>>>>> 8fc980228c17cf3fa4d093190aee5d5e0ef5bc8e

function App() {
  const [istrue,setIsTrue]=useState(false)
  useEffect(()=>{
    setTimeout(() => {
      setIsTrue(true)
    }, 3000);
  },[])
  return (
    <div>
      <Header></Header>
      <hr />
      {istrue?<ShowUser/>:<Loading/>}
      
    </div>
  );
}

export default App;
