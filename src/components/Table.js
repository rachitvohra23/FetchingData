function Table({ records, selectedRows, handleCheckbox }) {
  return (
    <table className="min-w-full border-collapse border border-gray-400">
      <thead>
        <tr className="text-left">
          <th className="border-2 text-xl border-black px-4 py-2">
            <input type="checkbox" disabled className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300"></input>
          </th>
          <th className="border-2 text-xl border-black px-4 py-2">Id</th>
          <th className="border-2 text-xl border-black px-4 py-2">Picture</th>
          <th className="border-2 text-xl border-black px-4 py-2">Name</th>
          <th className="border-2 text-xl border-black px-4 py-2">Email</th>
          <th className="border-2 text-xl border-black px-4 py-2">Phone</th>
          <th className="border-2 text-xl border-black px-4 py-2">Country</th>
        </tr>
      </thead>
      <tbody>
        {records.map((user, index) => (
          <tr
            key={user.login.uuid}
            className={selectedRows.includes(user.login.uuid) ? "bg-blue-300" : ""}
          >
            <td className="font-bold border-2 border-black px-4 py-2">
              <input
                className="cursor-pointer form-checkbox h-5 w-5 text-blue-900 rounded focus:ring-blue-700 border-gray-300"
                type="checkbox"
                checked={selectedRows.includes(user.login.uuid)}
                onChange={() => handleCheckbox(user.login.uuid)}
              ></input>
            </td>
            <td className="font-bold border-2 border-black px-4 py-2">{index + 1}</td>
            <td className="border-2 border-black px-4 py-2">
              <img
                src={user.picture.thumbnail}
                alt="User Thumbnail"
                className="rounded-full"
              />
            </td>
            <td className="font-bold border-2 border-black px-4 py-2">
              {`${user.name.first} ${user.name.last}`}
            </td>
            <td className="font-bold border-2 border-black px-4 py-2">{user.email}</td>
            <td className="font-bold border-2 border-black px-4 py-2">{user.phone}</td>
            <td className="font-bold border-2 border-black px-4 py-2">
              {user.location.country}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
