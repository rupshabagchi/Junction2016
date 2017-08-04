const Contract = require('../lib/blockchain/contract');
const Express = require('express');
const Router = Express.Router();

Router.get('/', (req, res) => {
  // const events = [
  //   { header: 'Test header', body: 'Test body', footer: 'Test footer' },
  //   { header: 'Test header', body: 'Test body', footer: 'Test footer' },
  //   { header: 'Test header', body: 'Test body', footer: 'Test footer' },
  //   { header: 'Test header', body: 'Test body', footer: 'Test footer' },
  //   { header: 'Test header', body: 'Test body', footer: 'Test footer' },
  //   { header: 'Test header', body: 'Test body', footer: 'Test footer' },
  //   { header: 'Test header', body: 'Test body', footer: 'Test footer' },
  //   { header: 'Test header', body: 'Test body', footer: 'Test footer' },
  // ];

  res.render('index', { title: 'Express', events: [] });
});

Router.post('/orders', (req, res) => {
  const newOrderId = Contract.newOrder({ from: '' });
  Contract.setOrdered(newOrderId);

  res.redirect(`/orders/${newOrderId}`);
});

Router.get('/orders/:orderId', (req, res) => {
  const order = {
    ordered: Contract.getOrdered(req.orderId),
    queuedForProduction: Contract.getForProd(req.orderId),
    produced: Contract.getProd(req.orderId),
    readyToShip: Contract.getReadyToShip(req.orderId),
    shipped: Contract.getShipped(req.orderId)
  };

  res.render('order', { order: order });
});

module.exports = Router;
