import { LitElement, html } from 'lit-element';
import type { TemplateResult } from 'lit-element';
import { Slotify } from '@eightshapes/slotify';
import { fetchInstagramFeed } from '../services/instagram-rss.service';
import type { RtgIgPost } from './ig-post.component';

export class RtgIgFeed extends Slotify(LitElement) {
  [key: string]: any;

  protected instagramFeed: any[] = [];

  protected template = '';

  public async firstUpdated(): Promise<void> {
    this.template = (this.querySelector('template') as HTMLTemplateElement).innerHTML.trim();
    console.log(this.template);
    // try {
      console.log(await fetchInstagramFeed());
      this.instagramFeed = (await fetchInstagramFeed()).items.reverse();
      const parser = new DOMParser();
      for (let i = 0, len = this.instagramFeed.length; i < len; i++) {
        const descriptionDoc = parser.parseFromString(this.instagramFeed[i].description, 'text/html');
        const imageUrl = (descriptionDoc.querySelector('img') as HTMLImageElement).src;
        const descriptionText = (descriptionDoc.querySelector('div div') as HTMLElement).innerText;
        const elementTemplate = `${this.template}`.replace('{{image}}', imageUrl).replace('{{description}}', descriptionText);
        console.log(elementTemplate);
        // const post = parser.parseFromString(elementTemplate, 'text/xml');
        // console.log(post);
        // this.appendChild(post);
        this.insertAdjacentHTML('afterend', elementTemplate);
      }
    // } catch (e) {
    //   // do nothing
    // }
  }

  public render(): TemplateResult {
    return html`
      <s-slot></s-slot>
    `;
  }
}

// @ts-expect-error
customElements.define('rtg-ig-feed', RtgIgFeed);
