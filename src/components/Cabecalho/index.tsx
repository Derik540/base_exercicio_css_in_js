import styled from 'styled-components'

const Header = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`
function Cabecalho() {
  return (
    <Header>
      <h1>Jobs HUB</h1>
    </Header>
  )
}

export default Cabecalho
