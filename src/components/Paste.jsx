import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import './Paste.css'

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function handleEdit() {
    
  }
  function handleView() {
    
  }
  function handleDelete() {
    
  }
  function handleCopy() {
    
  }
  function handleShare() {
    
  }

  return (
    <div className="pastemaindiv">
      <input
        className="searchInput"
        type="text"
        value={searchTerm}
        placeholder="Search Paste"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className="card_div">
                <div className="details_div">
                  <div className="title_div">{paste.title}</div>
                  <div className="content_div">{paste.content}</div>
                </div>
                <div className="buttons_div">
                  <button className="buttons" onClick={handleEdit()}>
                    Edit
                  </button>
                  <button className="buttons" onClick={handleView()}>
                    View
                  </button>
                  <button className="buttons" onClick={() => handleDelete()}>
                    Delete
                  </button>
                  <button className="buttons" onClick={handleShare()}>
                    Share
                  </button>
                  <button className="buttons" onClick={handleCopy()}>
                    Copy
                  </button>
                </div>
                <div className="dateDiv">
                  Last Edited:{" "}
                  {new Date(paste.createdAt).toLocaleDateString("en-IN")}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
