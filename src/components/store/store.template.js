import {
  toStyleDefault,
} from "@/components/store/store.pure.function";

function toCell({row, index, object}) {
  const objectNew = object
  const srcToImage = objectNew.image
  const nameForProduct = objectNew.name
  const priceProduct = objectNew.price
  return `      
                <div class="${toStyleDefault()}">
                  <div class="image">
                      <img src="${srcToImage}">
                  </div>
                  <div class="name_product">
                      <p>${nameForProduct}</p>
                  </div>
                  <div class="price">
                      <p>${priceProduct} руб.</p>
                  </div>
                </div>
  `
}

function withObject(object) {
  return function(row, index) {
    return {
      row, index, object: object[index],
    }
  }
}

export function createTable(object) {
  const rowsCount = object.products.length
  const rows = []

  // создание строк
  const cells = new Array(rowsCount)
      .fill('')
      .map(withObject(object.products))
      .map(toCell)
      .join('')
  rows.push(cells)
  return rows.join('')
}
