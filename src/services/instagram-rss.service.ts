import { parse } from 'rss-to-json';

async function fetchInstagramFeed() {
  return await parse('https://rss.app/feeds/RK2cK11CyHaLxPjm.xml', {});
}

export {
  fetchInstagramFeed
};
