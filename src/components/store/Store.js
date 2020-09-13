import {PageComponent} from '@core/PageComponent'
import {
  createTable,
} from '@/components/store/store.template'
import {ajaxNot} from '@core/ajax'
import {$} from '@core/Dom'
import {mainUrl, selectorProduct} from "@/components/global.variables";
import {switchStyleEmitter} from "@/components/store/store.utils";

export class Store extends PageComponent {
  static className = 'page__store'

  constructor($root, options) {
    super($root, {
      name: 'Store',
      listeners: [],
      ...options,
    })
  }

  toHTML() {
    return `
    <div class="store"></div>
    <script>
        ${ajaxNot(
      {
        fn: this.addHml(selectorProduct),
        requestURL: mainUrl,
      })}
    </script>
  `
  }

  init() {
    super.init()
    this.$on('switchStyle', obj => {
      switchStyleEmitter({
        $root: this.$root,
        styleRemove: obj.styleRemove,
        styleAdd: obj.styleAdd,
      })
    })
    this.$on('updateStore', url => {
      ajaxNot(
          {
            fn: this.addHml(selectorProduct, url),
            requestURL: url,
          })
    })
  }


  addHml(selector, url = mainUrl) {
    return (data) => {
      this.$root.removeElement('.allproduct')
      const newData = createTable(data)
      const div = $.create('div', 'allproduct').html(newData)
      this.$root.find('.store').append(div)
      const elem = $(document).findAll('[data-sorturl]')
      elem.forEach(el => $(el).data['sorturl'] = url)
      this.$emit('createPagination', data)
    }
  }
}
