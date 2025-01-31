import React, { useState } from 'react'

const SearchNames = () => {
    const Names = [
        "Alice", "Bob", "Charlie", "David", "Emma", 
        "Fiona", "George", "Hannah", "Ian", "Jack", 
        "Katherine", "Liam", "Mia", "Noah", "Olivia", 
        "Paul", "Quinn", "Rachel", "Samuel", "Taylor"
    ];
    const [data,setData]=useState('')
    const [result,setResult]=useState([])

    const changeHandle =(e)=>{
        let value = e.target.value
        setData(value)
        const filterData= Names.filter((names)=>
            names.toLowerCase().includes(value.toLowerCase())
        )
        setResult(filterData)
    }
    
  return (
    <div>
        <h1 className='U'>Search Bar</h1>
      <input type="text" value={data} onChange={changeHandle} placeholder='Enter name'/>
        {
            result.map((item)=>
                <h1>{item}</h1>
            )
        }
    </div>
  )
}

export default SearchNames
