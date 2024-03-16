import Stat from "./Stat";
import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
function Stats({ bookings, confirmedStays }) {
  // 1. bookings
  const numBookings = bookings.length;
  //2. sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  //3. check in
  const checkins = confirmedStays.length;
  //4. occupation
  const occupation = confirmedStays.reduce(
    (acc, cur) => acc + cur.numNights,
    0
  );
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        value={numBookings}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title="Sales"
        color="green"
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title="Check ins"
        color="indigo"
        value={checkins}
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        value={occupation}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
