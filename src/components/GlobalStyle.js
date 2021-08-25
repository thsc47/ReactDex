import { createGlobalStyle } from "styled-components";
import PokomonTipo from "../assets/fonts/ingame.ttf"

const GlobalStyle = createGlobalStyle`

body{
        background-color: ${({ theme }) => theme.body};
        
}
@font-face{
        font-family: "ingame";
        src: local("ingame"),
        url(${PokomonTipo}), 
        format('truetype');
}
    
*{
       box-sizing: border-box;
       font-family: "Pokemon Solid","Arial","Montserrat", sans-serif;
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
