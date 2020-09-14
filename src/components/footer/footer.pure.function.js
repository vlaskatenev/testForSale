export function totalPage(totalCount) {
  return Math.ceil(totalCount/10)
}

export function toReplacePageNumber(urlToPage, num) {
  return urlToPage.replace(/page=\d+$/g, `page=${num}`)
}

export function toStyleOff(page) {
  return page === false || page === '0' ? 'topage__off' : 'topage'
}

export function changeHttpToHttps(url) {
  return url !== false ? url.replace('http://', `https://`) : url
}

export function checkObject(obj, key) {
  try {
    if (typeof obj === 'object') {
      return obj[key]
    } else {
      return '0'
    }
  } catch (e) {
    console.log('Error', e)
    return 'Error'
  }
}

export function offDataAttr(page, attr) {
  return page === false || page === '0' ? 'off' : attr
}
