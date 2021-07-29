import { customElement, LitElement, property, html } from 'lit-element';
import type { TemplateResult } from 'lit-element';

@customElement('rtg-nav-item')
export class RtgNavItem extends LitElement {
  public createRenderRoot() {
    return this;
  }

  @property({ type: String, attribute: 'icon' })
  public icon = '';

  @property({ type: String, attribute: 'color' })
  public color = '';

  @property({ type: String, attribute: 'link' })
  public link = '';

  public render(): TemplateResult {
    return html`
      <span>${this.color}</span>
      <span>${this.icon}</span>
      <span>${this.link}</span>
    `;
  }
}