import Product from '../models/Product';

class ProductController {
  async store(req, res) {
    const productExists = await Product.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (productExists) {
      return res.status(400).json({ error: 'Product already exists!' });
    }

    const { id, name, hall, shelf, side } = await Product.create(req.body);

    return res.json({ id, name, hall, shelf, side });
  }

  async index(req, res) {
    const products = await Product.findAll({
      attributes: ['id', 'name', 'hall', 'shelf', 'side'],
    });

    return res.json(products);
  }
}

export default new ProductController();
