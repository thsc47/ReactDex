import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

body{
        background-color: ${({ theme }) => theme.body};
        
}

    
*{
       box-sizing: border-box;
       font-family:'VT323', monospace;"Montserrat", sans-serif;
       margin: 0;
       padding: 0;
       font-size: 16px;
       text-decoration: none; 
       
    }
    
    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
 
`;

export default GlobalStyle;
