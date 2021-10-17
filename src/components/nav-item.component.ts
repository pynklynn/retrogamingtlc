import { customElement, LitElement, property, html } from 'lit-element';
import type { TemplateResult } from 'lit-element';

@customElement('rtg-nav-item')
export class RtgNavItem extends LitElement {
  [key: string]: any;

  public createRenderRoot() {
    return this;
  }

  public firstUpdated(): void {
    this.setAttribute('role', 'link');
  }

  @property({ type: String, attribute: 'icon' })
  public icon = '';

  @property({ type: String, attribute: 'color' })
  public color = '';

  @property({ type: String, attribute: 'link' })
  public link = '';

  @property({ type: String, attribute: 'block-title'})
  public blockTitle = '';

  @property({ type: String, attribute: 'title' })
  public title = '';

  public render(): TemplateResult {
    const icon = this[`${this.icon}Icon`]();
    return html`
      <a href="${this.link}" target="_blank" rel="noopener" aria-label="${this.title}">
        ${icon}
        <span class="rtg-nav-item-text" aria-hidden="true">${this.blockTitle}</span>
      </a>
    `;
  }

  protected mercariIcon(): TemplateResult {
    return html`
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 76.54 76.54" style="enable-background:new 0 0 76.54 76.54;" xml:space="preserve" aria-hidden="true">
        <g>
          <g>
            <g>
              <path d="M60.34,40.63c-10.32,0-18.69-8.37-18.69-18.69c0-6.23,3.06-11.73,7.75-15.13L38.7,1.46
                c-1.73-0.86-3.77-0.86-5.49,0L3.96,16.09c-2.07,1.03-3.37,3.14-3.37,5.44v34.15c0,2.3,1.3,4.41,3.37,5.44l29.24,14.63
                c1.73,0.87,3.77,0.87,5.49,0l29.24-14.63c2.07-1.03,3.37-3.14,3.37-5.44V37.04C68.23,39.29,64.45,40.63,60.34,40.63z
                M28.86,60.25l-3.4-1.71c0,0,0-9.44,0-10.12c0-2.97-1.82-5.45-4.26-5.73c-1.01-0.12-1.88,0.69-1.91,2.44s0,10.29,0,10.29
                l-3.12-1.56c0-8.36,0-8.34,0-9.58c0-4.23-2.73-5.57-3.93-5.7c-0.67-0.07-1.93,0.33-1.93,2.5c0,1.89,0,9.84,0,9.84l-3.1-1.56
                c0,0,0-7.16,0-9.17c0-2.69,1.51-5.36,4.63-5.02c2.92,0.32,5.17,2.91,5.87,4.6c1.09-0.96,2.09-1.16,3.53-0.96
                c1.59,0.22,7.6,2.51,7.6,10.65C28.86,51.9,28.86,60.25,28.86,60.25z"/>
              <circle cx="60.34" cy="21.94" r="15.85"/>
            </g>
          </g>
        </g>
      </svg>
    `;
  }

  protected facebookIcon(): TemplateResult {
    return html`
      <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
        <g>
          <path d="M1024,512C1024,229.23,794.77,0,512,0S0,229.23,0,512c0,255.55,187.23,467.37,432,505.78V660H302V512h130
            V399.2C432,270.88,508.44,200,625.39,200C681.41,200,740,210,740,210v126h-64.56c-63.6,0-83.44,39.47-83.44,79.96V512h142
            l-22.7,148H592v357.78C836.77,979.37,1024,767.55,1024,512z"/>
        </g>
      </svg>
    `;
  }

  protected twitterIcon(): TemplateResult {
    return html`
      <svg version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 248 204" style="enable-background:new 0 0 248 204;" xml:space="preserve">
        <g id="Logo_1_">
          <path id="white_background" d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
            C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
            c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
            c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
            c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
            c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"/>
        </g>
      </svg>
    `;
  }

  protected offerupIcon(): TemplateResult {
    return html`
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 510.24 510.24" style="enable-background:new 0 0 510.24 510.24;" xml:space="preserve">
        <g>
          <path d="M501.37,271.47c0,1.12,0,2.24,0,3.36c-0.2,0.76-0.51,1.5-0.6,2.27c-0.41,3.41-0.69,6.84-1.14,10.24
            c-3.77,28.21-12.05,55.02-25.21,80.28c-22.02,42.27-53.63,75.52-94.71,99.63c-32.5,19.07-67.66,29.87-105.25,32.7
            c-3.25,0.24-6.49,0.64-9.73,0.96c-5.92,0-11.84,0-17.76,0c-1.17-0.19-2.34-0.49-3.52-0.56c-12.71-0.66-25.3-2.26-37.76-4.85
            c-32.67-6.8-62.74-19.7-90.09-38.78c-30.58-21.33-55.18-48.19-73.6-80.64C24.01,344.39,13.66,310.34,10.85,274
            c-0.29-3.73-0.66-7.45-0.99-11.18c0-5.44,0-10.88,0-16.32c0.18-1.01,0.42-2.02,0.52-3.04c0.66-7,1.1-14.03,1.97-21.01
            c2.96-23.64,9.48-46.32,19.31-67.99c17.15-37.8,42.2-69.4,75.24-94.55c38.13-29.03,81.15-45.47,128.9-49.52
            c3.25-0.28,6.5-0.68,9.74-1.02c7.2,0,14.4,0,21.6,0c1,0.2,2,0.51,3.02,0.57c13.35,0.75,26.56,2.54,39.59,5.49
            c35.76,8.09,68.21,23.31,97.13,45.87c29.98,23.39,53.41,52.18,70.13,86.35c11.46,23.42,18.95,48.08,22.43,73.94
            c0.67,4.97,1.3,9.95,1.95,14.92c-0.88-0.65-1.86-1.2-2.63-1.96c-12.41-12.36-24.81-24.73-37.18-37.13
            c-3.66-3.67-7.23-7.43-11.07-11.37c-17.93,17.9-35.51,35.45-53.28,53.19c-0.9-5.07-1.52-9.67-2.54-14.17
            c-8.53-37.52-28.74-67.16-60.79-88.39c-29.22-19.36-61.56-26.47-96.26-22.17c-25.45,3.15-48.47,12.69-68.64,28.58
            c-31.06,24.47-49.2,56.47-54.04,95.72c-2.82,22.83,0.01,45.16,8.32,66.65c12.34,31.93,33.46,56.5,63.26,73.26
            c28.8,16.2,59.75,21.47,92.39,16.24c27.99-4.49,52.49-16.46,73.26-35.7c24.31-22.51,38.91-50.33,44.21-83.04
            c0.19-1.15,0.82-2.43,1.64-3.25c14.84-14.91,29.74-29.75,44.61-44.62c2.52-2.52,4.93-5.15,7.43-7.77c0.94,0.85,1.49,1.31,2,1.81
            c11.03,11.02,22.05,22.06,33.1,33.06C490.53,260.83,495.96,266.14,501.37,271.47z"/>
        </g>
      </svg>
    `;
  }

  protected youtubeIcon(): TemplateResult {
    return html`
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 192 192" style="enable-background:new 0 0 192 192;" xml:space="preserve">
        <path d="M180.32,53.36c-2.02-7.62-7.99-13.62-15.56-15.66C151.04,34,96,34,96,34s-55.04,0-68.76,3.7
          c-7.57,2.04-13.54,8.04-15.56,15.66C8,67.18,8,96,8,96s0,28.82,3.68,42.64c2.02,7.62,7.99,13.62,15.56,15.66
          C40.96,158,96,158,96,158s55.04,0,68.76-3.7c7.57-2.04,13.54-8.04,15.56-15.66C184,124.82,184,96,184,96S184,67.18,180.32,53.36z
          M78,122.17V69.83L124,96L78,122.17z"/>
      </svg>
    `;
  }

  protected instagramIcon(): TemplateResult {
    return html`
      <svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
        <g>
          <path d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161
            C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501
            213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617
            227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016
            C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893
            232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361
            227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776
            C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286
            192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978
            127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092
            C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858
            42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446
            28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492
            C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147
            23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472
            28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319
            C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218
            63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353
            127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749
            C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548
            28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046
            6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718
            C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183
            0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372
            C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547
            35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323
            75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256
            167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847
            211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651
            C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121
            254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254
            C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875
            249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857
            C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141
            194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z
            M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254
            C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197
            193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115
            127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259
            85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333
            C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259
            151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129
            204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129
            180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624
            C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z">
          </path>
        </g>
      </svg>
    `;
  }
}
