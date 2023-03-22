import Card from '../Card';
import { Container } from './styles';

export const List = () => {
  return (
    <Container>
      <header>
        <h2>Tarefas</h2>
        {/* {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#FFF" />
          </button>
        )} */}
      </header>

      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}
