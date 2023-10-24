import React from "react"; 
import Product from "./Product.jsx";
export default function Products() {
  const products = [
    {id:1,title:'product one',desc:'this is product one'},
    {id:2,title:'product two',desc:'this is product two'},
    {id:3,title:'product three',desc:'this is product three'},
    {id:4,title:'product Four',desc:'this is product Four'}
];
  return (
    <>
      <div className="text-center">
        <h2 className="text-primary">Products</h2>
      </div>
      <div className="row mb-5">
        {products.map(
          (prod) => {
            return <Product {...prod} key = {prod.id}/>
          }
        )}
      </div>
    </>
  );
}
