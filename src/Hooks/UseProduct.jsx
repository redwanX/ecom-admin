import { useEffect, useState } from "react"

const useProduct =()=> {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/redwanX/test2/main/products.json")
        .then((response) => response.json())
        .then((data) => setProducts (data))
    },[])
    return [products, setProducts];
}

export default useProduct;