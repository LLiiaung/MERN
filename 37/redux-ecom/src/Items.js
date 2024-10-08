import React, { useEffect, useState } from 'react'
import { useSelector} from 'react-redux'
import itemsReducer from './reducers/itemsReducer'
import Item from './Item'
export default function Items() {
  const itemsobj = useSelector(store => store.itemsReducer)
  const [itemslist, setitemslist] = useState(itemsobj.items)
  const [searchkey, setsearchkey]=useState('')

  function filteritems() {
    const duplicatelist = itemsobj.items
    const filteredlist = duplicatelist.filter(item=>item.itemName.toLowerCase().includes(searchkey.toLowerCase()))
    setitemslist(filteredlist)
  }
  const itemsdata = itemslist.map((item)=>{
    return <div className='col-md-4' key={item.itemName}>
      <Item item = {item}/>
    </div>
  })
  return (
    <div className='container'>
      <input type='text' className='form-control mb-5' placeholder='search items'
      value={searchkey} onChange={(e)=>{setsearchkey(e.target.value)}} onKeyUp={filteritems}/>
      <div className='row'>
        {itemsdata}
      </div>
    </div>
  )
}
