import {
  changeHttpToHttps,
  toStyleOff,
  totalPage,
} from "@/components/footer/footer.pure.function";

export function createFooter(object) {
  const currentPage = object.current_page
  const previousPageUrl = changeHttpToHttps(object.previous_page_url)
  const nextPageUrl = changeHttpToHttps(object.next_page_url)
  const totalCount = object.total_count

  return `<div class="pagina">
            <div class="prev ${toStyleOff(previousPageUrl)}" 
                data-prev="${previousPageUrl}">Назад</div>
            <div class="current" data-current="true">
            <div class="inner__page" contenteditable="true"
                     spellcheck="false" data-inputpage="input">
            ${currentPage}
            </div>
            </div>
            <div class="tatal__page">
             / ${totalPage(totalCount)}
             </div>
            <div class="next ${toStyleOff(nextPageUrl)}" 
                data-next="${nextPageUrl}">Вперед</div>
        </div>`
}
