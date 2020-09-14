import {
  changeHttpToHttps, checkObject, offDataAttr,
  toStyleOff,
  totalPage,
} from '@/components/footer/footer.pure.function'

export function createFooter(object) {
  const currentPage = checkObject(object, 'current_page')
  const previousPageUrl =
    changeHttpToHttps(checkObject(object, 'previous_page_url'))
  const nextPageUrl =
    changeHttpToHttps(checkObject(object, 'next_page_url'))
  const totalCount = checkObject(object, 'total_count')

  return `<div class="pagina">
            <div class="prev ${toStyleOff(previousPageUrl)}" 
              data-${offDataAttr(previousPageUrl, 'prev')}="${previousPageUrl}"
              >
              Назад
              </div>
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
              data-${offDataAttr(nextPageUrl, 'next')}="${nextPageUrl}"
              >
              Вперед
              </div>
        </div>`
}
