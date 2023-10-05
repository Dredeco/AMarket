import styled from "styled-components";

export const ProductFormMain = styled.section`
    background-color: rgba(0, 0, 0, .8);
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProductFormContainer = styled.div`
    width: 90vw;
    height: 100%;
    max-width: 600px;
    max-height: 500px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        margin-top: 2.5rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 2rem;

        label{
            align-self: flex-start;
            font-weight: bold;
        }

        input{
            border: 1px solid #000;
            width: 100%;
            height: 3rem;
            border-radius: 10px;
            margin-bottom: 1rem;
        }

        .formButtons{
            display: flex;
            gap: 3rem;
            margin-top: 2rem;
            button{
                color: #fff;
                padding: .8rem .9rem;
                border-radius: 10px;
                cursor: pointer;
                font-size: 1.6rem;
            }
            .create{
                background-color: #D32811;
                font-size: 2rem;
                width: 15rem;
            }
            .cancel{
                background-color: #000;
            }
        }
    }
`