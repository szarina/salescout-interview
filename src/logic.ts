// Implement a function which takes an array of Product and returns unique products sorted by price

type Product = {
    name: string;
    price: number;
};


function filterAndSortProducts(products: Product[]): Product[] {

    const uniqueProducts = products.filter((product: Product, index: number) => {
        return products.findIndex((p: Product) => p.name === product.name) === index
    })

    const sortedProducts = uniqueProducts.sort((
        a: Product,
        b: Product
    ) => {
        return a.price - b.price
    })
    return  sortedProducts;

}

module.exports = { filterAndSortProducts }