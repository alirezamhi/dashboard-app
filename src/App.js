import { useEffect, useState } from 'react';
import Header from './Components/header/Header';
import Loading from './Components/Loading/Loading';
import ShowUser from './Components/ShowUser/ShowUser';

function App() {
  const [istrue, setIsTrue] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsTrue(true)
    }, 1);
  }, [])
  return (
    <div>
      <Header></Header>
      <hr />
      {istrue ? <ShowUser /> : <Loading />}
    </div>
  );
}

export default App;
