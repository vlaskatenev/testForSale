import './scss/index.scss'
import {FullPage} from '@/components/fullPage/FullPage'
import {Store} from '@/components/store/Store'
import {Footer} from '@/components/footer/Footer'
import {Find} from '@/components/findBlock/Find'
import {Sort} from '@/components/sortBlock/Sort'

const store = new FullPage('#app', {
  components: [Find, Sort, Store, Footer],
})

store.render()
