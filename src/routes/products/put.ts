import express, { Request, Response } from 'express';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/business/product.service';

const router = express.Router();

router.put('/api/products/:id', (req: Request, res: Response) => {

  const content: Product = req.body;
  const id: number = Number.parseInt(req.params.id);

  if (!content.id || id !== content.id) {
    res.status(500).send('Cannot post an existing product.');
    return;
  }

  let product: Product | null = ProductService.saveProduct(content);

  if (!product) {
    res.status(404).send();
  } else {
    res.send(product);
  }

});

export { router as ProductPutRouter };
