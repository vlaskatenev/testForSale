import {PageComponent} from '@core/PageComponent'
import {MAX_LEN_PAGE} from "@/components/footer/footer.vareables";
import {createFooter} from "@/components/footer/footer.template";
import {$} from "@core/Dom"
import {toReplacePageNumber} from "@/components/footer/footer.pure.function";

export class Footer extends PageComponent {
    static className = 'page__footer'

    constructor($root, options) {
      super($root, {
        name: 'Footer',
        listeners: ['click', 'keydown', 'input'],
        ...options,
      })
    }

    init() {
      super.init()
      this.$on('createPagination', data => {
        this.$root.html(createFooter(data))
      })
    }


    onClick(event) {
      const $target = $(event.target)
      if ($target.data.prev && $target.data.prev !== 'false') {
        this.$emit('updateStore', $target.data.prev)
      } else if ($target.data.next && $target.data.next !== 'false') {
        this.$emit('updateStore', $target.data.next)
      }
    }


    // если строка длинее MAX_LEN то вводиться дальше начения не будут
    onInput(event) {
      const $target = $(event.target)
      if ($target.data.inputpage) {
        const text = $target.text()
        if (text.length > MAX_LEN_PAGE) {
          $target.$el.innerHTML = text.slice(0, MAX_LEN_PAGE)
        }
      }
    }

    onKeydown(event) {
      const keys = ['Enter']
      if (keys.includes(event.key)) {
        event.preventDefault()
        const $target = this.$root.find('[data-inputpage="input"]')
        if ($target.data.inputpage) {
          const dataElem = this.$root.find('[data-next]')
          const toUrl = dataElem.data.next !== 'false'
              ? dataElem.data.next
              : this.$root.find('[data-prev]').data.prev
          console.log(dataElem.data.next)
          this.$emit('updateStore', toReplacePageNumber(toUrl, $target.text()))
        }
      }
    }
}
