//importing styled-components
import styled from "styled-components";

//Components from Card
export const StyledLoading = styled.img`
  height: 60px;
  width: 60px;
  margin-bottom: 25px;
`;

export const StyledImg = styled.img`
  height: 200px;
  width: 200px;
`;

export const StyledDiv = styled.div`
  background-color: ${ ({theme}) => theme.inside};
  color: ${ ({theme}) => theme.text};
  height: 280px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
  margin: 5px;
  align-content: center;
  border: 1px solid black;
  border-radius: 4px;
`;

export const StyledType = styled.div`
  margin: 5px;
  padding: 3px;
  font-weight: bold;
  color: #fff;
  border-radius: 15px;
`;

// Components from Home (Not Using)
export const StyledContainer = styled.section`
  width:100%;
  height:100%;
  background-color: ${({ theme }) => theme.body};
`;

export const StyledTextField = styled.input`
  width:100%;
  height:25px;
  background: rgba(0, 0, 0, 0.4);
  border: 0;
  border-radius: 5px;
  margin: 10px 10px 10px 10px;
  placeholder: "Search Pokemon";
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.inside}
`;
