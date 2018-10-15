import * as ko from 'knockout'
import * as helloWorldComponent from './hello-world'

document.body.appendChild(document.createElement('hello-world'))

ko.components.register('hello-world', helloWorldComponent)

ko.applyBindings()