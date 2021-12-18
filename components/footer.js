class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
        <style>
            .page-footer {
                width: 100vw;
                position: absolute;
                bottom: 0px;
                    
                padding: 32px 50px;
            
                display: flex;
                justify-content: space-between;
            
                border-radius: 28px 28px 0 0;
            
                background-color: rgba(0, 0, 0, 0.9);

                z-index: 1;
            }

            @media (prefers-color-scheme: dark) {
                .page-footer {
                    background-color: white;
                }

                .page-footer * {
                    color: black;
                }
            }
            
            .page-footer a {
                margin: 0 10px;
                opacity: 0.65;
            }
            
            .page-footer p {
                font-size: 1em; !important
            }
        </style>
        <footer class="page-footer">
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