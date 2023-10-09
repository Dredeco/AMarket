import React from 'react'
import { BestSellersContainer, BestSellersList, BestSellersMain } from './styles'
import { ArrowLeft } from '@/assets/icons/ArrowLeft'
import { ArrowRight } from '@/assets/icons/ArrowRight'

const products = [
    {
        id: 1,
        name: "Maça",
        code: "MLB00001",
        sales: 30,
        price: 2,
        stock: 3,
        favorite: true
    },
    {
        id: 2,
        name: "Pera",
        code: "MLB00002",
        sales: 30,
        price: 2,
        stock: 3,
        favorite: false
    },
    {
        id: 3,
        name: "Uva",
        code: "MLB00003",
        sales: 30,
        price: 2,
        stock: 3,
        favorite: false
    },
    {
        id: 4,
        name: "Banana",
        code: "MLB00004",
        sales: 30,
        price: 2,
        stock: 3,
        favorite: false
    },
]

export const BestSellers = () => {
  return (
    <BestSellersMain>
        <div className="headerWithNavigation">
            <h1>Best Sellers</h1>
            <div className='navigationArrows'>
                <ArrowLeft />
                <ArrowRight />
            </div>
        </div>
        <BestSellersContainer>
            {products.map((product) => (
            <BestSellersList>
                <li key={product.name}>
                    <div className="productImage" />
                    <div className="productInformation">
                        <div className='priceAndSales'>
                            <span>R$ <strong>{product.price.toFixed(2)}</strong></span>
                            <span>{product.sales} sells</span>
                        </div>
                        <strong>{product.name}</strong>
                    </div>
                </li>
            </BestSellersList>
            ))}
        </BestSellersContainer>
    </BestSellersMain>
  )
}
