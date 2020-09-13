import {mainUrl} from "@/components/global.variables";
import {
  styleDefaultForList,
  styleDefaultForTile,
} from "@/components/sortBlock/sort.pure.functions";

export function createSortBlock() {
  return `    <div class="sort">
                <div>Сортировать:</div>
                  <div 
                    class="sortvaldown"
                    data-sortprice="true" 
                    data-sorturl="${mainUrl}"
                  >
                      по цене
                  </div>
                <div 
                  class="sortvaldown"
                  data-sortname="true" 
                  data-sorturl="${mainUrl}"
                  >
                  по названию
                </div>
                <div class="change__style">
              <div class="button2">
                <i class="material-icons 
                    ${styleDefaultForList()}" 
                data-headline="true">view_headline</i>
              </div>
              <div class="button2">
                <i class="material-icons 
                    ${styleDefaultForTile()}" 
                data-module="true">view_module</i>
              </div>
            </div>
            </div>
`
}
