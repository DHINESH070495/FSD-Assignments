import { useParams, useNavigate } from "react-router-dom";
import users from "../data/users";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        User not found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          User Details
        </h1>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Name:</span> {user.name}
        </p>

        <p className="text-gray-700 mb-6">
          <span className="font-semibold">Email:</span> {user.email}
        </p>

        <button
          onClick={() => navigate("/users")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default UserDetail;
