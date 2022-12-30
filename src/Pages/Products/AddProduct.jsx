import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const AddProduct = ({ setModalOpen }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async () => {
    toast("Product Added!");
    setModalOpen(false);
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className=" container mx-auto">
            <label
              htmlFor="my-modal-6"
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </label>
            <div className="text-2xl font-bold text-secondary text-center ">
              ADD PRODUCT
            </div>
            <hr />
            <div className="my-2 flex flex-col justify-center items-center">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-xs lg:max-w-2xl"
              >
                <div className="w-full max-w-xs lg:max-w-2xl">
                  <label className="label">
                    <span className="label-text font-bold text-primary">
                      Title
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered bg-accent w-full max-w-xs lg:max-w-2xl"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Title is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="w-full max-w-xs lg:max-w-2xl">
                  <label className="label">
                    <span className="label-text font-bold text-primary">
                      Brand
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered bg-accent w-full max-w-xs lg:max-w-2xl"
                    {...register("brand", {
                      required: {
                        value: true,
                        message: "Brand is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.brand?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.brand.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="w-full max-w-xs lg:max-w-2xl">
                  <label className="label">
                    <span className="label-text font-bold text-primary">
                      Category
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered bg-accent w-full max-w-xs lg:max-w-2xl"
                    {...register("cat", {
                      required: {
                        value: true,
                        message: "Category is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.cat?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.cat.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="w-full max-w-xs lg:max-w-2xl">
                  <label className="label">
                    <span className="label-text font-bold text-primary">
                      Price
                    </span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered bg-accent w-full max-w-xs lg:max-w-2xl"
                    {...register("price", {
                      required: {
                        value: true,
                        message: "Price is Required",
                      },
                      min: {
                        value: 0,
                        message: "Must Be Positive",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.price?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.price.message}
                      </span>
                    )}
                    {errors.price?.type === "min" && (
                      <span className="label-text-alt text-red-500">
                        {errors.price.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="w-full max-w-xs lg:max-w-2xl">
                  <label className="label">
                    <span className="label-text font-bold text-primary">
                      Stock
                    </span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered bg-accent w-full max-w-xs lg:max-w-2xl"
                    {...register("quantity", {
                      required: {
                        value: true,
                        message: "Available Quantity is Required",
                      },
                      min: {
                        value: 0,
                        message: "Must Be Positive",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.quantity?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.quantity.message}
                      </span>
                    )}
                    {errors.quantity?.type === "min" && (
                      <span className="label-text-alt text-red-500">
                        {errors.quantity.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="w-full max-w-xs lg:max-w-2xl">
                  <label className="label">
                    <span className="label-text font-bold text-primary">
                      Description
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered bg-accent w-full max-w-xs lg:max-w-2xl"
                    {...register("desc", {
                      required: {
                        value: true,
                        message: "Description is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.desc?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.desc.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text font-bold text-primary">
                      Image
                    </span>
                  </label>
                  <input
                    type="file"
                    className="input bg-accent p-2 w-full max-w-xs lg:max-w-2xl"
                    {...register("image", {
                      required: {
                        value: true,
                        message: "Image is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <button
                  className="btn btn-md bg-secondary mt-4 w-full"
                  type="submit"
                >
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
