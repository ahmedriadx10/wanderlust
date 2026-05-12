"use client";
import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
} from "@heroui/react";
import { redirect } from "next/navigation";

const NewDestinationPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const exactFormData = Object.fromEntries(formData.entries());

    console.log(exactFormData);
    const res = await fetch("http://localhost:5000/destinations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exactFormData),
    });

    const resResult = await res.json();

    console.log(resResult);

    if (resResult.insertId > 0) {
      redirect("/destinations");
    }
  };

  return (
    <section className="max-w-4xl mx-auto w-[90%] py-20">
      <div className="text-center space-y-2.5">
        <h2 className="text-4xl font-semibold">Create New Destination</h2>
        <p className="text-(--primaryText) ">
          Create a new destination for travelers to explore.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Destination Name */}
          <div className="md:col-span-2">
            <TextField name="destinationName" isRequired>
              <Label>Destination Name</Label>
              <Input
                placeholder="Bali Paradise"
                className="rounded-xl p-3 bg-[#eeeeee67] shadow-none"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Country */}
          <TextField name="country" isRequired>
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
              placeholder="Select category"
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
          <TextField name="price" type="number" isRequired>
            <Label>Price (USD)</Label>
            <Input
              type="number"
              placeholder="1299"
              className="rounded-xl p-3 bg-[#eeeeee67] shadow-none"
            />
            <FieldError />
          </TextField>

          {/* Duration */}
          <TextField name="duration" isRequired>
            <Label>Duration</Label>
            <Input
              placeholder="7 Days / 6 Nights"
              className="rounded-xl p-3 bg-[#eeeeee67] shadow-none"
            />
            <FieldError />
          </TextField>

          {/* Departure Date */}
          <div className="md:col-span-2">
            <TextField name="departureDate" type="date" isRequired>
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
            <TextField name="imageURL" isRequired>
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
            <TextField name="description" isRequired>
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

        <Button
          type="submit"
          variant="outline"
          className=" rounded-none w-full bg-cyan-500 text-white"
        >
          Add Destination
        </Button>
      </form>
    </section>
  );
};

export default NewDestinationPage;
