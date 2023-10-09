import React, { useContext, useEffect, useState } from 'react'
import { MainHeader, HeaderContainer, LogoSection, SearchSection, FilterSection, FilterButton } from './styles'
import Link from 'next/link'
import { Avatar } from '@/assets/icons/Avatar'
import { ChevronDonw } from '@/assets/icons/ChevronDonw'
import { Search } from '@/assets/icons/search'
import { AppContext } from '@/context/Context'
import { useFilter } from '@/hooks/useFilter'

export const Header = ({handleModal}: any) => {
    const {search, setSearch, type, setType} = useFilter();

    useEffect(() => {
        console.log(search)
    }, [search])

    const handleSearch = (value: string) => {
        setSearch(value)
    }

    const handleType = (type: string) => {
        setType(type)
    }

  return (
    <MainHeader>
        <HeaderContainer>
            <LogoSection>
                <Link href='/'><span>A+</span>Market</Link>
                <div className="userSection">
                    <Avatar />
                    <ChevronDonw />
                </div>
            </LogoSection>

            <SearchSection>
                <h1>Products</h1>
                <div className="inputWrapper">
                    <Search />
                    <input type='text' placeholder='Search products' onChange={(e) => handleSearch(e.target.value)}/>
                </div>
            </SearchSection>

            <FilterSection>
                <div className="filterButtons">
                    <FilterButton selected={type === "ALL"} onClick={() => handleType('ALL')}>All Products</FilterButton>
                    <FilterButton selected={type === "FAVORITES"} onClick={() => handleType('FAVORITES')}>Favorites</FilterButton>
                </div>
                <button className='createButton' onClick={() => handleModal()}>New Product</button>
            </FilterSection>
        </HeaderContainer>
    </MainHeader>
  )
}
