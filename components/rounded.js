class Rounded extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            .rounded {
                width: 24px;
                height: 24px;
            
                z-index: 1;
                position: fixed;
            }    
        </style>
        ${this.roundedSVG("top: 0; left: 0")}
        ${this.roundedSVG("top: 0; right: 0; transform: rotate(90deg);")}
        ${this.roundedSVG("bottom: 0; right: 0; transform: rotate(180deg);")}
        ${this.roundedSVG("bottom: 0; left: 0; transform: rotate(270deg);")}
        `;
    }

    roundedSVG(style) {
      return `
      <svg class="rounded" style="${style}" width="16px" height="16px" viewBox="0 0 178 178" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>rounded</title>
          <g class="rounded" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path d="M178,0 C80.6763814,0 1.59572763,78.1074176 0.0238469144,175.056445 L0,178 L0,0 L178,0 Z" id="Path" fill="#000000"></path>
          </g>
      </svg>
      `
    }
}
  
customElements.define('rounded-corners', Rounded);