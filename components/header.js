class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let logo = `
            <svg class="logo" viewBox="0 0 177 96" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>logo</title>
                <g id="joao" fill="#000000" fill-rule="nonzero">
                    <text id="joao" font-size="96.0496595" letter-spacing="-8" fill="#000000">
                        <tspan x="2.45483258" y="73.8494326">joao</tspan>
                    </text>
                    <text id="joogps.codes" font-size="15" letter-spacing="-1.5771" fill="#000000">
                        <tspan x="27.4563656" y="87.873085">joogps.codes</tspan>
                    </text>
                </g>
            </svg>
        `

        this.innerHTML = `
        <style>
            .page-header {
                width: 100%;
            
                padding: 32px 50px;
            
                position: fixed;
                top: 0;
            
                display: flex;
                justify-content: space-between;
            
                backdrop-filter: blur(20px) brightness(140%);
                -webkit-backdrop-filter: blur(20px) brightness(140%);
            
                box-shadow: 0px 5px 12px -8px rgba(0,0,0,0.75);
            
                border-radius: 0px 0px 25px 25px;

                z-index: 1;
            
                transition: .2s;
            }
            
            @media screen and (max-width: 1000px) and (orientation: portrait) {
                .logo {
                    height: 175px !important;
                }
            
                .collapsed .logo {
                    height: 100px !important;
                }
            
                .social {
                    max-height: 75px !important;
                }
            
                .collapsed .social {
                    max-height: 75px !important;
                }
            }

            @media (prefers-color-scheme: dark) {
                body {
                    background-color: black;
                }
            
                #joao {
                    fill: white !important;
                }

                .social img {
                    filter: invert(100%)
                }
            }
            
            .logo {
                max-width: 30vw;
            
                height: 80px;
                width: auto;
                
                align-self: center;
                transition: .2s;
            }
            
            .collapsed .logo {
                height: 50px;
            }
            
            #joogps\\.codes {
                transition: .3s;
            }
            
            .collapsed #joogps\\.codes {
                opacity: 0;
            }
            
            .social {
                align-self: center;
            
                box-sizing: content-box;
            
                text-align: right;
            
                display: flex;
                align-items: center;
                justify-content: center;
            
                transition: .2s;
            }
            
            .social img {
                height: 42px;
                margin: 8px;
            
                transition: .2s;
            }
            
            .collapsed .social img {
                height: 24px;
                margin: 4px;
            }
            
            .social img:hover {
                transform: scale(0.9);
            }
            
            .social a {
                text-decoration: none;
            }
        </style>
        <header class="page-header">
            <a href="https://joogps.me">
                ${logo} 
            </a>

            <div class="social">
                <a href="https://github.com/joogps">
                    <img src="/assets/social/github.svg">
                </a>

                <a href="https://twitter.com/joogps">
                    <img src="/assets/social/twitter.svg">
                </a>

                <a href="https://www.youtube.com/channel/UCoI_nPpWO2sY8wVViyOmAIA/">
                    <img src="/assets/social/youtube.svg">
                </a>

                <a href="https://www.instagram.com/joogps/">
                    <img src="/assets/social/instagram.svg">
                </a>
            </div>
        </header>
        `;
        
        let main = document.querySelector("main")

        let self = this
        main.onscroll = function () {
            if (main.scrollTop > 20) {
                self.collapse()
            } else {
                self.expand()
            }
        }

        this.addEventListener("mouseover", this.expand)
        this.addEventListener("mouseout", function () {
            if (main.scrollTop > 20) { this.collapse() }
        })
    }

    collapse() {
        this.classList.add("collapsed");
    }

    expand() {
        this.classList.remove("collapsed");
    }
}

customElements.define('header-component', Header);