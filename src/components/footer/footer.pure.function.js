export function totalPage(totalCount) {
  return Math.ceil(totalCount/10)
}

export function toReplacePageNumber(urlToPage, num) {
  return urlToPage.replace(/page=\d+$/g, `page=${num}`)
}

export function toStyleOff(page) {
  return page === false ? 'topage__off' : 'topage'
}
