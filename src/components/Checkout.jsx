import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../util/formatting';
import Input from './UI/Input';
import Button from './UI/Button';

export default function Checkout() {

    const cartCtx = useContext(CartContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
      );

  return (
    <Modal className='checkout'>
        <form>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

            <Input id='Full Name' label='full-name' type='text' />
            <Input id='E-mail' label='Email Address' type='email' />
            <Input id='street-address' label='Street Address' type='text' />
            <div className='control-row'>
                <Input id='postal-code' label='Postal Code' type='text'/>
                <Input id='city' label='City' type='text'/>
            </div>
            <p className='modal-actions'>
                <Button textOnly type='button' >Close</Button>
                <Button >Submit Order</Button>
            </p>
        </form>
    </Modal>
  )
}
