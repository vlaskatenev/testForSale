import {$} from "@core/Dom";

export function switchStyleEmitter({$root, styleRemove, styleAdd}) {
  $root.findAll('.'+styleRemove)
      .forEach(el => $(el).removeClass(styleRemove).addClass(styleAdd))
}
