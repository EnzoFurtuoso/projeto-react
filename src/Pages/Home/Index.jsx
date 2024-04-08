import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Produto, DeleteButton } from './styles'

// React Hooks
// useRef
// useState / estado -> é uma variável, que, toda vez que troca o valor a tela irá "recarregar os valores"

function Home() {

  const [produtos, setProdutos] = useState([])

  const inputRef = useRef() 


  function cliqueNoBotao() {

    setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos])  
    
    inputRef.current.value = ''

  }

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input type="text" placeholder='produto...' ref={inputRef} />
      <AddButton onClick={cliqueNoBotao}>Adicionar</AddButton>

      {produtos.map((produto) => (
        <Produto key={produto.id}>
          <p>{produto.nome}</p>
          <DeleteButton onClick={() => deletarProduto(produto.id)}>🗑️</DeleteButton>
        </Produto>
      ))}

    </Container>
  )
}

export default Home
