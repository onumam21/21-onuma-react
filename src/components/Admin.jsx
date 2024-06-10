function Admin({
  employees,
  firstName,
  lastName,
  position,
  handleSubmit,
  deleteEmployee,
  setEmployees,
  setFirstName,
  setLastName,
  setPosition,
}) {
  
  return (
<div className="p-4">
  <form
    onSubmit={handleSubmit}
    className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white p-4 rounded shadow"
  >
    <label className="flex flex-col">
      First Name:
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="mt-1 p-2 border border-gray-300 rounded"
      />
    </label>
    <label className="flex flex-col">
      Last Name:
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="mt-1 p-2 border border-gray-300 rounded"
      />
    </label>
    <label className="flex flex-col">
      Position:
      <input
        type="text"
        name="position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="mt-1 p-2 border border-gray-300 rounded"
      />
    </label>
    <div className="flex items-end">
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </div>
  </form>

  <div className="mt-8">
    <h2 className="font-bold text-xl mb-4">List of Employees</h2>
    <table className="min-w-full bg-white rounded shadow overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          <th scope="col" className="py-2 px-4 text-left">First Name</th>
          <th scope="col" className="py-2 px-4 text-left">Last Name</th>
          <th scope="col" className="py-2 px-4 text-left">Position</th>
          <th scope="col" className="py-2 px-4 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index} className="border-t border-gray-200">
            <td className="py-2 px-4">{employee.firstName}</td>
            <td className="py-2 px-4">{employee.lastName}</td>
            <td className="py-2 px-4">{employee.position}</td>
            <td className="py-2 px-4">
              <button
                onClick={() => deleteEmployee(index)}
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
}

export default Admin;
