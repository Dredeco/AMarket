import styled from "styled-components";

export const MainHeader = styled.header`
    background-color: #17223E;
    width: 100vw;
    display: flex;
    justify-content: center;
    color: #fff;
`

export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const LogoSection = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        font-size: 2.5rem;
        font-weight: bold;
        span{
            color: #b54dfa;
        }
    }

    .userSection{
        display: flex;
        align-items: center;
        gap: 1.6rem;
        cursor: pointer;
    }
`

export const SearchSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 17rem;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .inputWrapper{
        display: flex;
        align-items: center;
        position: relative;
        width: 42rem;
        height: 5rem;

        svg{
            position: absolute;
            margin-left: 2rem;
        }

        input{
            width: 100%;
            height: 100%;
            border-radius: 10px;
            padding-left: 6rem;
        }
    }

    @media screen and (min-width: 676px) {
        text-align: center;
    }

`

export const FilterSection = styled.div`
    width: 100%;
    height: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .filterButtons{
        display: flex;
        gap: 1.5rem;
    }

    .createButton{
        color: #fff;
        padding: .8rem .9rem;
        background-color: #D32811;
        border-radius: 10px;
        cursor: pointer;
    }
`
export const FilterButton = styled.button<FilterButtonProps>`
    color: #fff;
    padding: .8rem .9rem;
    background-color: ${props => props.selected ? '#D32811' : '#d3281175'};
    border-radius: 10px;
    cursor: pointer;
`

interface FilterButtonProps {
    selected: boolean
}