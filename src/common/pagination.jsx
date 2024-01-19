import { current } from "@reduxjs/toolkit";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const Pagination = ({ pagesTotal, changePageCurrent, }) => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(5);

    useEffect(() => {
        setTotalPages(Math.ceil(pagesTotal));
    }, [pagesTotal])

    useEffect(() => {
        changePageCurrent(currentPage - 1);
    }, [currentPage]);

    const onPageChange = (newPageNumber) => {
        setCurrentPage(newPageNumber);
    }

    const range = (start, end) => {
        let arr = [];
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
        return arr;
    }

    return (
        <>
            <ul className="pagination justify-content-end pagination-rounded">
                <li style={{ userSelect: 'none' }} className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <div onClick={() => onPageChange(currentPage - 1)} className="page-link">
                    <i className="mdi mdi-chevron-left"></i>
                    </div>
                </li>
            
                { totalPages <= 7 ?
                <>
                    {/* Minder dan 7 pagina's */}
                    { range(1, totalPages).map((number, i) => (
                        <li style={{ userSelect: 'none' }} key={`pagination_${i}`} className={`page-item ${currentPage === number ? "active" : ""}`}>
                            <div onClick={() => { onPageChange(number) }} className="page-link">
                            {number}
                            </div>
                        </li>
                    )) }
                </> :
                <>
                    {/* Meer dan 7 pagina's */}
                    { currentPage <= 3 || currentPage >= (totalPages-2) ?
                    <>
                        { range(1, 3).map((page) => (
                            <li style={{ userSelect: 'none' }} key={`pagination_${page}`} className={`page-item ${currentPage === page ? "active" : ""}`}>
                                <div onClick={() => onPageChange(page)} className="page-link">
                                {page}
                                </div>
                            </li>
                        )) }

                        <li style={{ userSelect: 'none' }} key={`pagination_dots`} className={`page-item`}>
                            <div className="page-link">
                            ...
                            </div>
                        </li>

                        { range((totalPages - 2), totalPages).map((page) => (
                            <li style={{ userSelect: 'none' }} key={`pagination_${page}`} className={`page-item ${currentPage === page ? "active" : ""}`}>
                                <div onClick={() => onPageChange(page)} className="page-link">
                                {page}
                                </div>
                            </li>
                        )) }
                    </> :
                    <>
                        <li style={{ userSelect: 'none' }} key={`pagination_1`} className={`page-item ${currentPage === 1 ? "active" : ""}`}>
                            <div onClick={() => onPageChange(1)} className="page-link">
                            1
                            </div>
                        </li>

                        <li style={{ userSelect: 'none' }} key={`pagination_dotsl`} className={`page-item`}>
                            <div className="page-link">
                            ...
                            </div>
                        </li>

                        <li style={{ userSelect: 'none' }} key={`pagination_${currentPage - 1}`} className={`page-item ${currentPage === (currentPage - 1) ? "active" : ""}`}>
                            <div onClick={() => onPageChange(currentPage - 1)} className="page-link">
                            {currentPage - 1}
                            </div>
                        </li>

                        <li style={{ userSelect: 'none' }} key={`pagination_${currentPage}`} className={`page-item ${currentPage === (currentPage) ? "active" : ""}`}>
                            <div onClick={() => onPageChange(currentPage)} className="page-link">
                            {currentPage}
                            </div>
                        </li>

                        <li style={{ userSelect: 'none' }} key={`pagination_${currentPage + 1}`} className={`page-item ${currentPage === (currentPage + 1) ? "active" : ""}`}>
                            <div onClick={() => onPageChange(currentPage)} className="page-link">
                            {currentPage + 1}
                            </div>
                        </li>

                        <li style={{ userSelect: 'none' }} key={`pagination_dotsr`} className={`page-item`}>
                            <div className="page-link">
                            ...
                            </div>
                        </li>

                        <li style={{ userSelect: 'none' }} key={`pagination_${totalPages}`} className={`page-item ${currentPage === totalPages ? "active" : ""}`}>
                            <div onClick={() => onPageChange(totalPages)} className="page-link">
                            {totalPages}
                            </div>
                        </li>
                    </>
                    }
                </> 
                }

                <li style={{ userSelect: 'none' }} className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <div onClick={() => onPageChange(currentPage + 1)} className="page-link">
                    <i className="mdi mdi-chevron-right"></i>
                    </div>
                </li>
            </ul>
        </>
    )
}

Pagination.propTypes = {
    pages: PropTypes.number,
    changePageCurrent: PropTypes.func,
    pagesTotal: PropTypes.number
}

export default Pagination;