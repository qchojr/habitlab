window.addEventListener "unhandledrejection", (evt) ->
  throw evt.reason

require 'webcomponentsjs-custom-element-v0'
require 'components/options-view.deps'