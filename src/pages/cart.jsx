import React from "react";
import { useShopping } from "../proxyBackend/shopping.jsx";

export default function Cart() {
  const { cartList, getTotal } = useShopping();
  return (
    <>
      <div className="mx-auto mt-20 mb-10 flex flex-col justify-center">
        <h2 className="text-xl mx-auto">Cart</h2>
        <h1 className="text-3xl sm:text-5xl text-amber-600 mx-auto my-5">
          SWEETMARKET
        </h1>
      </div>
      <table className="min-w-full divide-y divide-gray-200 mb-20">
        <thead className="bg-gray-50">
          <tr>
            <th className="hidden sm:block px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {cartList && cartList.length > 0 ? (
            <>
              {cartList.map((product) => (
                <tr key={product.name}>
                  <td className="hidden sm:block px-6 py-4 whitespace-nowrap">
                    <img
                      className="h-10 w-10"
                      src={product.img}
                      alt={product.name}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {product.price} $
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="hidden sm:block"></td>
                <td colSpan={3} className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    Total: {getTotal()} $
                  </div>
                  <button className="sm:hidden text-white bg-black px-2 py-1 sm:px-4 sm:py-2 rounded-3xl hover:bg-gray-800">
                    Proceed to checkout
                  </button>
                </td>
                <td>
                  <button className="hidden sm:block text-white bg-black px-2 py-1 sm:px-4 sm:py-2 rounded-3xl hover:bg-gray-800">
                    Proceed to checkout
                  </button>
                </td>
              </tr>
            </>
          ) : (
            <tr>
              <td colSpan={4} className="px-6 py-4 whitespace-nowrap">
                <p className="text-sm text-gray-900">No products in the cart</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
