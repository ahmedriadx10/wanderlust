"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { FaTrash } from "react-icons/fa";

export function DeleteModal({ destination }) {
  const {

    destinationName,
    _id,
  } = destination;



  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/destinations/${_id}`, {
      method:'DELETE'
    });

    // const deleteResult = await res.json();

    // console.log(deleteResult);

    // redirect("/destinations");
  };

  return (
    <AlertDialog>
      <Button
        variant="outline"
        className={
          "border border-red-500 flex items-center text-red-500 rounded-lg"
        }
      >
        {" "}
        <FaTrash /> Delete{" "}
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete {destinationName} permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button variant="danger" onPress={handleDelete}>
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
