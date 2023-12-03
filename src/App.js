import { useState } from "react";
import "./App.css";
import { uploadImage } from "./amazons3";

function App() {
  const [image, setImage] = useState();

  const handleFileChange = async (event) => {
    setImage([...event.target.files]);
  };

  const upload = async () => {
    await uploadImage(image);
  };
  return (
    <div>
      <h1>Amazon S3 Demo</h1>
      <input type="file" onChange={handleFileChange} />
      <br/>
      <button onClick={upload}> Upload</button>
    </div>
  );
}

export default App;
