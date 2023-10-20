export const getProducts = async() => {
    const response = await fetch("https://amarketapi.onrender.com/api/products")
        .then(res => res.json())

    const { products } = response;

    return products
}

export const createProduct = async(product: Partial<IProduct>) => {
    const response = await fetch("https://amarketapi.onrender.com/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })

    return alert("New Product Created: " + product.name)
}

export const updateFavorite =async (id: string, favorite: boolean) => {
    const response = await fetch(`https://amarketapi.onrender.com/api/products/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(res => res.json())

    console.log(response)
    return response
}