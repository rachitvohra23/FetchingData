import { useEffect, useState } from "react";
import Table from "./Table";
import Pagination from "./Pagination";
import RecordsPerPage from "./RecordsPerPage";

const API = "https://randomuser.me/api/?results=100";

function UserInfo() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(15); 
  const [selectedRows, setSelectedRows] = useState([]);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = users.slice(firstIndex, lastIndex);

  const npage = Math.ceil(users.length / recordsPerPage);

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, npage));
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRecordsChange = (e) => {
    setRecordsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleCheckbox = (uuid) => {
    setSelectedRows((prev) => {
      if (prev.includes(uuid)) {
        return prev.filter((row) => row !== uuid);
      } else {
        return [...prev, uuid];
      }
    });
  };

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setUsers(data.results);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-5 text-center">
        Fetching User Data (Using Pagination Concept)
      </h1>
      <div className="flex items-center justify-center mt-2 mb-3 flex-wrap">
        <Pagination
          currentPage={currentPage}
          npage={npage}
          prevPage={prevPage}
          nextPage={nextPage}
          goToPage={goToPage}
        />
        <RecordsPerPage
          recordsPerPage={recordsPerPage}
          handleRecordsChange={handleRecordsChange}
        />
      </div>
      <div className="overflow-x-auto">
        <Table
          records={records}
          selectedRows={selectedRows}
          handleCheckbox={handleCheckbox}
        />
      </div>
    </>
  );
}

export default UserInfo;
