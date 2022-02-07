import OrdersWidget from '../common/OrdersWidget';
import RevenueWidget from '../common/RevenueWidget';
import UserWidget from '../common/UserWidget';

const HomeDashboard = () => {
  return (
    <section className="p-10 flex gap-x-5 w-full flex-wrap">
      <RevenueWidget />
      <UserWidget />
      <OrdersWidget />
    </section>
  );
};

export default HomeDashboard;
