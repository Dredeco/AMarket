import React, { useEffect, useState } from 'react'
import { BestSellersContainer, BestSellersList, BestSellersMain } from './styles'
import { ArrowLeft } from '@/assets/icons/ArrowLeft'
import { ArrowRight } from '@/assets/icons/ArrowRight'
import { getProducts } from '@/api/services'
import { Paginate } from '@/hooks/usePaginate'
import { Loading } from '../Loading'

export const BestSellers = () => {
    const [products, setProducts] = useState(Array<IProduct>)
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const pageSize = 6;
  
    useEffect(() => {
        const getData = async () => {
        const data = await getProducts()
        const paginatedProducts = await Paginate(data, page, pageSize);
        setProducts(paginatedProducts.sort((a: any, b: any) => b.sales - a.sales))
        setPageCount(Math.ceil(data.length / pageSize))
    }
    getData()
}, [page])

    const onClickNext = () => {
        if (page >= pageCount ) {
        setPage(pageCount)
        } else {
        setPage(page + 1)
        }
    }

    const onClickFoward = () => {
        if (page <= 1 ) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }


  return (
    <BestSellersMain>
        <div className="headerWithNavigation">
            <h1>Best Sellers</h1>
            <div className='navigationArrows'>
                <div onClick={() => onClickFoward()}>
                    <ArrowLeft />
                </div>
                <div onClick={() => onClickNext()}>
                    <ArrowRight />
                </div>
            </div>
        </div>
        <BestSellersContainer>
            <BestSellersList>
            {products.length ?
            products.map((product: IProduct) => (
                <li key={product._id}>
                    <div className="productImage" />
                    <div className="productInformation">
                        <div className='priceAndSales'>
                            <span><strong>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.price)}</strong></span>
                            <span>{product.sales} sales</span>
                        </div>
                        <strong>{product.name}</strong>
                    </div>
                </li>
            )) :
            <Loading key='Loading' />}
            </BestSellersList>
        </BestSellersContainer>
        <div className='pagination'>
             <p>Página {page} de {pageCount}</p>
        </div>
    </BestSellersMain>
  )
}
