import * as ko from 'knockout'
import * as homePageComponent from './home'

// document.body.appendChild(document.createElement('home-page'))

// ko.components.register('home-page', homeComponent)

// ko.applyBindings()


 const hotHomeLoader = {
       hotComponentName: '__HOT__home-page',
       ready: ko.observable(true),
       loadComponent(name, componentConfig, cb) {
         if (name !== 'home-page') return cb(null)
         ko.components.register(hotHomeLoader.hotComponentName, componentConfig)
         if (!componentConfig.viewModel) {
           componentConfig.viewModel = class {}
         }
         cb(null)
       },
       loadTemplate(name, templateConfig, cb) {
         if (name !== 'home-page') return cb(null)
         const $wrapper = document.createElement('span')
         const $component = document.createElement('span')
         $wrapper.setAttribute('data-bind', 'if: ready')
         $component.setAttribute('data-bind', `component: { name: '${hotHomeLoader.hotComponentName}', params: params }`)
         $wrapper.appendChild($component)
         cb([$wrapper])
       },
       loadViewModel(name, viewModelConfig, cb) {
         if (name !== 'home-page') return cb(null)
         cb((params) => ({ ready: hotHomeLoader.ready, params }))
       },
       reloadComponent() {
         hotHomeLoader.ready(false)
         ko.components.unregister(hotHomeLoader.hotComponentName)
         ko.components.clearCachedDefinition(hotHomeLoader.hotComponentName)
         ko.components.register(hotHomeLoader.hotComponentName, homePageComponent)
         hotHomeLoader.ready(true)
       }
     }
    
     module.hot.accept('./home', hotHomeLoader.reloadComponent)
    
      document.body.appendChild(document.createElement('home-page'))
    
      ko.components.register('home-page', homePageComponent)
    
      ko.components.loaders.unshift(hotHomeLoader)
    
      ko.applyBindings()
    