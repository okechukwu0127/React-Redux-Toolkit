import React, { useState } from "react";
import logo from "./logo.svg";
import "./styles/App.css";

import { useNewsQuery, useDeleteNewsMutation } from "./services/newsApi";
import AddNews from "./components/AddNews";
import UpateNews from "./components/UpateNews";
import ModalBox from "./utils/ModalBox";

function App() {
  const { data, isLoading, isSuccess, isFetching, error } = useNewsQuery();
  const [deleteNews] = useDeleteNewsMutation();

  const [newsId, useNewsId] = useState<number>(0);
  const HandleClick = (id: number) => {
    useNewsId(id);
  };

  const HandleDeleteClick = async (id: number) => {
    //alert(id);
    await deleteNews(id);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Redux Toolkit </h1>
        <h4>RTK Query App</h4>
        {isLoading && <h6>Loading...</h6>}
        {isFetching && <h6>Fetching...</h6>}
        {error && <h6>Error: {JSON.stringify(error)} </h6>}
        {isSuccess && (
          <div style={{ marginTop: 100, width: "60%" }}>
            <AddNews news={data || []} />
            {newsId > 0 ? <ModalBox id={newsId} /> : null}
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((news) => {
                  return (
                    <tr key={news.id}>
                      <td>{news.id}</td>
                      <td>{news.title}</td>
                      <td>
                        <span style={{ fontSize: 15 }}>{news.category}</span>
                      </td>
                      <td>
                        <span
                          className="btn btn-sm btn-light border"
                          data-bs-toggle="modal"
                          data-bs-target="#viewModal"
                          onClick={() => HandleClick(news.id)}
                        >
                          View
                        </span>{" "}
                        <UpateNews news={news} />{" "}
                        <span
                          onClick={() => HandleDeleteClick(news.id)}
                          className="btn btn-sm btn-danger border"
                        >
                          Delete
                        </span>{" "}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
