import {
  sortNameDown,
  sortNameUp,
  sortPriceDown,
  sortPriceUp,
} from "@/components/store/store.variables";
import {toStyleDefault} from "@/components/store/store.pure.function";
import {styleDefault} from "@/components/global.variables";

export function sortPrice($target) {
  return $target === 'true' ? sortPriceUp : sortPriceDown
}

export function sortName($target) {
  return $target === 'true' ? sortNameUp : sortNameDown
}

export function toUrlPageSortName($target) {
  return $target.data['sorturl']+sortName($target.data.sortname)
}

export function toUrlPageSortPrice($target) {
  return $target.data['sorturl']+sortPrice($target.data.sortprice)
}

export function styleDefaultForList() {
  return toStyleDefault() === styleDefault ? 'select__on' : 'select__off'
}
export function styleDefaultForTile() {
  return toStyleDefault() === styleDefault ? 'select__off' : 'select__on'
}
