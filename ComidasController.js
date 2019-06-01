const comidas = {
    pratosFavoritos: [
    {
      nome: "Batata frita",
      descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
      imagem: "img/Batata-frita.jpg"
    },
    {
      nome: "Macarronada",
      descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
      imagem: "img/macarronada.jpg"
    },
    {
      nome: "Falafel",
      descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
      imagem: "img/falafel.jpg"
    },
    {
      nome: "Creme de abóbora",
      descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
      imagem: "img/creme-de-abobora.jpg"
    },
]}

const getAll = () =>{
    return comidas
}

const add = (comida) =>  {
  // gera IDs aleatórios
    comida.id = Math.random().toString(36).substr(-8)
    comidas.pratosFavoritos.push(comida)
}

const remove = (id) => {
 let comidasRestantes = getAll().pratosFavoritos
 
 comidasRestantes.filter((comida) =>{
      return comida !== id
    })
}

module.exports = {
    getAll,
    add,
    remove
}
