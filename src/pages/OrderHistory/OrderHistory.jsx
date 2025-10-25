import './OrderHistory.css'

import React, {useEffect, useState} from 'react';
import {latestOrders} from "../../service/OrderService.js";

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response=await latestOrders();
                setOrders(response.data);
            }catch(error){
                console.log(error);
            }finally {
                setLoading(false);
            }
        }
        fetchOrders();
    },[]);

    const formatItems = (item) => {
        return item.map((item)=>`${item.name} X ${item.quantity}`).join(', ');
    }

    const formatDate = (date) => {
        const options={
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }
        return new Date(date).toLocaleDateString('en-US', options);
    }

    if(loading){
        return <div className="text-center py-4">Loading Orders..</div>
    }

    if(orders.length === 0){
        return <div className="text-center py-4">No Orders Found</div>
    }

    return (
        <div className="orders-history-container">
            <h2 className="mb-2 text-light">All Orders</h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                    <tr>
                        <th>Oder Id</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order) => (
                        <tr key={order.orderId}>
                            <td>{order.id}</td>
                            <td>{order.customerName}<br/>
                                <small className="text-muted">{order.phoneNumber}</small>
                            </td>
                            <td>{formatItems(order.items)}</td>
                            <td>&#8377;{order.grandTotal}</td>
                            <td>{order.paymentMethod}</td>
                            <td>
                                <span className={`badge ${order.paymentDetails?.status === "COMPLETED"?"bg-success":"bg-warning text-dark"}`}>
                                    {order.paymentDetails?.status || "PENDING"}
                                </span>
                            </td>
                            <td>{formatDate(order.createdAt)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderHistory;