import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddPackage.css";

const AddPackage = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://howling-treat-26209.herokuapp.com/packages", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added Successfully.");
          reset();
        }
      });
  };
  return (
    <div className="newPackage">
      <h2>Add Your New Package</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="my-2 w-50 p-2 fs-5 rounded"
          placeholder="Location Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <br />
        <input
          className="my-2 w-50 p-2 fs-5 rounded"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <br />
        <input
          className="my-2 w-50 p-2 fs-5 rounded"
          placeholder="Image URL"
          {...register("img")}
        />
        <br />
        <textarea
          className="my-2 w-50 p-2 fs-5 rounded"
          placeholder="Description"
          {...register("description")}
        />
        <br />
        <input type="submit" className="add-btn" />
      </form>
    </div>
  );
};

export default AddPackage;
