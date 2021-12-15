import styled from "styled-components";

export const MoviesContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    max-width:100vw;
    height: 100%;
    margin: 0 83px;
    justify-content:center;

`
export const CalificacionContainer = styled.div`
    color:#FED941;
    position: relative;
    top:-20%;
    left:-3%;
    background: #000000;
    opacity: 0.64;
    border: 3px solid #FED941;
    box-sizing: border-box;
    backdrop-filter: blur(130px);
    padding: 5px;
    text-align:center;
    font-weight:700;  
    width:50%;
    font-size:28px;
    display:flex;
    justify-content:center;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    border-left:none;
    
    & svg {
        align-self:center;
        margin-right:5px;
        
    }
    & span{
        color:#ffff;
        
    }
`

export const Overley = styled.div`
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    background-color: rgba(1,1,1,0.9);


`
export const ContenedorModal= styled.div`
    width: 90%;
    height: 579px;  
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0px;
    margin: 100px auto;
    position:relative;
`


export const DataMovie= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 465px;
    height: 332px;
    left: 634.04px;
    top: 123.5px;
    margin: 0px 40px;
`
export const ModalButtons = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;    
    width:48%;
    border-radius: 4px;
    border: none;
    font-weight:700;
    font-size:18px;
    & svg{
        margin-right:10px;
    }

`
export const ModalBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 100%;

`
export const ModalBtnCerrar = styled.button `
    position:absolute;
    top:0px;
    right:21%;
    border:none;
    background-color: transparent;
    font-weight:700;
    color:#ffff;
`
/*busqueda*/
export const ImgSwiper = styled.img`
    height:320px;
    object-fit:cover;
    width:100%; 
    
`
export const Categorias = styled.ul`
    display:flex;   
    flex-direction:row;
    align-items: center;
`
export const ButtonSearch = styled.button`
    width:10%;
    height: 100%;
    margin:auto;
    background:#FED941;
    padding:12px;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    border:none;
`

export const FormSearch = styled.form`
    border: 1px solid #FED941;
    border-radius:10px;
    width:30%;
    height: 44px; 
    align-self:center 
    margin-right: 65px;
    align-self: center;
`
export const InputSearch = styled.input`
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    width: 100%;
    height: 44px;
    padding:10px;
    border:none;
`
