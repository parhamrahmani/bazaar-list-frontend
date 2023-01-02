import { deleteProduct } from './path/to/component'

describe('deleteProduct', () => {
  it('deletes a product with the given id', () => {
    // Set up the test by creating some mock products
    const products = [
      { id: 1, productName: 'Apple', brand: 'Gala', category: 'Fruit' },
      { id: 2, productName: 'Banana', brand: 'Cavendish', category: 'Fruit' },
      { id: 3, productName: 'Carrot', brand: 'Nantes', category: 'Vegetable' }
    ]

    // Call the deleteProduct function with an id
    deleteProduct(2, products)

    // Assert that the product with id 2 has been removed from the array
    expect(products).toEqual([
      { id: 1, productName: 'Apple', brand: 'Gala', category: 'Fruit' },
      { id: 3, productName: 'Carrot', brand: 'Nantes', category: 'Vegetable' }
    ])
  })
})