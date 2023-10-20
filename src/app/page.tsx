'use client'
import { BestSellers } from '@/components/BestSellers'
import {FilteredSection} from '@/components/FilteredSection'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProductForm } from '@/components/ProductForm'
import { ProductsList } from '@/components/ProductsList'
import { AppContext } from '@/context/Context'
import { useState, useContext } from 'react'
import styled from 'styled-components'

const MainContainer = styled.main`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: center;
  padding: 0 5rem;
  margin: 8rem auto;

  @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
`

export default function Home() {
  const [createModal, setCreateModal] = useState(false)
  const {search, setSearch, type, setType} = useContext(AppContext)

  const handleModal = (value: boolean) => {
    setCreateModal(!value)
  }

  return (
    <>
    {createModal && <ProductForm handleModal={handleModal} createModal={createModal}/>}
      <Header handleModal={handleModal} />
      <MainContainer>
        {search != '' || type != 'ALL' ? <FilteredSection></FilteredSection>
                                        : <>
                                          <BestSellers />
                                          <ProductsList />
                                          </>                
                                        }
      </MainContainer>
      <Footer />
    </>
  )
}
