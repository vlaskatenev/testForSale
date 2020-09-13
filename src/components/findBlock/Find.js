import {PageComponent} from '@core/PageComponent'
import {$} from "@core/Dom"
import {createFind} from "@/components/findBlock/find.template";
import {toUrlSerch} from "@/components/global.pure.functions";
import {MAX_LEN} from "@/components/findBlock/find.variables";

export class Find extends PageComponent {
    static className = 'page__find'

    constructor($root, options) {
      super($root, {
        name: 'Find',
        listeners: ['click', 'keydown', 'input'],
        ...options,
      })
    }

    toHTML() {
      return createFind()
    }


    onClick(event) {
      const $target = $(event.target)
      if ($target.data.set === 'toStart') {
        const text = this.$root.find('[data-set="input"]').text()
        if (text.length > 0) {
          this.$emit('updateStore', toUrlSerch(text))
        }
      }
    }


    // если строка длинее MAX_LEN то вводиться дальше начения не будут
    onInput(event) {
      const $target = $(event.target)
      if ($target.data.set === 'input') {
        const text = $target.text()
        if (text.length > MAX_LEN) {
          $target.$el.innerHTML = text.slice(0, MAX_LEN)
        }
      }
    }

    onKeydown(event) {
      const keys = ['Enter']
      if (keys.includes(event.key)) {
        event.preventDefault()
        const $target = this.$root.find('[data-set="input"]')
        if ($target.data.set === 'input') {
          const text = $target.text()
          this.$emit('updateStore', toUrlSerch(text))
        }
      }
    }
}
