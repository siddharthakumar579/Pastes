import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePaste } from "../redux/pasteSlice";
import toast from "react-hot-toast";
// import './Paste.css'

const paste = () => {
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
  function handleDelete(pasteId) {
    dispatch(deletePaste(pasteId))
    
  }
  function handleCopy(content) {
    navigator.clipboard.writeText(content)
    toast.success("Copy Successfull")
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
              <div className="card_div" key={paste?._id}>
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
                  <button className="buttons" onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button className="buttons" onClick={handleShare()}>
                    Share
                  </button>
                  <button className="buttons" onClick={() => handleCopy(paste.content)}>
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

export default paste;
