import React from 'react'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'

export default function ProductListItem(props) {
    return <div className='product-list-item'>
        <img
            height={200}
            src={`/products/${props.product.img}`}
        />
        <div><h4>{ props.product.title }</h4></div>
        <div>{ props.product.produtor}</div>
        <div>{ props.product.publicador }</div>
        <div>{ props.product.exclusivo }</div>
        <div>{ props.product.europa }</div>
        <div>{ props.product.referencia }</div>
        <div>{ props.product.preco }</div>
        <div>
            <AddBtn 
                cartItem={props.cartItem} 
                product={props.product} 
                addToCart={props.addToCart}
            />

            {
                props.cartItem
                    ? <RemoveBtn 
                    cartItem={props.cartItem} 
                    product={props.product} 
                    removeFromCart={props.removeFromCart}
                />
                : null
            }
        </div>
    </div>
}