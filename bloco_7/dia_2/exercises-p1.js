const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const nameAndPhone = Object.entries(order);
  const address = Object.entries(nameAndPhone[2][1]);
  const route = Object.entries(nameAndPhone[3][1]);
  const deliveryPerson = Object.entries(route[2][1]);

  return console.log(
    `Olá ${deliveryPerson[0][1]}, entrega para: ${nameAndPhone[0][1]}, Telefone: ${nameAndPhone[1][1]}, ${address[0][1]}, Nº: ${address[1][1]}, AP: ${address[2][1]}`
  );
};

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order['payment']['total'] = 50;
  return console.log(
    `Olá ${order.name}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ ${order['payment']['total']}.`
  );
};

orderModifier(order);

/*
Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  Note que o parâmetro da função já está sendo passado na chamada da função.
Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
  Modifique o nome da pessoa compradora.
  Modifique o valor total da compra para R$ 50,00.
*/
