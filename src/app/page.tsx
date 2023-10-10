'use client'
import { getProducts } from '@/api/services'
import { BestSellers } from '@/components/BestSellers'
import { Header } from '@/components/Header'
import { ProductForm } from '@/components/ProductForm'
import { ProductsList } from '@/components/ProductsList'
import { useFilter } from '@/hooks/useFilter'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 8rem;
  padding: 0 5rem;
`

export default function Home() {
  const [products, setProducts] = useState('')
  const {search} = useFilter()
  const [createModal, setCreateModal] = useState(false)

 useEffect(() => {
  const getData = async () => {
    const data = await getProducts()
    setProducts(data)
  }

  getData()
 }, [])

 const handleModal = (value: boolean) => {
  setCreateModal(!value)
 }

  return (
    <>
    {createModal && <ProductForm handleModal={handleModal} createModal={createModal}/>}
      <Header handleModal={handleModal} />
      <MainContainer>
        <BestSellers />
        <ProductsList products={products? products : ""} />
      </MainContainer>
    </>
  )
}
