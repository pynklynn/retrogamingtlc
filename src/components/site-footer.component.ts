import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { TemplateResult } from 'lit';

@customElement('rtg-site-footer')
export class RtgSiteFooter extends LitElement {
  public createRenderRoot() {
    return this;
  }

  public render(): TemplateResult {
    const thisYear = (new Date()).getFullYear();

    return html`
      <footer class="rtg-site-footer">
        &copy;2020-${thisYear} Pynk Lynn LLC dba Retro Gaming TLC
      </footer>
    `;
  }
}
