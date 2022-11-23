import "./Table.css";
import Loader from "./Loader";
import Thumbnail from "./Thumbnail";

function Table(props) {
  let data = props.data;
  if (!data) {
    return <Loader></Loader>;
  }
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Title</th>
          <th scope="col">Rating</th>
          <th scope="col">Synopsis</th>
        </tr>
      </thead>
      <tbody>
        {data.map((anime) => {
          return (
            <tr key={anime.id}>
              <td>
                <Thumbnail url={anime.imageUrl}></Thumbnail>
              </td>
              <td>{anime.title}</td>
              <td>{anime.averageRating}</td>
              <td>{anime.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
