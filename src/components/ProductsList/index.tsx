import React from 'react'
import { ProductsListContainer, ProductsListTable, ProductsListMain, ProductsListTableHeader } from './style'
import { ArrowLeft } from '@/assets/icons/ArrowLeft'
import { ArrowRight } from '@/assets/icons/ArrowRight'
import { FullHeart } from '@/assets/icons/FullHeart'
import { Heart } from '@/assets/icons/Heart'


export const ProductsList = ({products}: any[]) => {
  return (
    <ProductsListMain>
        <div className="headerWithNavigation">
        <h1>Products</h1>
            <div className='navigationArrows'>
                <ArrowLeft />
                <ArrowRight />
            </div>
        </div>
        <ProductsListContainer>
            <ProductsListTableHeader>
                <li>IDENTIFICATION</li>
                <li>PRICE</li>
                <li>SALES</li>
                <li>STOCK</li>
                <li></li>
            </ProductsListTableHeader>
            <ProductsListTable>
                {products.map((product) => (
                    <li key={product.name}>
                        <div className="identification">
                            <div className="productImage" />
                            <div className='nameAndCodeWrapper'>
                                <strong>{product.name}</strong>
                                <p>#{product.code}</p>
                            </div>
                        </div>

                        <div className="price">
                            <p>R$ {product.price.toFixed(2)}</p>
                        </div>

                        <div className="sales">
                            <strong>Total of {product.sales * product.price}</strong>
                            <p>{product.sales} sales</p>
                        </div>

                        <div className="stock">
                            {product.stock} unit
                        </div>

                        <div className='favorite'>
                            {product.favorite ? <FullHeart /> : <Heart />}
                        </div>

                    </li>
                ))}
            </ProductsListTable>
        </ProductsListContainer>
    </ProductsListMain>
  )
}
