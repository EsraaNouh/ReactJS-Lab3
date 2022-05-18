import {BrowserRouter, Route} from "react-router-dom";
import ListOfProducts  from "./Routes/ListOfProducts";
import AddProduct from "./Routes/AddProduct";
import ProductDetails from "./Routes/Details";
import EditProduct from "./Routes/EditProduct"
import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react";
let Home = ()=>{
    let [products,setProducts] = useState(
        [
            { id: 1, name: "Leaf Rake", price: 19.95, quantity: 100, productimag: "1.jpg", category:"Phones" },
            { id: 2, name: "Garden Cart", price: 32.99, quantity: 200, productimag: "6.jpg", category:"Clothes"},
            { id: 3, name: "Hammer", price: 9.90, quantity: 300, productimag: "11.jpg", category:"MakeUp" },
            { id: 4, name: "Saw", price: 11.55, quantity: 400, productimag: "2.jpg", category:"Phones"},
            { id: 5, name: "Video Game Controller", price: 39.95, quantity: 500, productimag: "7.jpg", category:"Clothes" },
          ]
    );
    let AddProd = (_newProduct) => {
        products.push(_newProduct);
        setProducts(products);
    }
    let EditProd = (_editedProduct)=>{
        for(let i=0; i<products.length; i++){
            if(products[i].id == _editedProduct.id)
            products[i] = _editedProduct;
        }
        setProducts(products);
    }
    let RemoveProduct =(_index)=>{
        products.splice(_index,1);
        setProducts(products)
      }
    return(
        <BrowserRouter>
            <Header/>
            <Route component={(props)=><ListOfProducts Items={products} RemoveFn={RemoveProduct} {...props}/>} path="/" exact/>
            <Route component={(props)=><ListOfProducts Items={products} RemoveFn={RemoveProduct} {...props}/>} path="/List"/>
            <Route component={(props)=><AddProduct AddFun={AddProd} {...props}/>} path="/Add"/>
            <Route component={ProductDetails} path="/Details/:id?"/>
            <Route component={(props)=><EditProduct EditFun={EditProd} {...props}/>} path="/Edit/:id?"/>
            <Footer/>
        </BrowserRouter>
    );
}
export default  Home;