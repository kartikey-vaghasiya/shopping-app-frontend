import React from "react";

export default function Filter(props) {
    // Handler for when a filter button is clicked
    function handleFilterClick(event) {
        props.setFilter(event.target.innerHTML);
    }

    const currFilter = props.filter;

    return (
        <div className="mt-5">
            {/* Filter Buttons */}
            <div className="mx-auto flex flex-row justify-center gap-2">
                {/* All */}
                <button
                    onClick={handleFilterClick}
                    className={`${currFilter === "All"
                            ? "bg-purple-700"
                            : "bg-purple-500"
                        } rounded-sm hover:bg-purple-700 text-white px-5 py-1`}
                >
                    All
                </button>
                {/* Fashion */}
                <button
                    onClick={handleFilterClick}
                    className={`${currFilter === "Fashion"
                            ? "bg-purple-700"
                            : "bg-purple-500"
                        } rounded-sm hover:bg-purple-700 text-white px-5 py-1`}
                >
                    Fashion
                </button>
                {/* Toys */}
                <button
                    onClick={handleFilterClick}
                    className={`${currFilter === "Toys"
                            ? "bg-purple-700"
                            : "bg-purple-500"
                        } rounded-sm hover:bg-purple-700 text-white px-5 py-1`}
                >
                    Toys
                </button>
                {/* Kitchen */}
                <button
                    onClick={handleFilterClick}
                    className={`${currFilter === "Kitchen"
                            ? "bg-purple-700"
                            : "bg-purple-500"
                        } rounded-sm hover:bg-purple-700 text-white px-5 py-1`}
                >
                    Kitchen
                </button>
            </div>
        </div>
    );
}
