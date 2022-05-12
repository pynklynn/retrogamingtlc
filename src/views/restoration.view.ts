import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { TemplateResult } from 'lit';

@customElement('rtg-restoration-view')
export class RtgRestorationView extends LitElement {
  public createRenderRoot() {
    return this;
  }

  public render(): TemplateResult {
    return html`
      <h2>Restoration Pricing</h2>
      <p>
        Below are the prices that we charge for console restoration.
        Each line item is listed <strong>per item</strong> (ex: 3 N64 controllers cleaned would be 3 x $10 = $30).
      </p>
      <p>
        If there is a console you would like to have restored that is not listed below, please reach out via Instagram
        <a href="https://www.instagram.com/retrogamingtlc/" target="_blank" rel="noopener">@retrogamingtlc</a>.
      </p>
      <p>
        Please note that for safety reasons, <strong>we cannot</strong> and <strong>will not</strong> work on items from a smoking home.
        Items found to smell of cigarette smoke will be immediately returned with no work completed.
      </p>

      ${this.pricing.map((console, index) => this.renderConsoleList(console, index))}
    `;
  }

  // TODO create typing
  protected renderConsoleList(console: any, consoleIndex: number): TemplateResult {
    return html`
      <h3>${console.system}</h3>
      <dl role="list" class="rtg-restoration-list">
        ${console.items.map((item: any, index: number) => this.renderItem(item, consoleIndex, index))}
      </dl>
    `;
  }

  // TODO create typing
  protected renderItem(item: any, consoleIndex: number, itemIndex: number): TemplateResult {
    return html`
      <dt role="listitem" aria-describedby="rtg-restoration-item-${consoleIndex}-${itemIndex}">
        ${item.name} - <em>$${item.price}</em>
      </dt>
      <dd id="rtg-restoration-item-${consoleIndex}-${itemIndex}">${item.supplemental}</dd>
    `;
  }

  protected pricing = [
    {
      system: 'Nintendo 64 (N64)',
      items: [
        { name: 'Console cleaning', price: '20', supplemental: 'Includes power and A/V cable if provided' },
        { name: 'Controller cleaning', price: '10', supplemental: 'Includes greasing thumb stick gears and connected cord' },
        { name: 'Controller gear replacement', price: '5', supplemental: 'Fixes loose thumbstick issues' },
        { name: 'Controller GameCube style thumb stick replacement', price: '12', supplemental: 'Shorter thumb stick with a wider head designed like the GameCube thumbstick' },
        { name: 'Controller cord replacement', price: '7.50', supplemental: 'Rrepairs controllers who have cords with a broken/cut wire' },
        { name: 'Power adapter', price: '10', supplemental: 'Replacement' },
        { name: 'A/V cable - RCA', price: '10', supplemental: 'Replacement - cable with red, white, and yellow connectors' },
        { name: 'Region-free mod', price: '10', supplmental: 'Allows playing of North American and Japanese games - reversible process and original part will be returned' }
      ]
    },
    {
      system: 'Sega Dreamcast',
      items: [
        { name: 'Console cleaning', price: '20', supplemental: 'Includes power and A/V cable if provided' },
        { name: 'Console retrobrightening', price: '15', supplemental: 'Removes yellowing from age and exposure to sun - only available for original white/gray color' },
        { name: 'Controller cleaning', price: '10', supplemental: 'Includes connected cord' },
        { name: 'Controller retrobrightening', price: '7.50', supplemental: 'Removes yellowing from age and exposure to sun - only available for original white/gray color' },
        { name: 'Controller cord replacement', price: '7.50', supplemental: 'Repairs controllers who have cords with a broken/cut wire' },
        { name: 'Power cord', price: '10', supplemental: 'Replacement' },
        { name: 'A/V cable - RCA', price: '10', supplemental: 'Replacement - cable with red, white, and yellow connectors' }
      ]
    },
    {
      system: 'Nintendo Game Boy DMG (original)',
      items: [
        { name: 'Console cleaning', price: '15', supplemental: '' },
        { name: 'Console retrobrightening', price: '15', supplemental: 'Removes yellowing from age and exposure to sun - only available for original white/gray color' },
        { name: 'Shell replacement', price: '10', supplemental: 'Shell provided by customer' },
        { name: 'Customized button swap', price: '5', supplemental: 'Buttons provided by customer - requires console cleaning at normal rate' }
      ]
    },
    {
      system: 'Nintendo Game Boy Color',
      items: [
        { name: 'Console cleaning', price: '15', supplemental: '' },
        { name: 'Shell replacement', price: '10', supplemental: 'Shell provided by customer' },
        { name: 'Customized button swap', price: '5', supplemental: 'Buttons provided by customer - requires console cleaning at normal rate' }
      ]
    }
    ,
    {
      system: 'Nintendo Game Boy Advance (original/wide)',
      items: [
        { name: 'Console cleaning', price: '15', supplemental: '' },
        { name: 'Shell replacement', price: '10', supplemental: 'Shell provided by customer' },
        { name: 'Customized button swap', price: '5', supplemental: 'Buttons provided by customer - requires console cleaning at normal rate' }
      ]
    },
    {
      system: 'Nintendo Game Boy Advance SP',
      items: [
        { name: 'Console cleaning', price: '15', supplemental: '' },
        { name: 'Shell replacement', price: '15', supplemental: 'Shell provided by customer' }
      ]
    },
    {
      system: 'Nintendo Entertainment System (NES)',
      items: [
        { name: 'Console cleaning', price: '20', supplemental: 'Includes power and A/V cable if provided' },
        { name: 'Controller cleaning', price: '10', supplemental: 'Includes greasing thumb stick gears' },
        { name: 'Customized button swap', price: '5', supplemental: 'Buttons provided by customer - requires controller cleaning at normal rate' }
      ]
    },
    {
      system: 'Super Nintendo Entertainment System (SNES)/Super Famicom',
      items: [
        { name: 'Console cleaning', price: '20', supplemental: 'Includes power and A/V cable if provided' },
        { name: 'Controller cleaning', price: '10', supplemental: 'Includes greasing thumb stick gears' },
        { name: 'Customized button swap', price: '5', supplemental: 'Buttons provided by customer - requires controller cleaning at normal rate' }
      ]
    },
    {
      system: 'Sega Game Gear',
      items: [
        { name: 'Console cleaning', price: '15', supplemental: '' },
        { name: 'Shell replacement', price: '10', supplemental: 'Shell provided by customer' },
        { name: 'Customized button swap', price: '5', supplemental: 'Buttons provided by customer - requires console cleaning at normal rate' }
      ]
    }
  ];
}
