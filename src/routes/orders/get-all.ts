import express, { Request, Response } from 'express';
import OrderService from '../../services/business/order.service';

const router = express.Router();

router.get('/api/orders', (req: Request, res: Response) => {

  let page: number = (req.query.page) ? Number.parseInt(<string>req.query.page) : 1;

  res.send(OrderService.getOrders(page));

});

export { router as OrderGetAllRouter };
