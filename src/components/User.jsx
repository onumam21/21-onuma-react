function User({employees}) {

  return (
<div className="p-4">
  <h2 className="font-bold text-2xl mb-4">Employee List</h2>
  <table className="min-w-full bg-white rounded shadow-md overflow-hidden">
    <thead className="bg-gray-200">
      <tr>
        <th scope="col" className="py-2 px-4 text-left">First Name</th>
        <th scope="col" className="py-2 px-4 text-left">Last Name</th>
        <th scope="col" className="py-2 px-4 text-left">Position</th>
      </tr>
    </thead>
    <tbody>
      {employees.map((employee, index) => (
        <tr key={index} className="border-t border-gray-200">
          <th scope="row" className="py-2 px-4">{employee.firstName}</th>
          <td className="py-2 px-4">{employee.lastName}</td>
          <td className="py-2 px-4">{employee.position}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

export default User;
