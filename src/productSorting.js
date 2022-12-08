export const sortingFunctions = {
    alphaAscending: products => [...products].sort((a, b) => a.name > b.name ? 1 : -1),
    alphaDescending: products => [...products].sort((a, b) => a.name > b.name ? -1 : 1),
}