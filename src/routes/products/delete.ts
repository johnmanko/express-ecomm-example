import express, { Request, Response } from 'express';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/business/product.service';

const router = express.Router();

router.delete('/api/products/:id', (req: Request, res: Response) => {

  const id: number = Number.parseInt(req.params.id);

  let product: Product | null = ProductService.deleteProduct(id);

  if (!product) {
    res.status(404).send();
  } else {
    res.send(product);
  }

});

export { router as ProductDeleteIdRouter };
