import Board from "./Container";
import Header from "../../layouts/Header";
import { Background } from "./styles";

export const BoardScreen = () => {
  return (
    <Background>
      <Header />
      <Board />
    </Background>
  );
}

