import React, { useContext } from 'react';
import { TbTrash } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { displayMoney } from '../../helpers/utils';
import cartContext from '../../contexts/cart/cartContext';
import QuantityBox from '../common/QuantityBox';
// import { useTheme } from '../../contexts/themeContext';
import { useTheme } from '../../contexts/themeContext';


const CartItem = (props) => {
    const { id, images, title, info, finalPrice, originalPrice, quantity, path } = props;
    const { removeItem } = useContext(cartContext);
    const { theme } = useTheme(); // Access the theme context
    const newPrice = displayMoney(finalPrice);
    const oldPrice = displayMoney(originalPrice);

    // Define styles based on theme
    const cartItemImgStyle = {
        width: '100px',
        height: 'auto',
        marginRight: '20px',
    };

    const cartItemInfoStyle = {
        flex: '1',
    };

    const cartItemTitleStyle = {
        fontSize: '1.2rem',
        color: theme === 'light' ? '#333' : '#fff', // Use theme-aware color
    };

    const cartItemPriceStyle = {
        fontSize: '1.1rem',
        color: theme === 'light' ? '#ff5733' : '#ffa500', // Use theme-aware color
    };

    const cartItemPriceSmallStyle = {
        color: theme === 'light' ? '#999' : '#ccc', // Use theme-aware color
    };

    const tooltipStyle = {
        fontSize: '0.8rem',
        color: theme === 'light' ? '#666' : '#bbb', // Use theme-aware color
    };

    return (
        <div className="cart_item">
            <figure style={cartItemImgStyle} className="cart_item_img">
                <Link to={`${path}${id}`}>
                    <img src={images[0]} alt="product-img" />
                </Link>
            </figure>
            <div style={cartItemInfoStyle} className="cart_item_info">
                <div className="cart_item_head">
                    <h4 style={cartItemTitleStyle} className="cart_item_title">
                        <Link to={`/product-details/${id}`}>{title} {info}</Link>
                    </h4>
                    <div className="cart_item_del">
                        <span onClick={() => removeItem(id)}>
                            <TbTrash />
                        </span>
                        <div style={tooltipStyle} className="tooltip">Remove Item</div>
                    </div>
                </div>
                <h2 style={cartItemPriceStyle} className="cart_item_price">
                    {newPrice} &nbsp;
                    <small style={cartItemPriceSmallStyle}><del>{oldPrice}</del></small>
                </h2>
                <QuantityBox itemId={id} itemQuantity={quantity} />
            </div>
        </div>
    );
};

export default CartItem;
