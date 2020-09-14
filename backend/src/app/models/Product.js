import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        hall: Sequelize.STRING,
        shelf: Sequelize.DECIMAL,
        side: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Product;
