import * as ko from 'knockout'
import * as homeComponent from './home'

document.body.appendChild(document.createElement('home-page'))

ko.components.register('home-page', homeComponent)

ko.applyBindings()