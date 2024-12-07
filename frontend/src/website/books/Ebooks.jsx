import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./books.scss";
import { AiOutlineSearch } from "react-icons/ai";
import defaultCover from "../../assets/cover404.jpg";
import { BASE_URL, getAllCategoriesWithoutPagination, getAllEBooks } from "../../http";
import Stars from "../../components/website/stars/Stars";
import { Pagination } from "../../components";

const EBooks = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [categories, setCategories] = useState(null);
  const [booksData, setBooksData] = useState(null);
  const [query, setQuery] = useState({ ISBN: "", title: "", category: "" });
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    try {
      const { data: books } = await getAllEBooks(query, currentPage, 10);
      const { data: categoriesData } = await getAllCategoriesWithoutPagination();
      setBooksData(books);
      setCategories(categoriesData?.categories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setCurrentPage(1);

    const handler = setTimeout(fetchData, 1000); // Debouncing
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div className="books__wrapper bg text__color">
      <Sidebar categories={categories} query={query} setQuery={setQuery} />
      <div className="main">
        <TopBar query={query} setQuery={setQuery} />
        <BooksSection booksData={booksData} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

const Sidebar = ({ categories, query, setQuery }) => (
  <div className="sidebar__wrapper bg__accent">
    <div className="sidebar__content">
      <h3>Categories</h3>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              checked={query?.category === ""}
              onChange={() => setQuery({ ...query, category: "" })}
            />
            All
          </label>
        </li>
        {categories?.map((category) => (
          <li key={category?._id}>
            <label>
              <input
                type="checkbox"
                name="category"
                checked={query.category === category?._id}
                onChange={() => setQuery({ ...query, category: category?._id })}
              />
              {category?.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TopBar = ({ query, setQuery }) => (
  <div className="topbar">
    <div className="left">
      <h3>EBOOKS</h3>
      <p>List of digital books</p>
    </div>
    <form className="input__box bg__accent" tabIndex="0">
      <input
        type="text"
        placeholder="Search books...."
        value={query.title}
        onChange={(e) => setQuery({ ...query, title: e.target.value })}
      />
      <AiOutlineSearch />
    </form>
  </div>
);

const BooksSection = ({ booksData, currentPage, setCurrentPage }) => (
  <section className="books__section">
    <div className="card__wrapper">
      {booksData?.books?.length ? (
        booksData.books.map((book) => <BookCard key={book?._id} book={book} />)
      ) : (
        <h1 style={{ margin: "20px auto" }}>Book Not Found</h1>
      )}
    </div>
    <Pagination currentPage={currentPage} data={booksData} setCurrentPage={setCurrentPage} />
  </section>
);

const BookCard = ({ book }) => (
  <div className="card bg__accent">
    <img
      src={book?.imagePath ? `${BASE_URL}/${book?.imagePath}` : defaultCover}
      alt="Book Cover"
    />
    <div className="content">
      <h5>{book?.title}</h5>
      <p>By {book?.author}</p>
      <Stars rating={book?.rating} />
      <p>
        {book?.totalReviews} Reviews | {book?.rating} out of 5
      </p>
      <div className="action">
        <Link className="btn btn__secondary" to={`/ebooks/${book?._id}`}>
          View Details _id
        </Link>
      </div>
    </div>
  </div>
);

export default EBooks;
