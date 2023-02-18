import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Components/Search/Search";
import Post from "./Components/Post/Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));

    return () => {
      console.log("Unmounted");
    };
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  var filterPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  console.log("Filter Posts", filterPosts);

  return (
    <div className="App">
      <div className="search-bar">
        <Search searchValue={searchValue} handleSearch={handleSearch} />
        <div className="cards">
          {filterPosts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            );
          })}
        </div>
      </div>
      <div>
        <button className="next-page-button" onClick={nextPage}>
          Load More Posts
        </button>
      </div>
    </div>
  );
}

export default App;
