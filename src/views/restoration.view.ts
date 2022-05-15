import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { TemplateResult } from 'lit';

interface ConsoleItemPrice {
  name: string;
  price: string;
  supplemental: string;
}

interface ConsolePrices {
  system: string;
  items: ConsoleItemPrice[];
}

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
      <p>
        Cartridge service notes:
      </p>
      <ul>
        <li>
          battery replacement will only be completed on original, genuine cartridges as attempting to replace them on reproductions can cause damage to the game
        </li>
        <li>
          unless directed not to, we will make a best effort to remove non-original (manufaturer) stickers and permanent marker (may not come off in some cases) during cleaning
        </li>
      </ul>

      ${this.pricing.map((console, index) => this.renderConsoleList(console, index))}
    `;
  }

  protected renderConsoleList(console: ConsolePrices, consoleIndex: number): TemplateResult {
    return html`
      <h3>${console.system}</h3>
      <dl role="list" class="rtg-restoration-list">
        ${console.items.map((item: any, index: number) => this.renderItem(item, consoleIndex, index))}
      </dl>
    `;
  }

  protected renderItem(item: ConsoleItemPrice, consoleIndex: number, itemIndex: number): TemplateResult {
    return html`
      <dt role="listitem" aria-describedby="rtg-restoration-item-${consoleIndex}-${itemIndex}">
        ${item.name} - <em>$${item.price}</em>
      </dt>
      <dd id="rtg-restoration-item-${consoleIndex}-${itemIndex}">${item.supplemental}</dd>
    `;
  }

  protected pricing: ConsolePrices[] = [
    {
      system: 'Nintendo 64 (N64)',
      items: [
        { name: 'Console cleaning', price: '20', supplemental: 'Includes power and A/V cable if provided' },
        { name: 'Controller cleaning', price: '10', supplemental: 'Includes greasing thumb stick gears and connected cord' },
        { name: 'Controller gear replacement', price: '5', supplemental: 'Fixes loose thumbstick issues' },
        { name: 'Controller GameCube-style thumb stick replacement', price: '12', supplemental: 'Shorter thumb stick with a wider head designed like the GameCube thumb stick' },
        { name: 'Controller cord replacement', price: '7.50', supplemental: 'Repairs controllers who have cords with a broken/cut wire' },
        { name: 'Power adapter', price: '10', supplemental: 'Replacement' },
        { name: 'A/V cable - RCA', price: '10', supplemental: 'Replacement - cable with red, white, and yellow connectors' },
        { name: 'Region-free mod', price: '10', supplemental: 'Allows playing of North American and Japanese games - reversible process and original part will be returned' },
        { name: 'Cartridge cleaning', price: '3', supplemental: 'Full cleaning of cartridge both inside out including removing price/old owner/business stickers and marker (when possible and unless otherwise directed)' },
        { name: 'Cartridge battery replacement', price: '3', supplemental: 'Very few games from the N64 use a battery to save but some do - existing game saves will be lost if replaced and existing battery still works' }
      ]
    },
    {
      system: 'Sega Dreamcast',
      items: [
        { name: 'Console cleaning', price: '20', supplemental: 'Includes power and A/V cable if provided' },
        { name: 'Console clock battery and controller board resistor replacement', price: '7', supplemental: 'Most Dreamcast consoles have one or both of these parts dead - clock battery is replaced with a coin batter holder for easy replacement in the future (including new battery) and the resistor is replaces with a resettable resistor fuse' },
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
        { name: 'Customized button swap', price: '5', supplemental: 'Buttons provided by customer - requires console cleaning at normal rate' },
        { name: 'Cartridge cleaning', price: '2', supplemental: 'Full cleaning of cartridge both inside out including removing price/old owner/business stickers and marker (when possible and unless otherwise directed)' },
        { name: 'Cartridge battery replacement', price: '3', supplemental: 'Existing game saves will attempt to be backed up and restored if existing battery still works but there is no guarantee that it will be maintained' }
      ]
    },
    {
      system: 'Nintendo Game Boy Color',
      items: [
        { name: 'Console cleaning', price: '15', supplemental: '' },
        { name: 'Shell replacement', price: '10', supplemental: 'Shell provided by customer' },
        { name: 'Customized button swap', price: '5', supplemental: 'Buttons provided by customer - requires console cleaning at normal rate' },
        { name: 'Cartridge cleaning', price: '2', supplemental: 'Full cleaning of cartridge both inside out including removing price/old owner/business stickers and marker (when possible and unless otherwise directed)' },
        { name: 'Cartridge battery replacement', price: '3', supplemental: 'Existing game saves will attempt to be backed up and restored if existing battery still works but there is no guarantee that it will be maintained' }
      ]
    }
    ,
    {
      system: 'Nintendo Game Boy Advance (original/wide)',
      items: [
        { name: 'Console cleaning', price: '15', supplemental: '' },
        { name: 'Shell replacement', price: '10', supplemental: 'Shell provided by customer' },
        { name: 'Customized button swap', price: '5', supplemental: 'Buttons provided by customer - requires console cleaning at normal rate' },
        { name: 'Cartridge cleaning', price: '2', supplemental: 'Full cleaning of cartridge both inside out including removing price/old owner/business stickers and marker (when possible and unless otherwise directed)' },
        { name: 'Cartridge battery replacement', price: '3', supplemental: 'Existing game saves will attempt to be backed up and restored if existing battery still works but there is no guarantee that it will be maintained' }
      ]
    },
    {
      system: 'Nintendo Game Boy Advance SP',
      items: [
        { name: 'Console cleaning', price: '15', supplemental: '' },
        { name: 'Shell replacement', price: '15', supplemental: 'Shell provided by customer' },
        { name: 'Cartridge cleaning', price: '2', supplemental: 'Full cleaning of cartridge both inside out including removing price/old owner/business stickers and marker (when possible and unless otherwise directed)' },
        { name: 'Cartridge battery replacement', price: '3', supplemental: 'Existing game saves will attempt to be backed up and restored if existing battery still works but there is no guarantee that it will be maintained' }
      ]
    },
    {
      system: 'Nintendo Entertainment System (NES)',
      items: [
        { name: 'Console cleaning', price: '20', supplemental: 'Includes power and A/V cable if provided' },
        { name: 'Controller cleaning', price: '10', supplemental: 'Includes connected cord' },
        { name: 'Customized button swap', price: '5', supplemental: 'Buttons provided by customer - requires controller cleaning at normal rate' },
        { name: 'Cartridge cleaning', price: '3', supplemental: 'Full cleaning of cartridge both inside out including removing price/old owner/business stickers and marker (when possible and unless otherwise directed)' },
        { name: 'Cartridge battery replacement', price: '3', supplemental: 'Very few games from the NES use a battery to save but some do - existing game saves will be lost if replaced and existing battery still works' }
      ]
    },
    {
      system: 'Super Nintendo Entertainment System (SNES)/Super Famicom',
      items: [
        { name: 'Console cleaning', price: '20', supplemental: 'Includes power and A/V cable if provided' },
        { name: 'Controller cleaning', price: '10', supplemental: 'Includes connected cord' },
        { name: 'Customized button swap', price: '5', supplemental: 'Buttons provided by customer - requires controller cleaning at normal rate' },
        { name: 'Cartridge cleaning', price: '3', supplemental: 'Full cleaning of cartridge both inside out including removing price/old owner/business stickers and marker (when possible and unless otherwise directed)' },
        { name: 'Cartridge battery replacement', price: '3', supplemental: 'Existing game saves will be lost if replaced and existing battery still works' }
      ]
    },
    {
      system: 'Sega Genesis',
      items: [
        { name: 'Console cleaning (models 1 & 2 base system only)', price: '20', supplemental: 'Includes power and A/V cable if provided' },
        { name: 'Controller cleaning (both 3 and 6 button versions)', price: '10', supplemental: 'Includes connected cord' },
        { name: 'Customized button swap', price: '5', supplemental: 'Buttons provided by customer - requires controller cleaning at normal rate' },
        { name: 'Cartridge cleaning', price: '3', supplemental: 'Full cleaning of cartridge both inside out including removing price/old owner/business stickers and marker (when possible and unless otherwise directed)' },
        { name: 'Cartridge battery replacement', price: '3', supplemental: 'Existing game saves will be lost if replaced and existing battery still works' }
      ]
    },
    {
      system: 'Sega Game Gear',
      items: [
        { name: 'Console cleaning', price: '15', supplemental: '' },
        { name: 'Shell replacement', price: '10', supplemental: 'Shell provided by customer' },
        { name: 'Customized button swap', price: '5', supplemental: 'Buttons provided by customer - requires console cleaning at normal rate' },
        { name: 'Cartridge cleaning', price: '2', supplemental: 'Full cleaning of cartridge both inside out including removing price/old owner/business stickers and marker (when possible and unless otherwise directed)' },
        { name: 'Cartridge battery replacement', price: '3', supplemental: 'Very few games from the Game Gear use a battery to save but some do - existing game saves will be lost if replaced and existing battery still works' }
      ]
    },
    {
      system: 'Others',
      items: [
        { name: 'Xbox One/Series X|S controller cleaning', price: '12', supplemental: 'Full cleaning of the controllers' },
        { name: 'PlayStation 4 controller cleaning', price: '12', supplemental: 'Full cleaning of the controllers (we do not yet offer PS5 controller services)' },
        { name: 'Xbox One/Series X|S thumb stick replacement (price per thumb stick)', price: '6', supplemental: 'Replacement to fix stick drift - only available on OEM controllers and requires controller cleaning at normal rate' },
        { name: 'Switch joy-con thumb stick replacement (price per thumb stick)', price: '6', supplemental: 'Replacement to fix stick drift - only available on OEM controllers and requires controller cleaning at normal rate' },
        { name: 'Switch joy-con shell replacement (price per joy-cons)', price: '6', supplemental: 'Shell provided by customer' }
      ]
    }
  ];
}
