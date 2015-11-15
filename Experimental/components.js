import {Component, Template} from 'angular2/angular2'

@Component({
  selector: 'my-component'
})
@View({
  inline: "<div>Hello my name is {{name}}</div>"
})
export class MyComponent {
  constructor() {
    this.name = 'Max'
  }
  sayMyName() {
    console.log('My name is', this.name)
  }
}


