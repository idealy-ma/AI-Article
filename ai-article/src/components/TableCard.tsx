import { useState } from "react";
import { Link } from "../../node_modules/react-router-dom/dist/index";

interface TableProps {
    data: any[];
    columns: string[];
    rowsPerPage: number;
    length: number;

}
  
const TableCard: React.FC<TableProps> = ({ data, columns, rowsPerPage, length }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages based on the data length and rows per page
    const totalPages = Math.ceil(length / rowsPerPage);

    // Calculate the start and end index of the current page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    // Get the current page's data
    const currentData = data?.slice(startIndex, endIndex);

    // Function to handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };   

    return (
        <div>
            <table className="table table-responsive table-striped table-bordered">
                <thead>
                    <tr>
                    {columns?.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column, columnIndex) => (
                            <td key={columnIndex}>
                                {column === 'link' ? (
                                    <Link to={row.link}>{row['icon']}</Link>
                                ) : (
                                    row[column]
                                )}
                            </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <nav aria-label="Pagination">
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Previous
                        </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, index) => (
                        <li
                            key={index}
                            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                        >
                            <button
                            className="page-link"
                            onClick={() => handlePageChange(index + 1)}
                            >
                            {index + 1}
                            </button>
                        </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                        </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default TableCard;