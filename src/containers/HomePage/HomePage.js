import './HomePage.css';
import { Button } from '../../components/Button';
import { H1 } from '../../components/H1';
import { List } from '../../components/List';
import { Row } from '../../components/Row';
import { H3 } from '../../components/H3';

const data = [
  {
    id: '1',
    name: 'test name 01'
  },
  {
    id: '2',
    name: 'test name 02'
  },
  {
    id: '3',
    name: 'test name 03'
  },
  {
    id: '4',
    name: 'test name 04'
  }
]
const error = '';
const loading = false;

export const HomePage = () => {
  // const { loading, error, data = [] } = useFetch()
  return (
    <div className="home-container">
      <H1>Car rental</H1>
      {error && <H3 type="error">{error}</H3>}
      {loading && <H3>loading...</H3>}
      {!error && <List items={data}
        renderRow={(item) => <Row key={item.id} item={item} />}
      />}
      <div>
        <Button disabled={error}>Get ✅</Button>
        <Button disabled={error} type='error'>Get ❎</Button>
        <Button disabled={!error}>Retry 🔄</Button>
      </div>
    </div>
  );
}
