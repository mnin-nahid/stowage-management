import React from 'react';

const ManageQuantity = () => {
    return (
        <div className='d-flex justify-content-center my-5'>
            <div className='me-5'>
                <input type="number" name="quantity" id="" />
                <br />
                <input className='mt-2' type="submit" value="Update Quantity" />
            </div>
            <div className='ms-5'>
                <input type="number" name="quantity" id="" />
                <br />
                <input className='mt-2' type="submit" value="Delivered Product" />
                {/* <button className='btn btn-dark'>Deliver</button> */}
            </div>
        </div>
    );
};

export default ManageQuantity;