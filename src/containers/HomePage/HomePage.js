import useFetch from 'use-http'

import './HomePage.css';
import { Button } from '../../components/Button';
import { H1 } from '../../components/H1';
import { List } from '../../components/List';
import { Row } from '../../components/Row';
import { H3 } from '../../components/H3';



export const HomePage = () => {
  console.log(process.env.REACT_APP_API_URL)
  const { get, loading, error, data } = useFetch(process.env.REACT_APP_API_URL)
  const receiveData = !!data && data.length; 
  return (
    <div className="home-container">
      <H1>Car rental</H1>
      {error && <H3 type="error">{error.message}</H3>}
      {loading && <H3>loading...</H3>}
      {receiveData && <List items={data}
        renderRow={(item) => <Row key={item.id} item={item} />}
      />}
      <div>
        <Button disabled={error} onClick={() => get('/cars')}>Get ✅</Button>
        <Button disabled={error} onClick={() => get('/invalid')} type='error'>Get ❎</Button>
        <Button disabled={!error} onClick={() => get('/cars')}>Retry 🔄</Button>
      </div>
    </div>
  );
}
