import React from "react";

export default function Card(props) {
    return (
        <div className="flex flex-col gap-2 justify-between shadow-2xl p-2">
            {/* Product Image */}
            <div className="relative">
                <img
                    src={props.image}
                    alt="Product"
                    className="w-[200px] max-h-[300px]"
                />
                {/* Price Tag */}
                <span className="absolute bottom-2 right-2 z-1 bg-white px-5 py-2 rounded-sm">
                    {`${props.price} Rs.`}
                </span>
            </div>

            {/* Product Information */}
            <div className="flex flex-col gap-2">
                {/* Product Name */}
                <h1 className="text-lg font-bold">{props.name}</h1>

                {/* Buttons */}
                <div className="flex flex-row gap-2">
                    {/* Add to Cart Button */}
                    <button className="px-3 py-3 text-xl bg-black text-white">
                        Buy
                    </button>
                    {/* Add to Wishlist Button */}
                    <button className="px-2 py-2 bg-black text-white">
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
}
