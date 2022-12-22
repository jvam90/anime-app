import "./MyStuffTable.css";

function MyStuffTable(props) {
  let data = props.data;
  console.log(data);
  if (!data || data.length === 0) {
    return (
      <div>
        <h1 className="text-center">You're not watching anything!</h1>;
      </div>
    );
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
