import ReactDOM from 'react-dom'


export function render (markup) {
  if (!render._mountNode) {
    render._mountNode = document.createElement('div')

    document.body.appendChild(render._mountNode)

    afterEach(render.unmount)
  }

  return ReactDOM.render(markup, render._mountNode)
}


render.unmount = function () {
  if (render._mountNode) {
    ReactDOM.unmountComponentAtNode(render._mountNode)

    document.body.removeChild(render._mountNode)

    render._mountNode = null
  }
}
