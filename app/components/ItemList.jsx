import React from 'react';

function ItemList() {
    const ArrayOfItems = ['Item1', 'Item2', 'Item3'];
    const listItems = ArrayOfItems.map(item =>
        <li key={item}>{item}</li>
    );
    return (
        <div>
            {listItems}
        </div>
    );
}

export default ItemList;