import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "./Button";
import Modal from "./Modal";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add New Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

// function AddCabin() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsModalOpen((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isModalOpen && (
//         <Modal onClose={() => setIsModalOpen(false)}>
//           <CreateCabinForm onCloseModel={() => setIsModalOpen(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
