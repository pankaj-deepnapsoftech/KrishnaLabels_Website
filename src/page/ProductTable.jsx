import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const ProductTable = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling over-ear headphones with rich bass and clear sound.",
      price: "$149.99",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_551_ANC_Pro.347_1.jpg?v=1737546044",
    },
    {
      id: 2,
      name: "Smartwatch Pro X",
      description: "Fitness tracking, GPS, heart rate monitor and customizable watch faces.",
      price: "$199.99",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/7/324394920/ID/GH/HO/191602506/black-men-noise-bluetooth-smartwatch.jpg",
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      description: "Compact speaker with 12-hour battery life and deep bass.",
      price: "$89.00",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "4K Ultra HD Monitor",
      description: "Crisp and vivid display, perfect for gaming or creative work.",
      price: "$349.99",
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=80&h=80&q=80",
    },
  ]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/product/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const filtered = products.filter((p) => p.id !== id);
        setProducts(filtered);
      } else {
        console.error("Failed to delete product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdate = async (id) => {
    const updatedProduct = products.find((p) => p.id === id);
    const newName = updatedProduct.name + " (Updated)";

    try {
      const response =await fetch(`/product/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...updatedProduct, name: newName }),
      });

      if (response.ok) {
        const updated = products.map((p) =>
          p.id === id ? { ...p, name: newName } : p
        );
        setProducts(updated);
      } else {
        console.error("Failed to update product.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="w-full mx-auto h-full px-8 max-[800px]:py-15  max-[800px]:px-2 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">PRODUCT LIST</h2>
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-sky-800 text-white text-sm">
          <tr>
            <th className="py-3 px-4 text-left">Product</th>
            <th className="py-3 px-4 text-left">Description</th>
            <th className="py-3 px-4 text-left">Price</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={product.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-blue-100 transition-all`}
            >
              <td className="py-4 px-4 flex items-center gap-4 max-[800px]:gap-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded object-cover shadow-sm max-[800px]:h-16"
                />
                <span className="font-medium max-[800px]:text-[12px] text-gray-800">
                  {product.name}
                </span>
              </td>
              <td className="py-4 px-6 text-gray-600 text-sm max-[800px]:text-[12px]">{product.description}</td>
              <td className="py-4 px-4 font-semibold text-cyan-700">{product.price}</td>
              <td className="py-4 px-4 flex items-center gap-4">
                <button
                  onClick={() => handleUpdate(product.id)}
                  className="text-yellow-500 hover:text-yellow-600"
                  title="Edit"
                >
                  <FaEdit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-600 hover:text-red-700"
                  title="Delete"
                >
                  <FaTrash size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
