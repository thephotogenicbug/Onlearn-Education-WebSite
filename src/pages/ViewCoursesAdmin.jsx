import React, { useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourseAdmin, getCoursesAdmin } from "../../redux/courseSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const ViewCoursesAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courses, error, loading } = useSelector((state) => state.course);

  const handleDelete = (course) => {
    if (
      window.confirm(`Are you sure you want to delete "${course.courseName}"?`)
    ) {
      dispatch(deleteCourseAdmin(course._id));
    }
  };

  useEffect(() => {
    dispatch(getCoursesAdmin());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <SideBar />
      <div className="w-full p-6 mt-20">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#0B7077] mb-6">
          View Added Courses
        </h1>

        {loading ? (
          <div className="text-center py-10 text-gray-600 text-lg">
            Loading courses...
          </div>
        ) : courses?.length === 0 ? (
          <div className="text-center py-10 text-gray-600 text-lg">
            No courses found.
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-xl shadow-md">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs uppercase bg-[#f0f0f0] text-gray-700">
                <tr>
                  <th className="px-6 py-4">Thumbnail</th>
                  <th className="px-6 py-4">Course Name</th>
                  <th className="px-6 py-4">Base Price</th>
                  <th className="px-6 py-4">Discounted Price</th>
                  <th className="px-6 py-4">No. of Students</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr
                    key={course._id}
                    className="border-t hover:bg-gray-50 transition duration-150"
                  >
                    <td className="px-6 py-4">
                      <img
                        src={course.image}
                        alt={course.courseName}
                        className="w-20 rounded-lg shadow-sm"
                      />
                    </td>
                    <td className="px-6 py-4 font-medium">
                      {course.courseName}
                    </td>
                    <td className="px-6 py-4">₹{course.Baseprice}</td>
                    <td className="px-6 py-4">₹{course.price}</td>
                    <td className="px-6 py-4">{course.noOfStudents}</td>
                    <td className="px-6 py-4 space-x-4 text-lg">
                      <Link to={`/admin/edit-course/${course._id}`}>
                        <i className="fa-solid fa-pencil text-orange-500 hover:text-orange-600 transition cursor-pointer"></i>
                      </Link>
                      <i
                        className="fa-solid fa-trash text-red-500 hover:text-red-600 transition cursor-pointer"
                        onClick={() => handleDelete(course)}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCoursesAdmin;
