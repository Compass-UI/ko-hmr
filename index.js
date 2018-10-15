import * as ko from 'knockout'
import * as helloWorldComponent from './hello'

document.body.appendChild(document.createElement('hello-world'))

ko.components.register('hello-world', helloWorldComponent)

ko.applyBindings()