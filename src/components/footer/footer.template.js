import {
  changeHttp, check, offAttr,
  toStyleOff,
  totalPage,
} from '@/components/footer/footer.pure.function'

export function createFooter(object) {
  const current = check(object, 'current_page')
  const prev =
    changeHttp(check(object, 'previous_page_url'))
  const next =
    changeHttp(check(object, 'next_page_url'))
  const totalCount = check(object, 'total_count')

  return `<div class="pagina">
            <div class="prev ${toStyleOff(prev)}" 
              data-${offAttr(prev, 'prev')}="${prev}"
              >
              Назад
              </div>
            <div class="current" data-current="true">
            <div class="inner__page" contenteditable="true"
                     spellcheck="false" data-inputpage="input">
            ${current}
            </div>
            </div>
            <div class="tatal__page">
             / ${totalPage(totalCount)}
             </div>
            <div class="next ${toStyleOff(next)}" 
              data-${offAttr(next, 'next')}="${next}"
              >
              Вперед
              </div>
        </div>`
}
