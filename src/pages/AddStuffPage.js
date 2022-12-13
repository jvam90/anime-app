import { useState } from "react";
import "./AddStuffPage.css";

function AddStuffPage() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [progress, setProgress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const anime = {
      name: name,
      type: type,
      progress: progress,
    };
    return fetch("http://localhost:3333/anime", {
      method: "POST",
      body: JSON.stringify(anime),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          alert("Saved!");
          window.location.reload();
        } else {
          alert("Something went wrong!");
        }
      })
      .catch((err) => err);
  };

  return (
    <div className="h-100">
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form
              className="form-example"
              method="post"
              onSubmit={handleSubmit}
            >
              <h1 id="formTitle">
                What am i watching now/What have i watched recently?
              </h1>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Anime, series, etc..."
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="type">Type</label>
                <select
                  defaultValue=""
                  className="form-control"
                  id="type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Select one option...</option>
                  <option value="anime">Anime</option>
                  <option value="tvshow">TV Show</option>
                  <option value="tvseries">TV Series</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="progress">Progress:</label>
                <select
                  defaultValue=""
                  className="form-control"
                  id="progress"
                  onChange={(e) => setProgress(e.target.value)}
                >
                  <option value="">Select one option...</option>
                  <option value="0%">0%</option>
                  <option value="10%">10%</option>
                  <option value="20%">20%</option>
                  <option value="30%">30%</option>
                  <option value="40%">40%</option>
                  <option value="50%">50%</option>
                  <option value="60%">60%</option>
                  <option value="70%">70%</option>
                  <option value="80%">80%</option>
                  <option value="90%">90%</option>
                  <option value="100%">100%</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-customized mt-4"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStuffPage;
