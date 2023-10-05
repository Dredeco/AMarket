'use client'
import { BestSellers } from '@/components/BestSellers'
import { Header } from '@/components/Header'
import { ProductForm } from '@/components/ProductForm'
import { AppContextProvider } from '@/context/Context'
import { useFilter } from '@/hooks/useFilter'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'

const MainContainer = styled.main`
  display: flex;
  max-width: 1280px;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 5rem;
`

export default function Home() {
 const {search} = useFilter()
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
      </MainContainer>
    </>
  )
}
