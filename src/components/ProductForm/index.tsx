import React, { FormEvent, useEffect, useState } from 'react'
import { ProductFormContainer, ProductFormMain } from './styles'


export const ProductForm = ({handleModal, createModal}: any) => {
    const [isVisible, setIsVisible] = useState(createModal)

    useEffect(() => {
        console.log(createModal)
    }, [createModal])

    const handleCancel = (e: FormEvent) => {
        setIsVisible(false)
        handleModal(isVisible)
        e.preventDefault()
    }

  return (
    <ProductFormMain>
        <ProductFormContainer>
            <h1>New Product</h1>
            <form>
                <label>Name:</label>
                <input type='text' name='name' />
                <label>Code:</label>
                <input type='text' name='code'/>
                <label>Sales:</label>
                <input type='text'name='sales' />
                <label>Price:</label>
                <input type='text' name='price'/>
                <label>Stock:</label>
                <input type='text' name='stock'/>
                <div className='formButtons'>
                    <button className='cancel' onClick={(e) => handleCancel(e)}>Cancel</button>
                    <button className='create'>Confirm</button>
                </div>
            </form>
        </ProductFormContainer>
    </ProductFormMain>
  )
}
