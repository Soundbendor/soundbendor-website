const Pagination = ({ data, pagesShown, previousLabel, nextLabel, className, onClick }) => {
  // quick escape.  If you provide a non-paginatable array, no pagination can be made.
  if (data === undefined) {
    // console.log("Pagination requrires the data property")
    return ''
  }
  if (!('__pagination' in data)) {
    // console.log("__pagination data not in object")
    return ''
  }
  if (pagesShown === undefined || !pagesShown || pagesShown < 1) pagesShown = 1
  if (previousLabel === undefined || !previousLabel) previousLabel = 'Previous'
  if (nextLabel === undefined || !nextLabel) nextLabel = 'Next'
  if (className === undefined || !className) {
    className = 'pagination'
  } else {
    className += ' pagination'
  }
  const paginationData = data.__pagination
  const numbers = generatePaginationNumbers(paginationData, pagesShown, onClick)
  return (
    <ul className={className}>
      <PaginationLink label={previousLabel} value={paginationData.currentPage - 1} disabled={!paginationData.hasPreviousPage} onClick={onClick} />
      {numbers}
      <PaginationLink label={nextLabel} value={paginationData.currentPage + 1} disabled={!paginationData.hasNextPage} onClick={onClick} />
    </ul>
  )
}

function * range (start, end, step) {
  while (start < end) {
    yield start
    start += step
  }
}

const generatePaginationNumbers = (x, pagesShown, onClick) => {
  let pageFloor = parseInt((x.currentPage < pagesShown) ? 1 : x.currentPage - Math.ceil(pagesShown / 2) + 1)
  let pageCeil = parseInt((x.currentPage > (x.totalPages - pagesShown)) ? x.totalPages : x.currentPage + Math.ceil(pagesShown / 2))
  if (pageCeil - pageFloor < pagesShown && x.totalPages >= pagesShown) {
    if (pageFloor === 1) {
      pageCeil = pagesShown
    } else if (pageCeil === x.totalPages) {
      pageFloor = x.totalPages - pagesShown + 1
    }
  }
  let pages = []
  if ((pageCeil - pageFloor + 1) < pagesShown) {
    pages = Array.from(range(pageFloor, pageCeil + 1, 1))
  } else {
    const high = (pageFloor + parseInt(pagesShown) < pageCeil + 1) ? pageFloor + parseInt(pagesShown) : pageCeil
    pages = Array.from(range(pageFloor, high + 1, 1))
  }

  if (pages[0] > 2 && x.totalPages > 3) {
    pages.unshift('...')
  }

  if (pages[0] > 1 || pages[0] === '...') {
    pages.unshift(1)
  }

  if (x.totalPages <= 3 && pages[pages.length - 1] < x.totalPages - 1) {
    for (let i = pages[pages.length - 1] + 1; i < x.totalPages + 1; i++) {
      pages.push(i)
    }
  } else if (pages[pages.length - 1] < x.totalPages - 1) {
    pages.push('...')
    pages.push(x.totalPages)
  } else if (pages[pages.length - 1] < x.totalPages) {
    pages.push(x.totalPages)
  }
  return pages.map((value, i) =>
    <PaginationLink
      key={i}
      label={value}
      disabled={(value === '...')}
      active={parseInt(value) === parseInt(x.currentPage)}
      onClick={onClick}
    />
  )
}

const PaginationLink = ({ label, value, disabled, active, onClick }) => {
  disabled = (disabled === undefined) ? false : disabled
  active = (active === undefined) ? false : active
  const classNames = 'page-item' + ((disabled) ? ' disabled' : '') + ((active) ? ' active' : '')
  return (
    <li className={classNames} aria-current={(active) ? 'page' : undefined}>
      <a className='page-link' value={value} onClick={onClick} href='#' aria-disabled={(disabled) ? true : undefined}>{label}</a>
    </li>
  )
}

export default Pagination
