import styled from 'styled-components'

const Header = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 24px 0;
`
const Title = styled.h1`
  text-align: center;
`
function Cabecalho() {
  return (
    <Header>
      <Title>EBAC Jobs</Title>
    </Header>
  )
}

export default Cabecalho
