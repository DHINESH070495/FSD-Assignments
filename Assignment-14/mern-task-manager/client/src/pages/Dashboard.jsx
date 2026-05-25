import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("token");

  // Protect Dashboard
  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      fetchCustomers();
    }
  }, []);

  // Fetch Customers
  const fetchCustomers = async () => {
    try {
      const res = await axios.get(
        "https://fsd-assignments.onrender.com/api/customers",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setCustomers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Form Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add or Update Customer
  const addCustomer = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        // UPDATE
        await axios.put(
          `https://fsd-assignments.onrender.com/api/customers/${editingId}`,
          formData,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setEditingId(null);
      } else {
        // ADD
        await axios.post(
          "https://fsd-assignments.onrender.com/api/customers",
          formData,
          {
            headers: {
              Authorization: token,
            },
          }
        );
      }

      // Clear Form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
      });

      fetchCustomers();
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Customer
  const deleteCustomer = async (id) => {
    try {
      await axios.delete(
        `https://fsd-assignments.onrender.com/api/customers/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      fetchCustomers();
    } catch (error) {
      console.log(error);
    }
  };

  // Edit Customer
  const editCustomer = (customer) => {
    setFormData({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      company: customer.company,
    });

    setEditingId(customer._id);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Heading */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              Customer Dashboard
            </h1>

            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Total Customers: {customers.length}
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
            <h2 className="text-2xl font-semibold mb-5">
              {editingId ? "Edit Customer" : "Add Customer"}
            </h2>

            <form
              onSubmit={addCustomer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Customer Name"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="Phone"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="company"
                value={formData.company}
                placeholder="Company"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />

              <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition duration-300 md:col-span-2 lg:col-span-4">
                {editingId ? "Update Customer" : "Add Customer"}
              </button>
            </form>
          </div>

          {/* Customer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customers.map((customer) => (
              <div
                key={customer._id}
                className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {customer.name}
                </h2>

                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    {customer.email}
                  </p>

                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    {customer.phone}
                  </p>

                  <p>
                    <span className="font-semibold">Company:</span>{" "}
                    {customer.company}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-5">
                  <button
                    onClick={() => editCustomer(customer)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition duration-300 w-full"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteCustomer(customer._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300 w-full"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {customers.length === 0 && (
            <div className="text-center mt-10 text-gray-500 text-xl">
              No customers found
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;