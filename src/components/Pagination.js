function Pagination({ currentPage, npage, prevPage, nextPage, goToPage }) {
  const numbers = [...Array(npage).keys()].map((num) => num + 1);

  return (
    <>
      <button
        className="border-2 border-black p-3 m-3 rounded-2xl bg-blue-700 text-white font-bold hover:bg-blue-700"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <div className="flex items-center overflow-x-auto">
        {numbers.map((number) => (
          <button
            key={number}
            className={`border-2 border-black p-3 m-1 rounded-2xl ${
              currentPage === number
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            } font-bold hover:bg-blue-300`}
            onClick={() => goToPage(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <button
        className="border-2 border-black p-3 m-3 rounded-2xl bg-blue-700 text-white font-bold hover:bg-blue-700"
        onClick={nextPage}
        disabled={currentPage === npage}
      >
        Next
      </button>
    </>
  );
}

export default Pagination;
