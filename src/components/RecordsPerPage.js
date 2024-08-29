function RecordsPerPage({ recordsPerPage, handleRecordsChange }) {
  return (
    <div className="mt-1 p-2 font-bold">
      <label htmlFor="records-per-page" className="mr-2">
        Records per page:
      </label>
      <select
        id="records-per-page"
        value={recordsPerPage}
        onChange={handleRecordsChange}
        className="border-2 border-black p-2 rounded-2xl cursor-pointer"
      >
        <option value={15}>15</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </div>
  );
}

export default RecordsPerPage;
