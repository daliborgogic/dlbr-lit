import { LitElement, html, css } from 'lit-element'
  
class Oops extends LitElement {

  static get properties() {
    return {
      mood: {type: String}
    }
  }

  static get styles() {
    return css`.mood { color: green; }`
  }

  render() {
    return html`Web Components are <span class="mood">${this.mood}</span>!`
  }
}

customElements.define('app-ops', Oops)