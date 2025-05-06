import React, {
    createContext,
    useEffect,
    useState,
    useContext,
  } from "react";
  import { axiosHandler } from "../../utils/axiosHandler";
  import { useAuthContext } from "../authContext/authContext";
  
  // eslint-disable-next-line react-refresh/only-export-components
  export const ProductContext = createContext();

  const ProductProvider = ({ children }) => {
    const [productData, setProductData] = useState([]);
    const { user } = useAuthContext();
  
    const getProductData = async () => {
      try {
        const res = await axiosHandler.get("/product/get-product");
        setProductData(res.data.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
  
    const createProduct = async (products) => {
      try {
        const res = await axiosHandler.post("/product/create-product", products);
        getProductData();
        return res.data;
      } catch (error) {
        console.error("Failed to create product:", error);
        throw error;
      }
    };
  
    const deleteProduct = async (productId) => {
      try {
        await axiosHandler.delete(`/product/delete/${productId}`);
        getProductData();
      } catch (error) {
        console.error("Failed to delete product:", error);
      }
    };
  
    const updateProduct = async (productId, updatedData) => {
      try {
        await axiosHandler.put(`/product/update-product/${productId}`, updatedData);
        getProductData();
      } catch (error) {
        console.error("Failed to update product:", error);
      }
    };
  
    useEffect(() => {
      if (user) {
        getProductData();
      }
    }, [user]);
  
    return (
      <ProductContext.Provider
        value={{ productData, createProduct, deleteProduct, updateProduct }}
      >
        {children}
      </ProductContext.Provider>
    );
  };
  
  export default ProductProvider;
  
  // eslint-disable-next-line react-refresh/only-export-components
  export const useProductContext = () => useContext(ProductContext);
  