"use client";

import {Button, FieldError, Input, Label, Modal, Surface, TextField,Select, ListBox,TextArea, AlertDialog} from "@heroui/react";
import { redirect } from "next/navigation";

import { useState } from "react";
import { FaPen } from "react-icons/fa";

export function EditModal({destination}) {


  const {description,imageURL,departureDate,duration,price,category,country,destinationName,_id}=destination


const handleSubmit=async(e)=>{

e.preventDefault()

const formData=new FormData(e.currentTarget)
const exactFormData= Object.fromEntries(formData.entries())


console.log(exactFormData)

const res=await fetch(`http://localhost:5000/destinations/${_id}`,{
  method:'PATCH',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(exactFormData)
})

const updateResult=await res.json()

if(updateResult.modifiedCount>0){

redirect(`/destinations/details/${_id}`)

}



}


  return (
    <Modal>
      <Button slot={'close'} variant="outline" className={'flex items-center rounded-lg'}> <FaPen/> Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">

<FaPen/>
              </Modal.Icon>
              <Modal.Heading>Update Destination</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
           <form onSubmit={handleSubmit} className="p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Destination Name */}
          <div className="md:col-span-2">
            <TextField name="destinationName" defaultValue={destinationName} isRequired>
              <Label>Destination Name</Label>
              <Input
                placeholder="Bali Paradise"
                className="rounded-xl p-3 bg-[#eeeeee67] shadow-none"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Country */}
          <TextField name="country" defaultValue={country} isRequired>
            <Label>Country</Label>
            <Input
              placeholder="Indonesia"
              className="rounded-xl p-3 bg-[#eeeeee67] shadow-none"
            />
            <FieldError />
          </TextField>

          {/* Category - Updated Select Component */}
          <div>
            <Select
              name="category"
              isRequired
              className="w-full"
              placeholder="Select category" defaultValue={category}
            >
              <Label>Category</Label>
              <Select.Trigger className="rounded-xl p-3 bg-[#eeeeee67] shadow-none">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Beach" textValue="Beach">
                    Beach
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Mountain" textValue="Mountain">
                    Mountain
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="City" textValue="City">
                    City
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Adventure" textValue="Adventure">
                    Adventure
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Cultural" textValue="Cultural">
                    Cultural
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Luxury" textValue="Luxury">
                    Luxury
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Price */}
          <TextField name="price" type="number" defaultValue={price} isRequired>
            <Label>Price (USD)</Label>
            <Input
              type="number"
              placeholder="1299"
              className="rounded-xl p-3 bg-[#eeeeee67] shadow-none"
            />
            <FieldError />
          </TextField>

          {/* Duration */}
          <TextField name="duration" defaultValue={duration} isRequired>
            <Label>Duration</Label>
            <Input
              placeholder="7 Days / 6 Nights"
              className="rounded-xl p-3 bg-[#eeeeee67] shadow-none"
            />
            <FieldError />
          </TextField>

          {/* Departure Date */}
          <div className="md:col-span-2">
            <TextField name="departureDate"    type="date" isRequired>
              <Label>Departure Date</Label>
              <Input
             
                type="date"
                className="rounded-xl p-3 bg-[#eeeeee67] shadow-none"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Image URL - Removed preview */}
          <div className="md:col-span-2">
            <TextField name="imageURL" defaultValue={imageURL} isRequired>
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/bali-paradise.jpg"
                className="rounded-xl p-3 bg-[#eeeeee67] shadow-none"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField name="description" defaultValue={description} isRequired>
              <Label>Description</Label>
              <TextArea
                placeholder="Describe the travel experience..."
                className="rounded-xl p-3 bg-[#eeeeee67] shadow-none"
              />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Buttons */}

<div className="flex justify-between items-center">
        <Button
   
          variant="outline"
          className=" rounded-lg text-(--primaryText)"
    slot={'close'}
        >
         Cancel
        </Button>
        <Button
          type="submit"
          variant="outline"
          className=" rounded-lg  bg-cyan-500 text-white"
slot={'close'}    
        >
         Save
        </Button>

</div>
      </form>
              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}