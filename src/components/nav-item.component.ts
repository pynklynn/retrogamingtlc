import { customElement, LitElement, property, html } from 'lit-element';
import type { TemplateResult } from 'lit-element';

@customElement('rtg-nav-item')
export class RtgNavItem extends LitElement {
  [key: string]: any;

  public createRenderRoot() {
    return this;
  }

  @property({ type: String, attribute: 'icon' })
  public icon = '';

  @property({ type: String, attribute: 'color' })
  public color = '';

  @property({ type: String, attribute: 'link' })
  public link = '';

  @property({ type: String, attribute: 'block-title'})
  public title = '';

  public render(): TemplateResult {
    const icon = this[`${this.icon}Icon`]();
    return html`
      ${icon}
      <span class="rtg-nav-item-text" aria-hidden="true">${this.title}</span>
    `;
  }

  protected mercariIcon(): TemplateResult {
    return html`
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 76.54 76.54" style="enable-background:new 0 0 76.54 76.54;" xml:space="preserve" aria-hidden="true">
        <style type="text/css">
          .st0{fill:#FFFFFF;}
          .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}
        </style>
        <g>
          <g>
            <g>
              <path class="st0" d="M60.34,40.63c-10.32,0-18.69-8.37-18.69-18.69c0-6.23,3.06-11.73,7.75-15.13L38.7,1.46
                c-1.73-0.86-3.77-0.86-5.49,0L3.96,16.09c-2.07,1.03-3.37,3.14-3.37,5.44v34.15c0,2.3,1.3,4.41,3.37,5.44l29.24,14.63
                c1.73,0.87,3.77,0.87,5.49,0l29.24-14.63c2.07-1.03,3.37-3.14,3.37-5.44V37.04C68.23,39.29,64.45,40.63,60.34,40.63z
                M28.86,60.25l-3.4-1.71c0,0,0-9.44,0-10.12c0-2.97-1.82-5.45-4.26-5.73c-1.01-0.12-1.88,0.69-1.91,2.44s0,10.29,0,10.29
                l-3.12-1.56c0-8.36,0-8.34,0-9.58c0-4.23-2.73-5.57-3.93-5.7c-0.67-0.07-1.93,0.33-1.93,2.5c0,1.89,0,9.84,0,9.84l-3.1-1.56
                c0,0,0-7.16,0-9.17c0-2.69,1.51-5.36,4.63-5.02c2.92,0.32,5.17,2.91,5.87,4.6c1.09-0.96,2.09-1.16,3.53-0.96
                c1.59,0.22,7.6,2.51,7.6,10.65C28.86,51.9,28.86,60.25,28.86,60.25z"/>
              <circle class="st1" cx="60.34" cy="21.94" r="15.85"/>
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
        <style type="text/css">
          .st0{fill:#FFFFFF;}
        </style>
        <g>
          <path class="st0" d="M1024,512C1024,229.23,794.77,0,512,0S0,229.23,0,512c0,255.55,187.23,467.37,432,505.78V660H302V512h130
            V399.2C432,270.88,508.44,200,625.39,200C681.41,200,740,210,740,210v126h-64.56c-63.6,0-83.44,39.47-83.44,79.96V512h142
            l-22.7,148H592v357.78C836.77,979.37,1024,767.55,1024,512z"/>
        </g>
      </svg>
    `;
  }

  public firstUpdated(): void {
    this.setAttribute('role', 'link');
  }
}