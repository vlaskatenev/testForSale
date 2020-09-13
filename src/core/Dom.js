class Dom {
  // constructor это типа чтото на подобие __init__ в python.
  // переменные прописанные здесь и переменные которые должны
  // быть переданы передаются при вызове класса, а не метода
  // selector это блок кода HTML
  constructor(selector) {
    this.$el = typeof selector === 'string'
    ? document.querySelector(selector)
    : selector
  }

  // сокращает вызов метода innerHTML. Для вызова нужно $el.html(html),
  // то чже самое как и $el.innerHTML = html
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }

  // то же самое что addEventListener
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  find(selector) {
    return $(this.$el.querySelector(selector))
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  addClass(className) {
    this.$el.classList.add(className)
    return this
  }

  removeClass(className) {
    this.$el.classList.remove(className)
    return this
  }

  removeElement(selector) {
    const el = document.querySelector(selector)
    if (el) {
      el.remove()
    }
  }

  text(text) {
    if (typeof text !== 'undefined') {
      this.$el.textContent = text
      return this
    }
    if (this.$el.tagName.toLowerCase() === 'input') {
      return this.$el.value.trim()
    }
    return this.$el.textContent.trim()
  }

  get data() {
    return this.$el.dataset
  }

  // так как у объекта созданного методом $.create нет метода append,
  // нужного для добавления новых обьъектов (компонентов FullPage) в один
  // массив,
  // здесь его заменяет этот метод
  append(node) {
    // выполняем проверку является ли node инстансом класса Dom
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    // возвращаем объект this чтобы можно было делать "чейн"!!!!
    return this
  }
}

// для вызова класса экспортируется функция $
// она уже и создает новый объект Dom и
// требует чтобы импортировали в нее selector - html код
export function $(selector) {
  return new Dom(selector)
}

// в функции $ создает селектор (упрощает его создание).
// его уже и нужно потом передовать в качестве переменной selector в функцию $
// которая уже в свою очередь передает его в класс Dom
$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}
