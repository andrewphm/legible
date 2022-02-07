import OrdersWidget from '../common/OrdersWidget';
import RevenueWidget from '../common/RevenueWidget';
import UserWidget from '../common/UserWidget';
import Chart from '../common/Chart';

const HomeDashboard = () => {
  return (
    <section className="py-10 flex gap-y-5 w-screen flex-col">
      <div className="flex h-[380px] w-full gap-x-14">
        <UserWidget />
        <OrdersWidget />
      </div>

      <div className="flex h-[350px] w-full gap-x-14">
        <RevenueWidget />
        <Chart />
      </div>
    </section>
  );
};

export default HomeDashboard;
