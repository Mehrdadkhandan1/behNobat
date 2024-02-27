import styled from "styled-components";



export const SettingC = styled.div`
    h2{
        display: flex;
        gap: 0.5rem;
        font-size: var(--sub-title-font);
        color: ${({ theme }) => theme.secondaryColor};
        font-weight: bold;
        .icon-title{
            font-size: 1.25rem;
        }

       
    }
    .information-clinic{
        margin-top: 2rem;
        h3{
        color: ${({ theme }) => theme.secondaryColor};
        margin: 2rem 0;

        }
        form {
            display: grid;
            gap: 1rem;
            .inputs-form{
            display: flex;
            gap: 3rem;
            flex-wrap: wrap;
        }
        .slogan{
            width: 80%;
            height:150px ;
        }
        }
       
        
    }
    .change-logo{
        margin-top: 1rem;
    .input-change{
        margin-top: 1rem;
            flex-wrap: wrap;
            display: flex;
            align-items: center;
            gap: 3rem;
            .logo{
                width: 150px;
            }
            .input{
                input{
                    position: absolute;
                    opacity: 0;
                }
                label{
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                    background-color:${({ theme }) => theme.primaryColor};
                    color: #fff;
                    padding: 0.5rem 0.75rem;
                    font-size: var(--small-font);
                    border-radius: 0.25rem;
                    svg{
                        font-size: 1.25rem;
                    }
                }
            }
        }
        .info{
            font-size: var(--small-font);
            opacity: 0.7;
        }
    }

`