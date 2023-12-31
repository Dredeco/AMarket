import styled from "styled-components";

export const ProductsListMain = styled.section`
    width: 100%;
    display: flex;
    align-self: flex-start;
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

        svg{
            cursor: pointer;
        }
    }

    .pagination{
        margin-top: 3rem;
        align-self: flex-end;
        font-size: 1.2rem;
    }
`

export const ProductsListContainer = styled.div`
    margin-top: 3.4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding:0 3rem;

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
    grid-row-gap: 1rem;

    li{
        display: flex;
        align-items: center;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;

        .identification{
            display: flex;
            align-items: center;
            gap: 1rem;

            .productImage{
                max-width: 9rem;
                height: 8.5rem;
                background-color: #ddd;
            }

            .nameAndCodeWrapper {
                strong {
                    color: #235EE7;
                    cursor: pointer;
                }
            }
        }

        .favorite{
            display: flex;
            svg{
                cursor: pointer;
            }
        }
    }
`
