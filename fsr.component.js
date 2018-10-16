import * as ko from 'knockout'
import * as fsrComponent from './fsr.component'

// document.body.appendChild(document.createElement('home-page'))

// ko.components.register('home-page', homeComponent)

// ko.applyBindings()


 const hotFSRLoader = {
       hotComponentName: '__HOT__home-page',
       ready: ko.observable(true),
       loadComponent(name, componentConfig, cb) {
         if (name !== 'home-page') return cb(null)
         ko.components.register(hotFSRLoader.hotComponentName, componentConfig)
         if (!componentConfig.viewModel) {
           componentConfig.viewModel = class {
            //         details = ko.observable("<em>For further details, view the report <a href='report.html'>here</a>.</em>") // Initially blank
            //         details("<em>For further details, view the report <a href='report.html'>here</a>.</em>"); // HTML content appears
           }
         }
         cb(null)
       },
       loadTemplate(name, templateConfig, cb) {
         if (name !== 'home-page') return cb(null)
         const $wrapper = document.createElement('span')
         const $component = document.createElement('span')
         $wrapper.setAttribute('data-bind', 'if: ready')
         $component.setAttribute('data-bind', `component: { name: '${hotFSRLoader.hotComponentName}', params: params }`)
         $wrapper.appendChild($component)
         cb([$wrapper])
       },
       loadViewModel(name, viewModelConfig, cb) {
         if (name !== 'home-page') return cb(null)
         cb((params) => ({ ready: hotFSRLoader.ready, params }))
       },
       reloadComponent() {
         hotFSRLoader.ready(false)
         ko.components.unregister(hotFSRLoader.hotComponentName)
         ko.components.clearCachedDefinition(hotFSRLoader.hotComponentName)
         ko.components.register(hotFSRLoader.hotComponentName, fsrComponent)
         hotFSRLoader.ready(true)
       }
     }
    
     module.hot.accept('./home', hotFSRLoader.reloadComponent)
    
      document.body.appendChild(document.createElement('home-page'))
    
      ko.components.register('home-page', fsrComponent)
    
      ko.components.loaders.unshift(hotFSRLoader)
    
      ko.applyBindings()
    