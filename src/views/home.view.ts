import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { TemplateResult } from 'lit';

@customElement('rtg-home-view')
export class RtgHomeView extends LitElement {
  public createRenderRoot() {
    return this;
  }

  public render(): TemplateResult {
    return html`
      <h2>About Us</h2>
      <p>
        Founded in 2020, Retro Gaming TLC focuses on restoring, repairing, and updating retro video game home and handheld consoles.
        Some systems regularly for sale in our shop include:
      </p>
      <ul>
        <li>Nintendo Game Boy</li>
        <li>Nintendo Game Boy Color</li>
        <li>Nintendo Game Boy Advance</li>
        <li>Nintendo Entertainment System (NES)</li>
        <li>Nintendo 64</li>
        <li>Sega Genesis</li>
        <li>Sega Dreamcast</li>
      </ul>
      <p>
        In addition to the list above, there are regularly other systems for sale including systems from other generations and vendors.
        We regularly also list accessories such as controllers and memory packs including rare or imported controllers.
        In cases where possible - such as with the Nintendo 64 - we will try to make the system region-free before listing it for sale.
        We're also hoping to start offering some imported systems in 2022 including the Nintendo Famicom, Nintendo Famicom Disk System, and Nintendo Super Famicom.
      </p>
      <p>
        Please use the links in the main navigation to visit our social media pages and shop listings
      </p>
      <h2>Right to Repair</h2>
      <p>
        We are <strong><em>big</em></strong> supporters of Right to Repair legislation being introduced in many states within the United States.
        The idea behind Right to Repair legislation is to allow anyone to repair their small electronic devices on their own and requiring manufacturers to make specifications, schematics, and replacement parts available.
      </p>
      <p>
        Imagine that no maintenance was able to be performed on your car - even routine maintenance such as changing wiper blades - by anyone other than the car manufacturer.
        Not only is that an unnecessary hurdle, but history has shown that prices will be raised simply because they can be.
        Unfortunately, that is currently what is required for most small electronics including smart phones, video game consoles, tablets, and kitchen gadgets/appliances - and that is only if the manufacturer offers a repair service and doesn't require purchase of a new one.
        This also doesn't include the environmental impact of creating massive amounts of eWaste as people discard devices simply because they can't be repaired.
      </p>
      <p>
        If you would like to learn more, please visit
        <a href="https://www.repair.org/stand-up" target="_blank" rel="noopener">repair.org</a>.
      </p>
    `;
  }
}
