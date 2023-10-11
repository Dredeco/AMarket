'use client'
import { BestSellers } from '@/components/BestSellers'
import { Header } from '@/components/Header'
import { ProductForm } from '@/components/ProductForm'
import { ProductsList } from '@/components/ProductsList'
import { useState } from 'react'
import styled from 'styled-components'

const MainContainer = styled.main`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  margin: 0 auto;
  margin-top: 8rem;

  @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
`

export default function Home() {
  const [createModal, setCreateModal] = useState(false)

  const handleModal = (value: boolean) => {
    setCreateModal(!value)
  }

  return (
    <>
    {createModal && <ProductForm handleModal={handleModal} createModal={createModal}/>}
      <Header handleModal={handleModal} />
      <MainContainer>
        <BestSellers />
        <ProductsList />
      </MainContainer>
    </>
  )
}
