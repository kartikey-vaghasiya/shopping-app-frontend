import React from "react";
import Card from "./Card";
import data from "../data";
import Filter from "./Filter";

export default function CardContainer() {
    // State to store the products and selected filter
    const products = React.useState(data);
    const [filter, setFilter] = React.useState('All');

    // Filter the data based on the selected category
    const filteredData = products.filter((product) => {
        if (filter === 'All') {
            return true;
        } else if (product.catagory === filter) {
            return true;
        } else {
            return false;
        }
    });

    // Create cards based on filtered data
    const filteredCards = filteredData.map((product, index) => (
        <Card key={index} name={product.productName} price={product.price} image={product.imageSrc} />
    ));

    return (
        <div>
            {/* Filter Component */}
            <Filter filter={filter} setFilter={setFilter} />

            {/* Display Filtered Cards */}
            <div className="mx-auto my-5 w-auto flex flex-row max-w-[80%] flex-wrap gap-4 justify-center">
                {filteredCards}
            </div>
        </div>
    );
}
