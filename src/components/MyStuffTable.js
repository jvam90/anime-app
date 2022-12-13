import "./MyStuffTable.css";
import Loader from "./Loader";

function MyStuffTable(props) {
  let data = props.data;
  if (!data) {
    return <Loader></Loader>;
  }
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Progress</th>
        </tr>
      </thead>
      <tbody>
        {data.map((anime) => {
          return (
            <tr key={anime.id}>
              <td>{anime.name}</td>
              <td>{anime.type}</td>
              <td>{anime.progress}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default MyStuffTable;
