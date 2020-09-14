import {storage} from '@core/utils'
import {styleDefault} from "@/components/global.variables";

export function toStyleDefault() {
  try {
    return storage('style').styleAdd
  } catch (e) {
    return styleDefault
  }
}

export function checkObjectToLenght(obj) {
  try {
    return obj.products.length
  } catch (e) {
    return 0
  }
}
