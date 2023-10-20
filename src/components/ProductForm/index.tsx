import React, { FormEvent, useEffect, useState } from 'react'
import { ProductFormContainer, ProductFormMain } from './styles'
import { createProduct } from '@/api/services'


export const ProductForm = ({handleModal, createModal}: any) => {
    const [isVisible, setIsVisible] = useState(createModal)
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const [price, setPrice] = useState(Number)
    const [sales, setSales] = useState(Number)
    const [stock, setStock] = useState(Number)
    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        console.log(createModal)
    }, [createModal])

    const handleCancel = (e: FormEvent) => {
        setIsVisible(false)
        handleModal(isVisible)
        e.preventDefault()
    }

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault()

        if(!name || !code || !price || !sales || !stock) {
            alert("Todos os campos são obrigatórios")
        }

        const product: Partial<IProduct> = {
            name: name,
            code: code,
            price: price,
            sales: sales,
            stock: stock,
            favorite: favorite
        }

        await createProduct(product)
        handleModal(isVisible)
    }

  return (
    <ProductFormMain>
        <ProductFormContainer>
            <h1>New Product</h1>
            <form>
                <ul>
                <li>
                    <label>Name:</label>
                    <input type='text' name='name' onChange={(e) => setName(e.target.value)}/>
                </li>
                <li>
                    <label>Code:</label>
                    <input type='text' name='code' onChange={(e) => setCode(e.target.value)}/>
                </li>
                <li>
                    <label>Price:</label>
                    <input type='number' name='price' onChange={(e) => setPrice(e.target.valueAsNumber)}/>
                </li>
                <li>
                    <label>Sales:</label>
                    <input type='number'name='sales' onChange={(e) => setSales(e.target.valueAsNumber)}/>
                </li>
                <li>
                    <label>Stock:</label>
                    <input type='number' name='stock' onChange={(e) => setStock(e.target.valueAsNumber)}/>
                </li>
                </ul>
                <div className='formButtons'>
                    <button className='cancel' onClick={(e) => handleCancel(e)}>Cancel</button>
                    <button className='create' onClick={(e) => handleSubmit(e)}>Create new</button>
                </div>
            </form>
        </ProductFormContainer>
    </ProductFormMain>
  )
}
