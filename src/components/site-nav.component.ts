import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { TemplateResult } from 'lit';

@customElement('rtg-site-nav')
export class RtgSiteNav extends LitElement {
  public createRenderRoot() {
    return this;
  }

  public render(): TemplateResult {
    return html`
      <nav class="rtg-site-nav">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 2000 1000" style="enable-background:new 0 0 2000 1000;" xml:space="preserve" class="rtg-header-logo" alt="Retro Gaming TLC">
          <g>
            <rect x="20" y="20" class="rtg-logo-st0" width="132.41" height="132.41"/>
            <g>
              <rect x="516.55" y="20" class="rtg-logo-st1" width="132.41" height="496.55"/>
              <rect x="516.55" y="516.55" class="rtg-logo-st2" width="132.41" height="132.41"/>
            </g>
            <g>
              <rect x="682.07" y="20" class="rtg-logo-st3" width="132.41" height="662.07"/>
              <rect x="682.07" y="682.07" class="rtg-logo-st4" width="132.41" height="132.41"/>
            </g>
            <g>
              <rect x="847.59" y="20" class="rtg-logo-st5" width="132.41" height="827.59"/>
              <rect x="847.59" y="847.59" class="rtg-logo-st6" width="132.41" height="132.41"/>
            </g>
            <g>
              <rect x="185.52" y="20" class="rtg-logo-st7" width="132.41" height="165.52"/>
              <rect x="185.52" y="185.52" class="rtg-logo-st8" width="132.41" height="132.41"/>
            </g>
            <g>
              <rect x="351.03" y="20" class="rtg-logo-st9" width="132.41" height="331.03"/>
              <rect x="351.03" y="351.03" class="rtg-logo-st10" width="132.41" height="132.41"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M1128.73,371.93h-25.61l-26.44-41.28c-3.87-5.96-5.8-10.63-5.8-14c0-6.33,2.73-11.49,8.2-15.48
                c2.58-1.41,5.1-2.82,7.55-4.24c2.46-1.41,4.97-2.82,7.55-4.24c5.47-3.62,8.2-8.08,8.2-13.36c0-3.62-1.44-6.88-4.33-9.77
                c-2.89-2.89-6.17-4.33-9.86-4.33h-17.32v106.69h-22.02V257.31c0-3.75,1.41-7.03,4.24-9.86c2.83-2.82,6.14-4.24,9.95-4.24h25.15
                c9.46,0,17.84,3.41,25.15,10.23c7.31,6.76,10.96,14.87,10.96,24.32c0,8.78-2.86,16.8-8.57,24.05
                c-5.65,7.19-12.81,12.32-21.47,15.39L1128.73,371.93z" class="rtg-logo-text"/>
            </g>
            <g>
              <path d="M1283.97,371.93h-50.3c-3.81,0-7.13-1.38-9.95-4.15c-2.83-2.76-4.24-6.05-4.24-9.86V257.31c0-3.75,1.41-7.03,4.24-9.86
                c2.83-2.82,6.14-4.24,9.95-4.24h50.3v22.02h-42.47v31.42h26.72v22.02h-26.72v31.42h42.47V371.93z" class="rtg-logo-text"/>
            </g>
            <g>
              <path d="M1453.4,265.24h-25.15v106.69h-22.02V265.24h-25.15v-22.02h72.33V265.24z" class="rtg-logo-text"/>
            </g>
            <g>
              <path d="M1625.28,371.93h-25.61l-26.44-41.28c-3.87-5.96-5.8-10.63-5.8-14c0-6.33,2.73-11.49,8.2-15.48
                c2.58-1.41,5.1-2.82,7.55-4.24c2.46-1.41,4.97-2.82,7.55-4.24c5.47-3.62,8.2-8.08,8.2-13.36c0-3.62-1.44-6.88-4.33-9.77
                c-2.89-2.89-6.17-4.33-9.86-4.33h-17.32v106.69h-22.02V257.31c0-3.75,1.41-7.03,4.24-9.86c2.83-2.82,6.14-4.24,9.95-4.24h25.15
                c9.46,0,17.84,3.41,25.15,10.23c7.31,6.76,10.96,14.87,10.96,24.32c0,8.78-2.86,16.8-8.57,24.05
                c-5.65,7.19-12.81,12.32-21.47,15.39L1625.28,371.93z" class="rtg-logo-text"/>
            </g>
            <g>
              <path d="M1784.48,335.99c0,9.64-3.62,18.06-10.87,25.24c-7.31,7.13-15.75,10.69-25.34,10.69s-18.03-3.56-25.34-10.69
                c-7.19-7.19-10.78-15.6-10.78-25.24v-56.66c0-9.64,3.59-18.06,10.78-25.24c7.25-7.25,15.69-10.87,25.34-10.87
                c9.64,0,18.09,3.62,25.34,10.87c7.25,7.19,10.87,15.6,10.87,25.24V335.99z M1762.46,335.99v-56.66c0-3.62-1.44-6.88-4.33-9.77
                c-2.89-2.89-6.17-4.33-9.86-4.33s-6.97,1.44-9.86,4.33c-2.83,2.83-4.24,6.08-4.24,9.77v56.66c0,3.69,1.41,6.94,4.24,9.77
                c2.89,2.89,6.17,4.33,9.86,4.33s6.97-1.44,9.86-4.33C1761.02,342.87,1762.46,339.62,1762.46,335.99z" class="rtg-logo-text"/>
            </g>
            <g>
              <path d="M1298.99,537.44h-22.94l-7.92-28.1h-32.71l-8.02,28.1h-22.76l32.25-115.07c2.58-9.09,7.55-13.64,14.93-13.64
                c7.31,0,12.28,4.55,14.93,13.64L1298.99,537.44z M1262.04,487.32l-10.23-36.3l-10.23,36.3H1262.04z" class="rtg-logo-text"/>
            </g>
            <g>
              <path d="M1122.32,446.42h-21.84c-0.49-4.3-1.97-7.98-4.42-11.06c-2.52-3.07-5.8-4.61-9.86-4.61c-3.69,0-6.97,1.44-9.86,4.33
                c-2.89,2.89-4.33,6.14-4.33,9.77v56.66c0,3.62,1.44,6.88,4.33,9.77c2.89,2.89,6.17,4.33,9.86,4.33c3.62,0,6.88-1.44,9.77-4.33
                c2.89-2.89,4.33-6.14,4.33-9.77v-17.32h-15.66v-22.02h23.59c3.75,0,7.03,1.41,9.86,4.24c2.83,2.83,4.24,6.11,4.24,9.86v61.18
                h-22.02v-2.76c-4.55,1.84-9.25,2.76-14.1,2.76c-9.58,0-18.03-3.56-25.34-10.69c-7.25-7.19-10.87-15.6-10.87-25.24v-56.66
                c0-9.64,3.62-18.06,10.87-25.24c7.25-7.25,15.69-10.87,25.34-10.87c10.01,0,18.49,3.75,25.43,11.24
                C1118.58,427.47,1122.14,436.28,1122.32,446.42z" class="rtg-logo-text"/>
            </g>
            <g>
              <path d="M1471.51,537.44h-22.02V473.5l-18.24,50.49c-3.26,8.97-7.92,13.45-14,13.45c-6.08,0-10.75-4.48-14-13.45l-18.24-50.49
                v63.94h-22.02V422.83c0-3.69,1.32-6.94,3.96-9.77c2.7-2.89,5.83-4.33,9.4-4.33c5.96,0,10.53,4.55,13.73,13.64l27.18,75.64
                l27.18-75.64c3.19-9.09,7.77-13.64,13.73-13.64c3.68,0,6.82,1.44,9.4,4.33c2.64,2.83,3.96,6.08,3.96,9.77V537.44z" class="rtg-logo-text"/>
            </g>
            <g>
              <path d="M1285.91,702.96h-50.3c-3.81,0-7.13-1.38-9.95-4.15c-2.83-2.76-4.24-6.05-4.24-9.86V574.25h22.02v106.88h42.47V702.96z" class="rtg-logo-text"/>
            </g>
            <g>
              <path d="M1122.37,596.27h-25.15v106.69h-22.02V596.27h-25.15v-22.02h72.33V596.27z" class="rtg-logo-text"/>
            </g>
            <g>
              <path d="M1453.36,611.93h-21.84c-0.49-4.3-1.97-7.98-4.42-11.06c-2.52-3.07-5.8-4.61-9.86-4.61c-3.69,0-6.97,1.44-9.86,4.33
                c-2.89,2.89-4.33,6.14-4.33,9.77v56.66c0,3.62,1.44,6.88,4.33,9.77c2.89,2.89,6.17,4.33,9.86,4.33c3.99,0,7.34-1.63,10.04-4.88
                c2.33-2.89,3.75-6.51,4.24-10.87h21.84c-0.18,10.26-3.69,19.01-10.5,26.26c-7,7.55-15.54,11.33-25.61,11.33
                c-9.58,0-18.03-3.56-25.34-10.69c-7.25-7.19-10.87-15.6-10.87-25.24v-56.66c0-9.64,3.62-18.06,10.87-25.25
                c7.25-7.25,15.69-10.87,25.34-10.87c10.07,0,18.61,3.81,25.61,11.42C1449.55,593.04,1453.05,601.8,1453.36,611.93z" class="rtg-logo-text"/>
            </g>
            <g>
              <path d="M1593.77,537.44h-22.02V408.73h22.02V537.44z" class="rtg-logo-text"/>
            </g>
            <g>
              <path d="M1784.39,523.44c0,3.69-1.32,6.94-3.96,9.77c-2.58,2.83-5.71,4.24-9.4,4.24c-5.41,0-9.95-4.45-13.64-13.36l-23.31-56.39
                v69.74h-22.02V422.83c0-3.69,1.32-6.94,3.96-9.77c2.7-2.89,5.83-4.33,9.4-4.33c5.47,0,10.04,4.48,13.73,13.45l23.22,56.48v-69.93
                h22.02V523.44z" class="rtg-logo-text"/>
            </g>
            <g>
              <path d="M1949.91,446.42h-21.84c-0.49-4.3-1.97-7.98-4.42-11.06c-2.52-3.07-5.8-4.61-9.86-4.61c-3.69,0-6.97,1.44-9.86,4.33
                c-2.89,2.89-4.33,6.14-4.33,9.77v56.66c0,3.62,1.44,6.88,4.33,9.77c2.89,2.89,6.17,4.33,9.86,4.33c3.62,0,6.88-1.44,9.77-4.33
                c2.89-2.89,4.33-6.14,4.33-9.77v-17.32h-15.66v-22.02h23.59c3.75,0,7.03,1.41,9.86,4.24c2.83,2.83,4.24,6.11,4.24,9.86v61.18
                h-22.02v-2.76c-4.55,1.84-9.25,2.76-14.1,2.76c-9.58,0-18.03-3.56-25.34-10.69c-7.25-7.19-10.87-15.6-10.87-25.24v-56.66
                c0-9.64,3.62-18.06,10.87-25.24c7.25-7.25,15.69-10.87,25.34-10.87c10.01,0,18.49,3.75,25.43,11.24
                C1946.16,427.47,1949.72,436.28,1949.91,446.42z" class="rtg-logo-text"/>
            </g>
          </g>
        </svg>
        <rtg-nav-item
          link="https://www.youtube.com/channel/UC5r8oAok_C4WZmO1nNJr2kA"
          color="red"
          icon="youtube"
          block-title="YouTube"
          title="Visit us on YouTube"
        ></rtg-nav-item>
        <rtg-nav-item
          link="https://www.instagram.com/retrogamingtlc/"
          color="orange"
          icon="instagram"
          block-title="Instagram"
          title="Visit us on Instagram"
        ></rtg-nav-item>
        <rtg-nav-item
          link="https://twitter.com/retrogamingtlc"
          color="yellow"
          icon="twitter"
          block-title="Twitter"
          title="Visit us on Twitter"
        ></rtg-nav-item>
        <rtg-nav-item
          link="https://offerup.com/p/65700282"
          color="green"
          icon="offerup"
          block-title="OfferUp"
          title="Visit our shop on OfferUp"
        ></rtg-nav-item>
        <rtg-nav-item
          link="https://www.facebook.com/retrogamingtlc"
          color="blue"
          icon="facebook"
          block-title="Facebook"
          title="Visit us on Facebook"
        ></rtg-nav-item>
        <rtg-nav-item
          link="https://www.mercari.com/u/548499438/"
          color="purple"
          icon="mercari"
          block-title="Mercari"
          title="Visit our shop on Mercari"
        ></rtg-nav-item>
      </nav>
    `;
  }
}
