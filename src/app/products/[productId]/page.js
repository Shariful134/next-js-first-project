import React from "react";

const ProductId = async ({ params, searchParams }) => {
  const productId = await params.productId;
  console.log(await searchParams);
  return (
    <div>
      <h2 className="text-4xl">This is productId: {productId}</h2>
    </div>
  );
};

export default ProductId;
