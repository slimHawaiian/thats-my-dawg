import React from 'react';

const CartTable = (props) => {
    return ( 
        <>
            <h1>Cart</h1>
            <button id='btn-clear-cart' className='btn btn-link btn-muted'>clear cart</button>
            <div className="table-responsive">
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    );
}
 
export default CartTable;