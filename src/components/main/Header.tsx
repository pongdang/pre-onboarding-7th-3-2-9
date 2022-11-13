import styled from '@emotion/styled';

export function Header({ title }: { title: string }) {
  return <Container>{title}</Container>;
}

const Container = styled.header`
  background-color: skyblue;
`;
