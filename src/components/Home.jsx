import React, { useState } from "react";
// import "./home.css"; 
import {useDispatch} from "react-redux"
import { useSearchParams } from "react-router-dom";
import { addPaste, updatePaste } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch()

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || 
          Date.now().toString(36),
      createdAt: new Date().toISOString()
    }
    if (pasteId) {
      //updation
      dispatch(updatePaste(paste))
    }
    else{
      // Create new Paste
      dispatch(addPaste(paste))
    }

    //after creation/updation
    setTitle('')
    setValue('')
    setSearchParams({ })

  }

  return (
    <div className="homediv">
      <div className="homeHeader">
        <input
          className="titleInput"
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button 
          className="createButton"
          onClick={createPaste}
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>

      <div>
        <textarea 
          className="textArea"
          rows={20}
          placeholder="Enter Content"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Home;
