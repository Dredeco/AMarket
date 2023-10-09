import styled from "styled-components";

export const ProductsListMain = styled.section`
    width: 100%;
    display: flex;
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

export const ProductsListContainer = styled.div`
    margin-top: 3.4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 3rem;

    ul{
        font-size: 1.4rem;

        :first-child{
            flex: 4;
        }

        :nth-child(n+2){
            flex: 1;
        }
    }
`

export const ProductsListTableHeader = styled.ul`
    display: flex;
    list-style: none;
    color: #99A0B0;
    margin-bottom: 3rem;
    font-weight: bold;
`

export const ProductsListTable = styled.ul`
    display: flex;
    flex-direction: column;
    color: #222;

    li{
        display: flex;
        align-items: center;

        .identification{
            display: flex;
            align-items: center;
            gap: 1rem;

            .productImage{
                max-width: 9rem;
                height: 8.5rem;
                background-color: green;
                margin-bottom: .5rem;
            }
        }
    }
`
