import ReactPaginate from 'react-paginate';

function Pagination({page, setPage, listings, listingsPerPage}) {
	const totalPages = Math.ceil(listings.length / listingsPerPage);
	const changePage = ({ selected }) => {
		setPage(selected);
	};
	
	return (
		<div>
			<ReactPaginate
				previousLabel={'Previous'}
				nextLabel={'Next'}
				pageCount={totalPages}
				onPageChange={changePage}
				containerClassName={'navigationButtons'}
				previousLinkClassName={'previousButton'}
				nextLinkClassName={'nextButton'}
				disabledClassName={'navigationDisabled'}
				activeClassName={'navigationActive'}
			/>
		</div>
	);
}

export default Pagination;