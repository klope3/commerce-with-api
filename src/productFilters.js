export const productFilters = [
    {
        name: "characters",
        function: products => [...products].filter(product => product.categories.find(category => category.slug === "characters")),
    }
]