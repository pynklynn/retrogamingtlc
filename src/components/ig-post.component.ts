import { LitElement, property, html } from 'lit-element';
import type { TemplateResult } from 'lit-element';
import { Slotify } from '@eightshapes/slotify';

export class RtgIgPost extends Slotify(LitElement) {
  [key: string]: any;

  @property({ type: String, attribute: 'image' })
  public image = '';

  public render(): TemplateResult {
    return html`
      <img src="${this.image}">
      <s-slot></s-slot>
    `;
  }
}

// @ts-expect-error
customElements.define('rtg-ig-post', RtgIgPost);
