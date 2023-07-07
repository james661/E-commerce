// Requires all the models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Establishes a relationship with another primary key, specifically the product class belonging to the category class
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
  // onDelete: cascade deletes all records associated with the referenced record
});
// Categories has many Products relationship
Category.hasMany(Product, {
  foreignKey: 'category_id',
  // onDelete: 'CASCADE',
});
// Products belongToMany Tags relationship
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  // onDelete: 'CASCADE',
});
// Tags belongToMany Products relationship
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  // onDelete: 'CASCADE'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
