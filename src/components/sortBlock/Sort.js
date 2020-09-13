import {PageComponent} from '@core/PageComponent'
import {$} from "@core/Dom"
import {createSortBlock} from "@/components/sortBlock/sort.template";
import {changeAttr, switchStyle} from "@/components/sortBlock/sort.utils";
import {styleTile} from "@/components/sortBlock/sort.variables";
import {
  toUrlPageSortName,
  toUrlPageSortPrice,
} from "@/components/sortBlock/sort.pure.functions";
import {styleDefault} from "@/components/global.variables";

export class Sort extends PageComponent {
    static className = 'page__sort'

    constructor($root, options) {
      super($root, {
        name: 'Sort',
        listeners: ['click'],
        ...options,
      })
    }

    toHTML() {
      return createSortBlock()
    }

    onClick(event) {
      const $target = $(event.target)
      if ($target.data.sortprice) {
        changeAttr($target, 'sortprice')
        this.$emit('updateStore', toUrlPageSortPrice($target))
      } else if ($target.data.sortname) {
        changeAttr($target, 'sortname')
        this.$emit('updateStore', toUrlPageSortName($target))
      } else if ($target.data.headline) {
        this.$emit('switchStyle', {
          styleRemove: styleTile,
          styleAdd: styleDefault,
        })
        switchStyle({
          $root: this.$root,
          $target,
          styleAdd: styleDefault,
        })
      } else if ($target.data.module) {
        this.$emit('switchStyle', {
          styleRemove: styleDefault,
          styleAdd: styleTile,
        })
        switchStyle({
          $root: this.$root,
          $target,
          styleAdd: styleTile,
        })
      }
    }
}
