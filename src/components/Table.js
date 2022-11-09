import './Table.css';
import Loader from './Loader';

function Table(props) {
    let data = props.data.data;

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
                                <td>{anime.attributes.titles.en}</td>
                                <td>{anime.attributes.titles.en}</td>
                                <td>{anime.attributes.titles.en}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;