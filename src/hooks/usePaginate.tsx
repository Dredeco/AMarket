export const Pagination = ({ products, pageSize, page, onPageChange }: IPaginate) => {
    const pagesCount = Math.ceil(products.length / pageSize); // 100/10

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

 /* return (
    <div>
        <ul className="pagination">
            {pages.map((page) =>(
                <li 
                    key={page}
                    className={
                        page === currentPage ? "pageItemActive" : "pageItem"
                    }
                >
                    <a className="pageLink" onClick={() => (page)}>
                        {page}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  ) */
}

export const Paginate = async (products: IProduct[], page: number, pageSize: number) => {
    const startIndex = (page - 1) * pageSize;
    const results = products.slice(startIndex, startIndex + pageSize);
    return results
};