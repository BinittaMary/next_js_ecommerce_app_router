"use client";
import { setKeyword } from '@/app/slices/SearchKeySlice';
import React from 'react'
import { useDispatch } from 'react-redux'

function SearchForm() {
  const dispatch=useDispatch();  
  return (
        <form className="d-flex flex-grow-1 mx-2 ">
        <input className="form-control hover-effect-yellow custom-search" type="search" placeholder="Search" onChange={(e)=> dispatch(setKeyword(e.target.value))}></input>
        </form>
  )
}

export default SearchForm