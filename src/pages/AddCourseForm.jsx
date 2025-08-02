import React, { useCallback, useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createNewCourse } from "../../redux/courseSlice";

const AddCourseForm = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [image, setImage] = useState();

  const dispatch = useDispatch();
  const { course, loading, error } = useSelector((state) => state.course);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setImage(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const SubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("coursename", courseName);
    formData.append("coursedesc", description);
    formData.append("baseprice", basePrice);
    formData.append("price", discountedPrice);
    formData.append("image", image);

    dispatch(createNewCourse(formData));
  };

  useEffect(() => {
    if (course) {
      toast.success("Course Submitted Successfully");
      setCourseName("");
      setDescription("");
      setBasePrice("");
      setDiscountedPrice("");
      setImage();
    }
  }, [course]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <SideBar />

      <div className="w-full p-6 md:p-10 mt-20">
        <div className="mb-6">
          <p className="text-gray-500 text-sm">Form</p>
          <h1 className="text-2xl md:text-3xl font-semibold text-[#0B7077]">
            Add New Course
          </h1>
        </div>

        <form onSubmit={SubmitForm} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Course Name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
              required
            />
            <input
              type="number"
              placeholder="Base Price"
              value={basePrice}
              onChange={(e) => setBasePrice(e.target.value)}
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
              required
            />
            <input
              type="number"
              placeholder="Discounted Price"
              value={discountedPrice}
              onChange={(e) => setDiscountedPrice(e.target.value)}
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
              required
            />
          </div>

          <textarea
            placeholder="Course Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-md px-4 py-3 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-[#0B7077]"
            required
          />

          {/* Image Upload */}
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-md px-6 py-10 text-center cursor-pointer transition-all ${
              isDragActive ? "border-[#0B7077]" : "border-gray-300"
            }`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-[#0B7077] font-medium">
                Drop the image here...
              </p>
            ) : image ? (
              <div>
                <p className="text-gray-700 font-medium mb-2">
                  Selected file: {image.name}
                </p>
                <img
                  src={URL.createObjectURL(image)}
                  alt="preview"
                  className="w-32 h-20 mx-auto object-cover rounded"
                />
              </div>
            ) : (
              <p className="text-gray-500">
                Drag & drop course image here, or{" "}
                <span className="text-[#0B7077] font-semibold">
                  click to select
                </span>
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#0B7077] text-white text-sm px-6 py-3 rounded-lg hover:bg-[#0B7077]/90 transition-all"
            >
              {loading ? "Submitting..." : "Submit"}{" "}
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseForm;
