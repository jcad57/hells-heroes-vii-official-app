const bands = [
  { id: 1, name: "SAXON", location: "YORKSHIRE, ENGLAND", day: "THURSDAY", stage: "UPSTAIRS", filter: "local" },
  { id: 2, name: "ABBATH", location: "BERGEN, NORWAY", day: "SATURDAY", stage: "DOWNSTAIRS" },
  { id: 3, name: "CRIMSON GLORY", location: "SARASOTA, FLORIDA", day: "SATURDAY", stage: "LAWN" },
  {
    id: 4,
    name: "WARLORD",
    location: "LOS ANGELES, CALIFORNIA",
    day: "SATURDAY",
    stage: "DOWNSTAIRS",
    filter: "local",
  },
  { id: 5, name: "DRI", location: "HOUSTON, TEXAS", day: "SATURDAY", stage: "LAWN" },
  {
    id: 6,
    name: "HIRAX",
    location: "LOS ANGELES, CALIFORNIA",
    day: "FRIDAY",
    stage: "UPSTAIRS",
  },
  { id: 7, name: "ENFORCER", location: "ARVIKA, SWEDEN", day: "FRIDAY", stage: "DOWNSTAIRS" },
  { id: 8, name: "FIFTH ANGEL", location: "BELLEVUE, WASHINGTON", day: "SATURDAY", stage: "UPSTAIRS" },
  {
    id: 9,
    name: "GOATWHORE",
    location: "NEW ORLEANS, LOUISIANA",
    day: "FRIDAY",
    stage: "LAWN",
  },
  { id: 10, name: "SAVAGE MASTER", location: "LOUISVILLE, KENTUCKY", day: "SATURDAY", stage: "DOWNSTAIRS" },
  { id: 11, name: "CRYPT SERMON", location: "PHILADELPHIA, PENNSYLVANIA", day: "FRIDAY", stage: "UPSTAIRS" },
  { id: 12, name: "ZEMIAL", location: "ATHENS, GREECE", day: "FRIDAY", stage: "LAWN", filter: "local" },
  { id: 13, name: "RAVEN", location: "NEWCASTLE UPON TYNE, ENGLAND", day: "THURSDAY", stage: "DOWNSTAIRS" },
  { id: 14, name: "BEWITCHER", location: "PORTLAND, OREGON", day: "THURSDAY", stage: "UPSTAIRS", filter: "local" },
  { id: 15, name: "ATTACKER", location: "NEW JERSEY", day: "THURSDAY", stage: "LAWN" },
  { id: 16, name: "CASTLE RAT", location: "AUSTIN, TEXAS", day: "FRIDAY", stage: "UPSTAIRS" },
  { id: 17, name: "CHAMBER MAGE", location: "CHICAGO, ILLINOIS", day: "FRIDAY", stage: "DOWNSTAIRS" },
  { id: 18, name: "CAVALERA", location: "PHOENIX, ARIZONA", day: "FRIDAY", stage: "UPSTAIRS" },
  {
    id: 19,
    name: "S.A. SLAYER",
    location: "SAN ANTONIO, TEXAS",
    day: "THURSDAY",
    stage: "LAWN",
  },
  { id: 20, name: "ABSU", location: "DALLAS, TEXAS", day: "THURSDAY", stage: "DOWNSTAIRS" },
  { id: 21, name: "GAMMACIDE", location: "DALLAS, TEXAS", day: "THURSDAY", stage: "UPSTAIRS", filter: "local" },
  { id: 22, name: "ONSLAUGHT", location: "BRISTOL, ENGLAND", day: "SATURDAY", stage: "DOWNSTAIRS" },
  { id: 23, name: "NASTY SAVAGE", location: "CLEARWATER, FLORIDA", day: "SATURDAY", stage: "UPSTAIRS" },
  { id: 24, name: "SOLICITOR", location: "SAN DIEGO, CALIFORNIA", day: "THURSDAY", stage: "LAWN", filter: "local" },
  { id: 25, name: "DEPARTURE CHANDELIER", location: "SAN FRANCISCO, CALIFORNIA", day: "THURSDAY", stage: "DOWNSTAIRS" },
  { id: 26, name: "SADISTIC INTENT", location: "LOS ANGELES, CALIFORNIA", day: "SATURDAY", stage: "UPSTAIRS" },
  { id: 27, name: "HIGH SPIRITS", location: "CHICAGO, ILLINOIS", day: "THURSDAY", stage: "LAWN" },
  { id: 28, name: "SABIRE", location: "CHICAGO, ILLINOIS", day: "FRIDAY", stage: "DOWNSTAIRS" },
  {
    id: 29,
    name: "HAUNT",
    location: "FRESNO, CALIFORNIA",
    day: "SATURDAY",
    stage: "UPSTAIRS",
  },
  { id: 30, name: "HITTEN", location: "BARCELONA, SPAIN", day: "THURSDAY", stage: "LAWN", filter: "local" },
  { id: 31, name: "KNIGHT & GALLOW", location: "CHICAGO, ILLINOIS", day: "FRIDAY", stage: "UPSTAIRS" },
  { id: 32, name: "SAMAEL", location: "SION, SWITZERLAND", day: "THURSDAY", stage: "DOWNSTAIRS" },
  { id: 33, name: "SADUS", location: "ANTIOCH, CALIFORNIA", day: "SATURDAY", stage: "LAWN" },
  { id: 34, name: "CORONER", location: "ZURICH, SWITZERLAND", day: "SATURDAY", stage: "UPSTAIRS" },
  { id: 35, name: "EXCITER", location: "OTTAWA, ONTARIO, CANADA", day: "FRIDAY", stage: "DOWNSTAIRS", filter: "local" },
  { id: 36, name: "PRIMORDIAL", location: "NAVAN, IRELAND", day: "THURSDAY", stage: "UPSTAIRS" },
  { id: 37, name: "HELLRIPPER", location: "ABERDEEN, SCOTLAND", day: "SATURDAY", stage: "LAWN" },
  { id: 38, name: "NIGHT COBRA", location: "CHICAGO, ILLINOIS", day: "FRIDAY", stage: "DOWNSTAIRS" },
  {
    id: 39,
    name: "BLOOD CEREMONY",
    location: "TORONTO, ONTARIO, CANADA",
    day: "FRIDAY",
    stage: "UPSTAIRS",
  },
  { id: 40, name: "JOHN CHRIST", location: "PHILADELPHIA, PENNSYLVANIA", day: "FRIDAY", stage: "LAWN" },
  {
    id: 41,
    name: "THE NIGHT ETERNAL",
    location: "CHICAGO, ILLINOIS",
    day: "THURSDAY",
    stage: "UPSTAIRS",
  },
  { id: 42, name: "HOUR OF 13", location: "NORTH CAROLINA", day: "SATURDAY", stage: "DOWNSTAIRS" },
  { id: 43, name: "OVERDOSE", location: "SÃO PAULO, BRAZIL", day: "THURSDAY", stage: "LAWN" },
  { id: 44, name: "WHITE MAGICIAN", location: "CHICAGO, ILLINOIS", day: "THURSDAY", stage: "UPSTAIRS" },
  { id: 45, name: "WORM", location: "unknown", day: "THURSDAY", stage: "DOWNSTAIRS", filter: "after-parties" },
  {
    id: 46,
    name: "LEATHER CHURCH",
    location: "unknown",
    day: "THURSDAY",
    stage: "DOWNSTAIRS",
    filter: "after-parties",
  },
  { id: 47, name: "QUEST MASTER", location: "unknown", day: "THURSDAY", stage: "UPSTAIRS", filter: "after-parties" },
  {
    id: 48,
    name: "FIEF",
    location: "UNKNOWN",
    day: "THURSDAY",
    stage: "UPSTAIRS",
    filter: "after-parties",
  },
  { id: 49, name: "HULDER", location: "unknown", day: "FRIDAY", stage: "DOWNSTAIRS", filter: "after-parties" },
  {
    id: 50,
    name: "BEASTMAKER",
    location: "UNKNOWN",
    day: "FRIDAY",
    stage: "UPSTAIRS",
    filter: "after-parties",
  },
  {
    id: 51,
    name: "VOID",
    location: "UNKNOWN",
    day: "FRIDAY",
    stage: "UPSTAIRS",
    filter: "after-parties",
  },
  {
    id: 52,
    name: "LATHE OF HEAVEN",
    location: "UNKNOWN",
    day: "FRIDAY",
    stage: "DOWNSTAIRS",
    filter: "after-parties",
  },
  {
    id: 53,
    name: "DECEASED...",
    location: "UNKNOWN",
    day: "FRIDAY",
    stage: "UPSTAIRS",
    filter: "after-parties",
  },
  {
    id: 54,
    name: "SAIDAN",
    location: "UNKNOWN",
    day: "FRIDAY",
    stage: "UPSTAIRS",
    filter: "after-parties",
  },
];

export default bands;