import React, { useContext } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import cartContext from '../../contexts/cart/cartContext';
import { useTheme } from '../../contexts/themeContext'; // Import the useTheme hook

const QuantityBox = (props) => {
    const { itemId, itemQuantity } = props;
    const { incrementItem, decrementItem } = useContext(cartContext);
    const { theme } = useTheme(); // Access the theme context

    // Define styles based on theme
    const buttonStyle = {
        color: theme === 'light' ? '#333' : '#fff', // Use theme-aware color
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333', // Use theme-aware background color
    };

    return (
        <div className="quantity_box">
            <button
                type="button"
                onClick={() => decrementItem(itemId)}
                style={buttonStyle} // Apply button styles
            >
                <FaMinus />
            </button>
            <span className="quantity_count">
                {itemQuantity}
            </span>
            <button
                type="button"
                onClick={() => incrementItem(itemId)}
                disabled={itemQuantity >= 5}
                style={buttonStyle} // Apply button styles
            >
                <FaPlus />
            </button>
        </div>
    );
};

export default QuantityBox;
