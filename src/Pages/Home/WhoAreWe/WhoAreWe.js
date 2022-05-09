import React from 'react';
import warehouse from '../../../images/warehouse.jpg'

const WhoAreWe = () => {
    return (
        <div className='my-5'>
            <h2 className='text-center font-weight-normal my-4'>Who Are We</h2>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={warehouse} alt="" />
                    </div>
                    <div className="col-6">
                        <h3 className='text-primary'>
                            Warehousing
                        </h3>
                        <p>Our warehousing solutions are structured to maximize your operating efficiencies. Count on us for short and long-term storage, distribution , QC Platform or short term storage.WAC’s warehouse in Dhaka and Chittagong is adjacent to the cargo terminal of international airport and Chittagong Port respectively.The experience staffs with modern equipment supervise movements of freight in and out of the warehouse.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoAreWe;