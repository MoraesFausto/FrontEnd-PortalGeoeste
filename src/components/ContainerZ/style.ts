import styled from "styled-components";

export type containerProps = {
  align?: string;
  w: string;
  h: string;
  side: string;
}

export const Container = styled.div<containerProps>`

div{
    h3{
      text-align: center;
    }
    padding-right: 1vw;
    position: absolute;
   ${props=>props.side}: 0;
    margin-top: 1%;
    margin-${props=>props.side}: 15px;
    background-color: rgba(201, 231, 242, 0.75);
    width: ${props=>props.w};
    height: ${props=>props.h};
    z-index: 10000;
    overflow-y:scroll;
    border: 1px solid rgb(8, 165, 238);
    border-radius: 5px;
    text-align: ${props=>props.align};
    font-size:.83vw;

  
  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px gray;
    border-radius: 50px;

  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: rgba(8, 165, 238, 0.5);
;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: rgba(29, 162, 240, 0.75);

  }
  }

`

export const UL = styled.ul`
ul {
  list-style: none; /* Remove HTML bullets */
  padding: 0;
  margin: 0;
  font-size:.83vw;

}
`
