import styled from "styled-components";

export const BestSellersMain = styled.section`
    width: 100%;
    max-width: 42.8rem;
    display: flex;
    flex-direction: column;
    flex: 1;

    .headerWithNavigation{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .navigationArrows{
            display: flex;
            gap: 1rem;
        }

        div{
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
        background-color: #eee;
        padding: 1rem;
        border-radius: 10px;
        .productImage{
            width: 100%;
            height: 14rem;
            background-color: #ffffff;
            margin-bottom: .5rem;
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