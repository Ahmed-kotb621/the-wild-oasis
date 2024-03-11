import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
function BookingTable() {
  const { data, isLoading } = useBookings();

  if (isLoading) return <Spinner />;
  return (
    <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
      <Table.Header>
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={data}
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
      />
      <Table.Footer>
        <Pagination count={15} />
      </Table.Footer>
    </Table>
  );
}

export default BookingTable;
