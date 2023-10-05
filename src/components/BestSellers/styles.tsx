import styled from "styled-components";

export const BestSellersMain = styled.section`
    width: 42.8rem;
    display: flex;
    margin-top: 8rem;
    align-self: flex-start;
    flex-direction: column;

    .headerWithNavigation{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .navigationArrows{
            display: flex;
            gap: 1rem;
        }

        svg{
            cursor: pointer;
        }
    }
`

export const BestSellersContainer = styled.div`
    margin-top: 3.4rem;
    padding: 3rem;
    width: 42rem;
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 3rem;
    background-color: #F3F5F9;
    justify-content: center;
`

export const BestSellersList = styled.ul`
    font-size: 1.4rem;
    color: #6B7183;
    display: flex;
    flex-direction: row;

    li{
        list-style: none;
        width: 16rem;
        .productImage{
            width: 100%;
            height: 14rem;
            background-color: #ccc;
        }
        .priceAndSales{
            display: flex;
            justify-content: space-between;

            strong{
                color: inherit;
            }
        }
        strong{
            color: #235EE7;
            cursor: pointer;
        }
    }
`