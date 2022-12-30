import { useEffect, useState } from "react"

const useProduct =()=> {
    const [products,setProducts]=useState([]);
    const [loading,setloading]=useState(false);
    useEffect(()=>{
        setloading(true);
        fetch("https://raw.githubusercontent.com/redwanX/test2/main/products.json")
        .then((response) => response.json())
        .then((data) => {
            setloading(false);
            setProducts (data)
        })
    },[])
    return [products, setProducts,loading];
}

export default useProduct;