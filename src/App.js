import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Loading } from './components/Loading';
import { DataTable } from './components/DataTable';

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
      {istrue ? <DataTable /> : <Loading />}
    </div>
  );
}

export default App;
