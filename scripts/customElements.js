class BackArrow extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create wrapper for button
    const wrapper = document.createElement("button");
    
    const img = document.createElement("img");
    img.src = "./assets/images/back-arrow.png";

    const styles = document.createElement('link');
    styles.setAttribute('href', 'styles/back-arrow.css');
    styles.setAttribute('rel', 'stylesheet');
    styles.setAttribute('type', 'text/css');

    wrapper.append(img);

    shadow.append(styles, wrapper);
    
    console.log("Custom element added to page.");
  }
  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }
  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }
}

customElements.define("back-arrow", BackArrow);

