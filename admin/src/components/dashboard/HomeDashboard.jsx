import OrdersWidget from '../common/OrdersWidget';
import UserWidget from '../common/UserWidget';

const HomeDashboard = () => {
  return (
    <section className="p-10 flex gap-x-5 w-full">
      <UserWidget />
      <OrdersWidget />
    </section>
  );
};

export default HomeDashboard;
