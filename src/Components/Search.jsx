import React from 'react'

const Search = ({things , setFilteredThing}) => {
    const searchItems = (e) => {
        setFilteredThing(things.filter(element => element.item.includes((e.target.value.trim()))));
    }
  return (
    < >
        <input type="text" placeholder='search' onChange={searchItems} className='search' />
    </>
  )
}

export default Search