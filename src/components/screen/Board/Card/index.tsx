import * as S from "./styles";

export default function Card() {
  return (
    <S.Container draggable="true">
      <header>
        <S.Status />
      </header>
      <p>Recriando clone do Pipefy</p>
    </S.Container>
  );
}
