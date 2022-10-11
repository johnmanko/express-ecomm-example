import express, { Request, Response } from 'express';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/business/product.service';

const router = express.Router();

router.post('/api/products', (req: Request, res: Response) => {

  const content: Product = req.body;

  if (content.id) {
    res.status(500).send('Cannot post an existing product.');
    return;
  }

  let product: Product | null = ProductService.saveProduct(content);

  res.send(product);

});

export { router as ProductPostRouter };
