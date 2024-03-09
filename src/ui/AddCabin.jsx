import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "./Button";
import Modal from "./Modal";

function AddCabin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsModalOpen((show) => !show)}>
        Add new cabin
      </Button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CreateCabinForm onCloseModel={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
