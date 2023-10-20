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
    max-width: 500px;
    max-height: 500px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        width: 100%;
        margin-top: 2.5rem;
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            list-style: none;
        }

        ul > li {
            width: 100%;
            display: flex;
            gap: 1rem;
            align-items: center;
            height: 100%;

            label{
                font-weight: bold;
            }
    
            input{
                padding: 1rem 1rem;
                border-radius: 10px;
                border: 1px solid #999;
                width: 100%;
            }
        }


        .formButtons{
            display: flex;
            gap: 2rem;
            margin-top: 2rem;
            button{
                color: #fff;
                padding: .8rem .9rem;
                border-radius: 10px;
                cursor: pointer;
            }
            .create{
                background-color: #9e3d99;
            }
            .cancel{
                background-color: #000;
            }
        }
    }
`