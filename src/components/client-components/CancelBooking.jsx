"use client";

import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";

export function CancelBooking({booking}) {

  const router=useRouter()

const {destinationName,_id}=booking

const handleDelete=async()=>{

const res=await fetch(`http://localhost:5000/bookings/${_id}`,{
  method:'DELETE'
})

const deletedData=await res.json()

console.log(deletedData)

if(deletedData?.deletedCount>0){
  router.refresh('/my-bookings')
}


} 

return (
    <AlertDialog>
      <Button variant="" className={'rounded-none border border-red-500 text-red-500'}><TrashBin/> Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onPress={handleDelete}>
                Delete Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}