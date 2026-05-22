function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300">

      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded"
      />

      {/* Title */}
      <h2 className="text-lg font-semibold mt-3">
        {product.title}
      </h2>

      {/* Price */}
      <p className="text-gray-700 font-medium">
        ₹ {product.price}
      </p>

      {/* Expensive Badge */}
      {product.price > 1000 && (
        <span className="inline-block bg-yellow-400 text-black text-xs px-2 py-1 rounded mt-2">
          Premium
        </span>
      )}

      {/* Stock Status */}
      <div className="mt-2">
        {product.inStock ? (
          <span className="text-green-600 font-semibold">
            In Stock 
          </span>
        ) : (
          <span className="text-red-600 font-semibold">
            Sold Out 
          </span>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
