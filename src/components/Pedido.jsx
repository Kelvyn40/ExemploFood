import {useState} from 'react'

//Array de objetos contendo o estado inicial do cardapio 
const cardapio=[
    {id: 1,nome:"combo-01",preco:25.00,disponivel:true,quantidade:0},
    {id: 2, nome:"combo-02",preco:35.00,disponivel:true,quantidade:0 },
    {id: 3, nome:"combo-03",preco:45.00,disponivel:false,quantidade:0 },
    {id: 4, nome:"combo-04",preco:55.00,disponivel:true,quantidade:0 },

];

const Pedido = () => {

    // Hook-useState-Manipula o estado da variavel
    //Estados para gerenciar a lista de items 
    const[items,setItems]=useState(cardapio);
    const[status,setStatus]=useState();
    const[enviar,setEnviar]=useState(false);

    //Valor fixo adicionado ao total quando tiver items no carrinho 
    const taxaEntrega=5.00;

    //função que altera a quantidade de um pedido
    const alterarQuantidade =(id,valor)=>{
        //usa a função updater para garantir o valor mais recente do estado
        setItems(prev=>
            //MAP: percorrer a lista para criar um NOVO array sem modificar
            //o original(imutabilidade)
            prev.map(item=>
                //TERNARIO: verifica se o item da iteração atual é o que deve ser alterado
                // SPRED (...item) :copia as propiedades do item e atualiza apenas a quantidade manento o resto
                //Math.max : garante que a quantidade nunca seja menor que 0
                //item: retorna o item intacto caso id não corresponda 
                item.id===id ? {...item,quantidade: Math.max(0,item.quantidade + valor)}:item
            )
            )
    }


  return (
    <>
      
    </>
  )
}

export default Pedido
