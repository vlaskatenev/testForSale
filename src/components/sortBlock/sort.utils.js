import {storage} from '@core/utils'

export function changeAttr($target, string) {
  $target.$el.classList.toggle("sortvalup")
  $target.data[string] === 'false'
        ? $target.data[string] = 'true'
        : $target.data[string] = 'false'
}

export function switchStyle({$root, $target, styleAdd}) {
  storage('style', {styleAdd})
  $root.find('.select__on')
      .removeClass('select__on')
      .addClass('select__off')
  $target.removeClass('select__off')
      .addClass('select__on')
}
