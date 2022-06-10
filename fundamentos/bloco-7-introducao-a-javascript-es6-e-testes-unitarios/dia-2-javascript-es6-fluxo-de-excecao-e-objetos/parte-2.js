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
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const { deliveryPerson } = order.order.delivery;
  const { name, phoneNumber } = order;
  const { street, number, apartment } = order.address;
  const mesage = `Olá ${deliveryPerson}, entrega para: ${name}, telefone: ${phoneNumber}, R. ${street}, N°: ${number}, AP: ${apartment}`;
  console.log(mesage);
}
customerInfo(order);

const orderModifier = (order) => {
  let { name } = order;
  const { order: {pizza} } = order;
  const { drinks: { coke: {type} } } = order.order;
  let { payment: {total} } = order;
  const pizzas = Object.keys(pizza);
  name = 'Luiz Silva';
  total = 'R$ 50,00';

  const mesage = `Olá ${name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${type} é ${total}.`;
  console.log(mesage);

}
orderModifier(order);