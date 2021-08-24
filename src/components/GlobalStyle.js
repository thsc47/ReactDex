import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
        background-color: ${({ theme }) => theme.body};
        
}
@font-face{
        font-family: "ingame";
        src: local('ingame'),
        url("./fonts/ingame.ttf"), 
        format('ttf');
        font-weight: normal;
        font-style: normal;
}
    
*{
       box-sizing: border-box;
       font-family: "ingame","Arial","Montserrat", sans-serif;
       margin: 0;
       padding: 0;
       text-decoration: none; 
       
    }
    
    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
 
`;

export default GlobalStyle;
