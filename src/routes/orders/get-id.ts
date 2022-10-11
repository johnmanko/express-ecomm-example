import express, { Request, Response } from 'express';
import { Order } from '../../models/order.model';
import OrderService from '../../services/business/order.service';

const router = express.Router();

router.get('/api/orders/:id', (req: Request, res: Response) => {

  const id: number = Number.parseInt(req.params.id);

  let order: Order | null = OrderService.getOrder(id);

  if (!order) {
    res.status(404).send();
  } else {
    res.send(order);
  }

});

export { router as OrderGetIdRouter };
