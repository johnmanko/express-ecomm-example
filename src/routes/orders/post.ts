import express, { Request, Response } from 'express';
import { Order } from '../../models/order.model';
import OrderService from '../../services/business/order.service';

const router = express.Router();

router.post('/api/orders', (req: Request, res: Response) => {

  const products: number[] = req.body;

  if (!products || !products.length) {
    res.status(500).send('Cannot post an existing order.');
    return;
  }

  let order: Order = OrderService.saveOrder(products);

  res.send(order);

});

export { router as OrderPostRouter };
