import React, { useEffect, useState } from 'react'
import { ProductsListContainer, ProductsListTable, ProductsListMain, ProductsListTableHeader } from './style'
import { ArrowLeft } from '@/assets/icons/ArrowLeft'
import { ArrowRight } from '@/assets/icons/ArrowRight'
import { FullHeart } from '@/assets/icons/FullHeart'
import { Heart } from '@/assets/icons/Heart'
import { getProducts } from '@/api/services'
import { useFilter } from '@/hooks/useFilter'
import { Paginate } from '@/hooks/usePaginate'

export const ProductsList = () => {
    const [products, setProducts] = useState(Array<IProduct>)
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const {search} = useFilter()
    const pageSize = 6;
  
    useEffect(() => {
        const getData = async () => {
        const data = await getProducts()
        const paginatedProducts = await Paginate(data, page, pageSize);
        setProducts(paginatedProducts)
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
    <ProductsListMain>
        <div className="headerWithNavigation">
        <h1>Products</h1>
            <div className='navigationArrows'>
            <div onClick={() => onClickFoward()}>
                    <ArrowLeft />
                </div>
                <div onClick={() => onClickNext()}>
                    <ArrowRight />
                </div>
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
                { products ?
                    products.map((product: IProduct) => (
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
                                <p>{product.sales} sales</p>
                                <p>-</p>
                                <strong>Total of <br />R${product.sales * product.price}</strong>
                            </div>
    
                            <div className="stock">
                                {product.stock} unit
                            </div>
    
                            <div className='favorite'>
                                {product.favorite ? <FullHeart /> : <Heart />}
                            </div>
                        </li>
                    )) : 
                    
                    <div>Loading</div>
                }
            </ProductsListTable>
        </ProductsListContainer>
    </ProductsListMain>
  )
}
