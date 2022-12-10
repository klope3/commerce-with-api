// export const sortingFunctions = {
//     alphaAscending: products => [...products].sort((a, b) => a.name > b.name ? 1 : -1),
//     alphaDescending: products => [...products].sort((a, b) => a.name > b.name ? -1 : 1),
// }

export const sortingFunctions = [
    {
        name: "Name (A-Z)",
        function: products => [...products].sort((a, b) => a.name > b.name ? 1 : -1),
    },
    {
        name: "Name (Z-A)",
        function: products => [...products].sort((a, b) => a.name > b.name ? -1 : 1),
    },
    {
        name: "Price (Low to High)",
        function: products => [...products].sort((a, b) => a.price.raw - b.price.raw),
    },
    {
        name: "Price (High to Low)",
        function: products => [...products].sort((a, b) => b.price.raw - a.price.raw),
    },
]