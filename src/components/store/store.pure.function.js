import {storage} from '@core/utils'
import {styleDefault} from "@/components/global.variables";

export function toStyleDefault() {
  try {
    return storage('style').styleAdd
  } catch (e) {
    return styleDefault
  }
}
