import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  const [value, setValue] = useState()
  const changeValue = () => {

  }
  return (
    <SearchBoxC>
      <IoIosSearch />
      <input placeholder='جستجو ...' type="search" value={value} onChange={changeValue} />
    </SearchBoxC>
  )
}

export default SearchBox


export const SearchBoxC = styled.div`
    display: flex;
    border-radius: 0.5rem;
    align-items: center;
    font-size: var(--sub-title-font);
    border: 1px solid gray;
    padding:  0.5rem;
    box-shadow: 0px 0px 4px 1px rgba(81, 81, 81, 0.25);
    min-width: 280px;
    height: 55px;
    gap: 1rem;
    max-width: 350px;
    input{
        width: 80%;
        height: 100%;
        outline: 0;
        border: 0;
      }
    input::placeholder{

      font-size: var(--text-font);

    }
    @media screen and (max-width:768px) {
      &{
        min-width: 200px;
        height: 45px;
        padding:  0.25rem;

        font-size: var(--text-font);
        input::placeholder{

        font-size: var(--small-font);

}
      }
    }
`