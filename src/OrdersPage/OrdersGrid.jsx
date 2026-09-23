import OrderDetailsGrid from "./OrderDetailsGrid";
import OrdersHeader from "./OrdersHeader";

function OrdersGrid({ orders, loadCart }) {

  return (
    <>
      {orders.length > 0 && orders.map((order) => {
        return (
            <div key={order.id} className="order-container">

              <OrdersHeader order={order} />
              <OrderDetailsGrid order={order} loadCart={loadCart} />

            </div>
        );
      })}
    </>
  );
}

export default OrdersGrid;