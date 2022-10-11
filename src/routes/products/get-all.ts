import express, { Request, Response } from 'express';
import { ProductService } from '../../services/business/product.service';

const router = express.Router();

router.get('/api/products', (req: Request, res: Response) => {

  let page: number = (req.query.page) ? Number.parseInt(<string>req.query.page) : 1;

  res.send(ProductService.getProducts(page));

});

export { router as ProductGetAllRouter };
