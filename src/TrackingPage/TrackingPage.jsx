import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar'
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import './TrackingPage.css'
import { useEffect, useState } from "react";
import axios from "axios";

function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchTrackingDetails = async () => {
      const response = await axios.get(`/api/orders/${orderId}?expand=products`);
      setOrder(response.data);
    }
    fetchTrackingDetails();
  }, [orderId]);

  if (!order) {
    return (null);
  }
  

  const orderProduct = order.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  })

  if (!orderProduct) {
    return (
      <>
        <Navbar cart={cart} />
        <div className="tracking-page">
          <p>Product with ID {productId} not found in order {orderId}.</p>
        </div>
      </>
    )
  }

  const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs

  const timePassedMs = dayjs().valueOf() - order.orderTimeMs

  let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100
  

  if (deliveryPercent > 100) {
    deliveryPercent = 100
  }

  const isPreparing = deliveryPercent < 33
  const isShipped = deliveryPercent >= 33 && deliveryPercent < 100
  const isDelivered = deliveryPercent === 100

  return (
    <>
      <Navbar cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            {deliveryPercent >= 100 ? 'delivered on' : 'Arriving on'} {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
          </div>

          <div className="product-info">
            {orderProduct.product.name}
          </div>

          <div className="product-info">
            Quantity: {orderProduct.quantity}
          </div>

          <img className="product-image" src={`/${orderProduct.product.image}`} />

          <div className="progress-labels-container">
            <div className={`progress-label ${isPreparing && 'current-status'}`}>
              Preparing
            </div>
            <div className={`progress-label ${isShipped && 'current-status'}`}>
              Shipped
            </div>
            <div className={`progress-label ${isDelivered && 'current-status'}`}>
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${deliveryPercent}%` }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackingPage;