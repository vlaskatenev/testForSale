export function ajaxNot({body = '', fn = false, requestURL}) {
  fetch(requestURL, {
    method: 'GET',
  })
      .then(response => response.json())
      .then(data => {
            fn ? fn(data) : null
      })
      .catch(error => console.log('Error with ajaxNot function: ', error))
}
