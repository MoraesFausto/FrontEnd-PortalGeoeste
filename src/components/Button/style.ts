import styled from "styled-components";

export const DownloadBtn = styled.form`

a {
   text-decoration: none;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: white;

}

  button[type="button"] {
  border: 0;
  background-color: rgb(8, 165, 238);
  display: block;
  margin: 10px auto;
  text-align: center;
  text-decoration: none;
  border: 1px solid rgb(8, 165, 238);
  padding: 12px 8px;
  width: 100px;
  outline: none;
  color: white;
  border-radius: 22px;
  transition: 0.25s;
  cursor: pointer;

}
button[type="button"]:hover {
  background: rgb(4, 107, 224);
}
`