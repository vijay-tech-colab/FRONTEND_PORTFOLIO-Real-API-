import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map((num) => num + 1);

    return (
        <div className="flex flex-wrap items-center justify-center space-x-2 space-y-2 sm:space-y-0 mt-6">
            {/* First & Previous Buttons */}
            <button
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg border bg-gray-200 hover:bg-gray-300 ${currentPage === 1 && "opacity-50 cursor-not-allowed"}`}
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
            >
                First
            </button>
            <button
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg border bg-gray-200 hover:bg-gray-300 ${currentPage === 1 && "opacity-50 cursor-not-allowed"}`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Prev
            </button>

            {/* Page Numbers */}
            {pages.map((num) => (
                <button
                    key={num}
                    className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg border ${currentPage === num ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-300"}`}
                    onClick={() => onPageChange(num)}
                >
                    {num}
                </button>
            ))}

            {/* Next & Last Buttons */}
            <button
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg border bg-gray-200 hover:bg-gray-300 ${currentPage === totalPages && "opacity-50 cursor-not-allowed"}`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>

            <button
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg border bg-gray-200 hover:bg-gray-300 ${currentPage === totalPages && "opacity-50 cursor-not-allowed"}`}
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
            >
                Last
            </button>
        </div>
    );
};

export default Pagination;
