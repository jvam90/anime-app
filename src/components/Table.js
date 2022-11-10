import './Table.css';
import Loader from './Loader';

function Table(props) {
    let data = props.data;
    if (!data) {
        return(
            <Loader></Loader>
        )
    }
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Synopsis</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((anime,index) => {
                        return (
                            <tr key={index}>
                                <td>{anime.title}</td>
                                <td>{anime.averageRating}</td>
                                <td>{anime.description}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;