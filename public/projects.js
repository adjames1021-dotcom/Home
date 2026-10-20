// Everything listed on the homepage. To add something, copy one of the
// entries below, change it, and save. The page sorts nothing: the order
// here is the order on the page.
//
//   name    what it's called
//   url     the full link
//   about   one or two plain sentences
//   kind    "game" or "site" (sites show up under "Other things")
//   tags    a few short words, all lowercase
//   image   optional screenshot in img/, ideally 16:10 (960 x 600)
//   color   background for the preview when there's no screenshot
//   note    optional tiny label next to the name, like "new" or "beta"

const PROJECTS = [
  {
    name: 'Hillside Hangout',
    url: 'https://hillside-hangout.lilbeans.workers.dev',
    about: 'A village on a sea cliff where you and your friends hang out as little animals. Fish off the dock, sail around the bay, toast marshmallows, or just sit on a bench.',
    kind: 'game',
    tags: ['multiplayer', '3d', 'cozy'],
    image: 'img/hillside-hangout.jpg',
    color: '#5f7a43',
  },
  {
    name: 'Hillside Bakery',
    url: 'https://hillside-bakery.lilbeans.workers.dev',
    about: 'Run a toon bakery as a little fox. Take orders, work through recipe cards and spend the day\'s coins at the morning market. Bring a friend for two-chef co-op.',
    kind: 'game',
    tags: ['co-op', '3d', 'cozy'],
    color: '#a35f2c',
  },
  {
    name: 'Heart of the Sea',
    url: 'https://heartofthesea.lilbeans.workers.dev',
    about: 'You\'re a small bear with a sloop, a shovel and a stack of scribbled maps. Sail between the islands and dig up whatever\'s buried there.',
    kind: 'game',
    tags: ['single player', '3d', 'sailing'],
    color: '#2e5a6e',
  },
  {
    name: 'Case Sim',
    url: 'https://case-sim.pages.dev',
    about: 'Open cases, build up an inventory, trade with other players and go head to head in case battles. Make an account to get on the leaderboard.',
    kind: 'game',
    tags: ['online', 'trading'],
    color: '#7d6220',
  },
  {
    name: 'notcs',
    url: 'https://notcs.lilbeans.workers.dev',
    about: 'A free, fan-made Counter-Strike that runs in the browser, on a recreation of Dust II. Not affiliated with Valve.',
    kind: 'game',
    tags: ['multiplayer', 'fps'],
    image: 'img/notcs.jpg',
    color: '#8c6a3f',
  },
  {
    name: 'Bankhaus Vogt & Cie',
    url: 'https://swissbanking.lilbeans.workers.dev',
    about: 'A management game about the end of Swiss banking secrecy, played on the intranet of a small Zürich private bank inside an Internet Explorer 6 window.',
    kind: 'game',
    tags: ['single player', 'management'],
    image: 'img/vogt-cie.jpg',
    color: '#34445a',
  },
];
