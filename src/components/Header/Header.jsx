import { categories } from "../helper/data"

const Header = ({clickChange}) => {
  return (
    <>
    <div>
      <h1>Product List</h1>
    </div>
    <ul>
        {categories.map((kategori,index)=>
        <button onClick={()=>clickChange(kategori)} key={index} > {kategori.toUpperCase()} </button>
        )}
    </ul>
    </>
  )
}

export default Header;
