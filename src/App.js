import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Loading from './components/Loading/Loading';
import ShowUser from './components/ShowUser/ShowUser';

function App() {
  const [istrue, setIsTrue] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsTrue(true)
    }, 3000);
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
