import { Link } from "react-router-dom";
import users from "../data/users";

function Users() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Users List
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {user.name}
            </h2>

            <p className="text-gray-500 mb-4">{user.email}</p>

            <Link
              to={`/users/${user.id}`}
              className="text-blue-600 hover:underline font-medium"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
