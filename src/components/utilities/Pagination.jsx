const Pagination = ({page, lastPage, setPage}) => {

  const scrollTop = () => {
    if (window.scrollY > 0) { 
      window.scrollTo({
        behavior: "smooth",
        top: 0
      });
    }
  };
  

  const handleNextPage = () => {
    setPage((prevstate) => prevstate + 1)
    scrollTop()
  }

  const handlePrevPage = () => {
    setPage((prevstate) => prevstate - 1)
    scrollTop()
  }

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      {
        page <= 1 ? null :<button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Prev</button>
      }

      <p>{page} of {lastPage}</p>

      <button onClick={handleNextPage} className="transtion-all hover:text-color-accent">Next</button>

    </div>
  );
}

export default Pagination