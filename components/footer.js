class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
        <style>
            footer {
                width: 100vw;
                position: absolute;
                bottom: 0px;
                    
                padding: 32px 50px;
            
                display: flex;
                justify-content: space-between;
            
                border-radius: 25px 25px 0 0;
            
                letter-spacing: -0.08em;
            
                background-color: rgba(0, 0, 0, 0.9);

                z-index: 1;
            }

            @media (prefers-color-scheme: dark) {
                footer {
                    background-color: white;
                }

                footer * {
                    color: black;
                }
            }
            
            footer a {
                margin: 0 10px;
                opacity: 0.65;
            }
            
            footer p {
                font-size: 0.8em;
            }
        </style>
        <footer>
            <section>
                <a class="footer-home" href="/"> home </a>
                <a class="footer-blog" href="/blog"> blog </a>
                <a class="footer-privacy-policy" href="/privacy-policy"> privacy policy </a>
            </section>
            <p> 2021 © João Gabriel </p>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer);