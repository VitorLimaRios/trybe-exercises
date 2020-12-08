// faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maca', 'maca verde', 'existe outro tipo de maca?'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['file mignon', 'salmao', 'carbonara :)'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
