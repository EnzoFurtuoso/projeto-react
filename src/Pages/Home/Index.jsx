import { useRef, useState } from 'react'
import { v4 } from 'uuid'

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
    <div>
      <h1>Lista de Compras</h1>
      <input type="text" placeholder='produto...' ref={inputRef} />
      <button onClick={cliqueNoBotao}>Adicionar</button>

      {produtos.map((produto) => (
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <button onClick={() => deletarProduto(produto.id)}>🗑️</button>
        </div>
      ))}

    </div>
  )
}

export default Home
