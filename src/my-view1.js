import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle" on-click="_test">1</div>
        <h1>View One</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
      </div>
    `;
  }
  _test() {
    var client = new grpc.GreeterClient('http://localhost:8080');
    var request = new grpc.HelloRequest();
    request.setName('World');

    client.sayHello(request, {}, (err, response) => {
      console.log(response.getMessage());
    });
  }
} window.customElements.define('my-view1', MyView1);
