class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let logo = `
            <svg class="logo" viewBox="0 0 177 96" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>logo</title>
                <g id="joao" fill="#000000" fill-rule="nonzero">
                    <path d="M13.0227149,14.88642 C17.3522562,14.88642 20.8977073,11.579605 20.8977073,7.52279067 C20.8977073,3.50006723 17.3522562,0.193252206 13.0227149,0.193252206 C8.7272644,0.193252206 5.18181324,3.50006723 5.18181324,7.52279067 C5.18181324,11.579605 8.7272644,14.88642 13.0227149,14.88642 Z M0.477272272,93.6363449 C12.8181696,93.6363449 20.3181624,88.7272587 20.3181624,76.5909066 L20.3181624,21.6364136 L5.79544902,21.6364136 L5.79544902,76.3522705 C5.79544902,80.3068122 4.12499607,82.284083 -0.545454025,82.284083 C-1.1590898,82.284083 -1.70454383,82.284083 -2.45454311,82.2159013 L-2.45454311,93.5681632 C-1.39772594,93.602254 -0.545454025,93.6363449 0.477272272,93.6363449 Z M47.5681537,75.0227263 C63.4545022,75.0227263 73.3408564,64.1477367 73.3408564,48.022752 C73.3408564,31.7954948 63.4545022,20.954596 47.5681537,20.954596 C31.6818052,20.954596 21.795451,31.7954948 21.795451,48.022752 C21.795451,64.1477367 31.6818052,75.0227263 47.5681537,75.0227263 Z M47.6363355,63.772737 C40.306797,63.772737 36.5568006,57.0568343 36.5568006,47.9204794 C36.5568006,38.7841245 40.306797,32.0341309 47.6363355,32.0341309 C54.8295104,32.0341309 58.5795069,38.7841245 58.5795069,47.9204794 C58.5795069,57.0568343 54.8295104,63.772737 47.6363355,63.772737 Z M89.7499802,74.9886354 C97.4886092,74.9886354 102.499968,71.6136386 105.056784,66.7386433 L105.465874,66.7386433 L105.465874,74 L119.238588,74 L119.238588,38.6818519 C119.238588,26.204591 108.670417,20.954596 97.0113369,20.954596 C84.4658944,20.954596 76.2159022,26.954596 74.2045405,36.5000358 L87.6363459,37.5909438 C88.6249813,34.1136744 91.7272511,31.5568587 96.9431552,31.5568587 C101.886332,31.5568587 104.715875,34.0454926 104.715875,38.3409431 L104.715875,38.5454884 C104.715875,41.9204851 101.136333,42.3636665 92.034069,43.2500293 C81.6704425,44.2045739 72.3636332,47.6818433 72.3636332,59.3750139 C72.3636332,69.7386404 79.7613534,74.9886354 89.7499802,74.9886354 Z M93.9090672,64.9659177 C89.4431623,64.9659177 86.2386199,62.8863742 86.2386199,58.8977417 C86.2386199,54.8068365 89.6136167,52.7954748 94.7272482,52.0795664 C97.8976997,51.636385 103.079513,50.8863857 104.818148,49.7272959 L104.818148,55.2841088 C104.818148,60.7727399 100.284061,64.9659177 93.9090672,64.9659177 Z M146.18179,75.0227263 C162.068139,75.0227263 171.954493,64.1477367 171.954493,48.022752 C171.954493,31.7954948 162.068139,20.954596 146.18179,20.954596 C130.295442,20.954596 120.409087,31.7954948 120.409087,48.022752 C120.409087,64.1477367 130.295442,75.0227263 146.18179,75.0227263 Z M146.249972,63.772737 C138.920433,63.772737 135.170437,57.0568343 135.170437,47.9204794 C135.170437,38.7841245 138.920433,32.0341309 146.249972,32.0341309 C153.443147,32.0341309 157.193143,38.7841245 157.193143,47.9204794 C157.193143,57.0568343 153.443147,63.772737 146.249972,63.772737 Z"></path>
                    <path d="M27.0136034,78.8597166 C27.6830474,78.8597166 28.2312536,78.348409 28.2312536,77.7211346 C28.2312536,77.0991315 27.6830474,76.5878238 27.0136034,76.5878238 C26.3494305,76.5878238 25.8012244,77.0991315 25.8012244,77.7211346 C25.8012244,78.348409 26.3494305,78.8597166 27.0136034,78.8597166 Z M25.073797,91.0362187 C26.9819761,91.0362187 28.141643,90.277164 28.141643,88.4006122 L28.141643,79.9034168 L25.8961062,79.9034168 L25.8961062,88.3637137 C25.8961062,88.9751744 25.6378168,89.2809048 24.9156606,89.2809048 C24.8207788,89.2809048 24.7364393,89.2809048 24.6204727,89.2703623 L24.6204727,91.0256763 C24.7838803,91.0309475 24.9156606,91.0362187 25.073797,91.0362187 Z M32.1077061,88.1581364 C34.5640913,88.1581364 36.0927431,86.4766194 36.0927431,83.9833357 C36.0927431,81.4742383 34.5640913,79.7979926 32.1077061,79.7979926 C29.6513208,79.7979926 28.122669,81.4742383 28.122669,83.9833357 C28.122669,86.4766194 29.6513208,88.1581364 32.1077061,88.1581364 Z M32.1182485,86.4186361 C30.9849377,86.4186361 30.4051043,85.3802071 30.4051043,83.967522 C30.4051043,82.554837 30.9849377,81.5111368 32.1182485,81.5111368 C33.2304744,81.5111368 33.8103079,82.554837 33.8103079,83.967522 C33.8103079,85.3802071 33.2304744,86.4186361 32.1182485,86.4186361 Z M39.7319958,88.1581364 C42.1883811,88.1581364 43.7170329,86.4766194 43.7170329,83.9833357 C43.7170329,81.4742383 42.1883811,79.7979926 39.7319958,79.7979926 C37.2756106,79.7979926 35.7469588,81.4742383 35.7469588,83.9833357 C35.7469588,86.4766194 37.2756106,88.1581364 39.7319958,88.1581364 Z M39.7425383,86.4186361 C38.6092275,86.4186361 38.029394,85.3802071 38.029394,83.967522 C38.029394,82.554837 38.6092275,81.5111368 39.7425383,81.5111368 C40.8547642,81.5111368 41.4345976,82.554837 41.4345976,83.967522 C41.4345976,85.3802071 40.8547642,86.4186361 39.7425383,86.4186361 Z M47.3457432,91.2048975 C49.6598057,91.2048975 51.3044242,90.1506549 51.3044242,88.0790682 L51.3044242,79.9034168 L49.074701,79.9034168 L49.074701,81.2633898 L48.9903616,81.2633898 C48.6899025,80.6044881 48.0310009,79.7979926 46.6762991,79.7979926 C44.8999003,79.7979926 43.3976046,81.1790504 43.3976046,83.9358948 C43.3976046,86.6294846 44.8577306,87.8840333 46.6815703,87.8840333 C47.9730175,87.8840333 48.6951737,87.2356741 48.9903616,86.5662301 L49.0852435,86.5662301 L49.0852435,88.0474409 C49.0852435,89.1596669 48.3736297,89.5919063 47.3984553,89.5919063 C46.4074673,89.5919063 45.906702,89.1596669 45.7222096,88.6694441 L43.6453516,88.9488183 C43.9141835,90.2244519 45.163461,91.2048975 47.3457432,91.2048975 Z M47.3931841,86.1972451 C46.2915006,86.1972451 45.6905823,85.3222238 45.6905823,83.9253523 C45.6905823,82.5495657 46.2809582,81.5849338 47.3931841,81.5849338 C48.4843252,81.5849338 49.0957859,82.507396 49.0957859,83.9253523 C49.0957859,85.3538511 48.4737828,86.1972451 47.3931841,86.1972451 Z M53.8578073,91.0362187 L53.8578073,86.7032816 L53.9263331,86.7032816 C54.2373346,87.3779969 54.9173211,88.1317803 56.2245819,88.1317803 C58.0695065,88.1317803 59.5085476,86.6716543 59.5085476,83.9622508 C59.5085476,81.1790504 58.0062519,79.7979926 56.2298531,79.7979926 C54.8751514,79.7979926 54.2267922,80.6044881 53.9263331,81.2633898 L53.82618,81.2633898 L53.82618,79.9034168 L51.6122705,79.9034168 L51.6122705,91.0362187 L53.8578073,91.0362187 Z M55.5129682,86.3448391 C54.4323695,86.3448391 53.8103664,85.3960208 53.8103664,83.9517084 C53.8103664,82.507396 54.4218271,81.5849338 55.5129682,81.5849338 C56.6251941,81.5849338 57.21557,82.5495657 57.21557,83.9517084 C57.21557,85.3643935 56.6146517,86.3448391 55.5129682,86.3448391 Z M62.8315279,88.1581364 C64.9294706,88.1581364 66.4317663,87.0880801 66.4370376,85.4909026 C66.4317663,84.3206933 65.6674405,83.619622 64.096619,83.298078 L62.6312218,83.0028901 C61.8774383,82.8394825 61.598064,82.581193 61.6033352,82.1911233 C61.598064,81.7061717 62.1462702,81.3898989 62.8420703,81.3898989 C63.6222098,81.3898989 64.0860766,81.8168671 64.196772,82.3387172 L66.2525451,82.2122081 C66.052239,80.7204548 64.8504024,79.7979926 62.8051718,79.7979926 C60.7335851,79.7979926 59.3683409,80.7573533 59.3736121,82.3176324 C59.3683409,83.5300114 60.1326668,84.3154221 61.7140307,84.6316949 L63.1161734,84.9110692 C63.8225159,85.0533919 64.1440599,85.3116814 64.1546023,85.7175648 C64.1440599,86.1972451 63.6222098,86.539874 62.8367991,86.539874 C62.0355747,86.539874 61.5031822,86.1972451 61.3661306,85.5383435 L59.1574924,85.6543102 C59.3683409,87.2040468 60.6861442,88.1581364 62.8315279,88.1581364 Z M67.6831588,88.1370515 C68.3578741,88.1370515 68.9429788,87.5730317 68.94825,86.8719604 C68.9429788,86.1814315 68.3578741,85.6174117 67.6831588,85.6174117 C66.9873587,85.6174117 66.4127965,86.1814315 66.4180677,86.8719604 C66.4127965,87.5730317 66.9873587,88.1370515 67.6831588,88.1370515 Z M71.5490693,88 L71.5490693,83.1399416 C71.5490693,82.2438354 72.1183603,81.6481883 72.8668725,81.6481883 C73.6048423,81.6481883 74.1003364,82.1542248 74.1003364,82.9501779 L74.1003364,88 L76.2773473,88 L76.2773473,83.0556022 C76.2773473,82.2174793 76.7570277,81.6481883 77.5740657,81.6481883 C78.2909507,81.6481883 78.8286144,82.0962414 78.8286144,82.9976189 L78.8286144,88 L81.06888,88 L81.06888,82.554837 C81.06888,80.799523 80.0251798,79.7979926 78.5176129,79.7979926 C77.3315899,79.7979926 76.4091277,80.404182 76.0770412,81.3319155 L75.9927018,81.3319155 C75.7344124,80.3936396 74.906832,79.7979926 73.794606,79.7979926 C72.7034649,79.7979926 71.8758845,80.377826 71.5385268,81.3319155 L71.443645,81.3319155 L71.443645,79.9034168 L69.3035325,79.9034168 L69.3035325,88 L71.5490693,88 Z M85.0454946,88.1581364 C87.0485555,88.1581364 88.397986,87.182962 88.7142588,85.6806663 L86.6374009,85.5436147 C86.4107387,86.1603467 85.8309053,86.4818907 85.0823931,86.4818907 C83.9596247,86.4818907 83.2480109,85.7386496 83.2480109,84.5315418 L83.2480109,84.5262706 L88.7616997,84.5262706 L88.7616997,83.9095387 C88.7616997,81.1579655 87.0959964,79.7979926 84.9558839,79.7979926 C82.5732957,79.7979926 81.0288302,81.4900519 81.0288302,83.9886069 C81.0288302,86.5556876 82.5522108,88.1581364 85.0454946,88.1581364 Z M86.6479433,83.1346704 L83.2480109,83.1346704 C83.2954518,82.2122081 83.9965232,81.4742383 84.9927824,81.4742383 C85.9679568,81.4742383 86.6426721,82.1700384 86.6479433,83.1346704 Z" id="joogps.me"></path>
                </g>
            </svg>
        `

        this.innerHTML = `
        <style>
            header {
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
            
            #joogps\\.me {
                transition: .3s;
            }
            
            .collapsed #joogps\\.me {
                opacity: 0;
            }
            
            .social {
                max-height: 75px;
            
                align-self: center;
            
                box-sizing: content-box;
            
                text-align: right;
            
                display: flex;
                align-items: center;
                justify-content: center;
            
                transition: .2s;
            }
            
            .collapsed .social {
                max-height: 40px;
            }
            
            .social img {
                height: 60%;
                margin: 8px;
            
                transition: .2s;
            }
            
            .collapsed .social img {
                margin: 4px;
            }
            
            .social img:hover {
                transform: scale(0.9);
            }
            
            .social a {
                text-decoration: none;
            }
        </style>
        <header>
            <a href="https://joogps.me">
                ${logo} 
            </a>

            <div class="social">
                <a href="https://github.com/joogps">
                    <img src="../assets/social/github.svg">
                </a>

                <a href="https://twitter.com/joogps">
                    <img src="../assets/social/twitter.svg">
                </a>

                <a href="https://www.youtube.com/channel/UCoI_nPpWO2sY8wVViyOmAIA/">
                    <img src="../assets/social/youtube.svg">
                </a>

                <a href="https://www.instagram.com/joogps/">
                    <img src="../assets/social/instagram.svg">
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