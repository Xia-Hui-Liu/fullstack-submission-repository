const array = [
    {
    name: {
    common: "Mauritania",
    official: "Islamic Republic of Mauritania",
    nativeName: {
    ara: {
    official: "الجمهورية الإسلامية الموريتانية",
    common: "موريتانيا"
    }
    }
    },
    tld: [
    ".mr"
    ],
    cca2: "MR",
    ccn3: "478",
    cca3: "MRT",
    cioc: "MTN",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
    MRU: {
    name: "Mauritanian ouguiya",
    symbol: "UM"
    }
    },
    idd: {
    root: "+2",
    suffixes: [
    "22"
    ]
    },
    capital: [
    "Nouakchott"
    ],
    altSpellings: [
    "MR",
    "Islamic Republic of Mauritania",
    "al-Jumhūriyyah al-ʾIslāmiyyah al-Mūrītāniyyah"
    ],
    region: "Africa",
    subregion: "Western Africa",
    languages: {
    ara: "Arabic"
    },
    latlng: [
    20,
    -12
    ],
    landlocked: false,
    borders: [
    "DZA",
    "MLI",
    "SEN",
    "ESH"
    ],
    area: 1030700,
    flag: "🇲🇷",
    maps: {
    googleMaps: "https://goo.gl/maps/im2MmQ5jFjzxWBks5",
    openStreetMaps: "https://www.openstreetmap.org/relation/192763"
    },
    population: 4649660,
    gini: {
    2014: 32.6
    },
    fifa: "MTN",
    car: {
    signs: [
    "RIM"
    ],
    side: "right"
    },
    timezones: [
    "UTC"
    ],
    continents: [
    "Africa"
    ],
    flags: {
    png: "https://flagcdn.com/w320/mr.png",
    svg: "https://flagcdn.com/mr.svg"
    },
    coatOfArms: {
    png: "https://mainfacts.com/media/images/coats_of_arms/mr.png",
    svg: "https://mainfacts.com/media/images/coats_of_arms/mr.svg"
    },
    startOfWeek: "monday",
    capitalInfo: {
    latlng: [
    18.07,
    -15.97
    ]
    }
    },
    {
    name: {
    common: "Aruba",
    official: "Aruba",
    nativeName: {
    nld: {
    official: "Aruba",
    common: "Aruba"
    },
    pap: {
    official: "Aruba",
    common: "Aruba"
    }
    }
    },
    tld: [
    ".aw"
    ],
    cca2: "AW",
    ccn3: "533",
    cca3: "ABW",
    cioc: "ARU",
    independent: false,
    status: "officially-assigned",
    unMember: false,
    currencies: {
    AWG: {
    name: "Aruban florin",
    symbol: "ƒ"
    }
    },
    idd: {
    root: "+2",
    suffixes: [
    "97"
    ]
    },
    capital: [
    "Oranjestad"
    ],
    altSpellings: [
    "AW"
    ],
    region: "Americas",
    subregion: "Caribbean",
    languages: {
    nld: "Dutch",
    pap: "Papiamento"
    },
    latlng: [
    12.5,
    -69.96666666
    ],
    landlocked: false,
    area: 180,
    flag: "🇦🇼",
    maps: {
    googleMaps: "https://goo.gl/maps/8hopbQqifHAgyZyg8",
    openStreetMaps: "https://www.openstreetmap.org/relation/1231749"
    },
    population: 106766,
    fifa: "ARU",
    car: {
    side: "right"
    },
    timezones: [
    "UTC-04:00"
    ],
    continents: [
    "North America"
    ],
    flags: {
    png: "https://flagcdn.com/w320/aw.png",
    svg: "https://flagcdn.com/aw.svg"
    },
    coatOfArms: {
    png: "https://mainfacts.com/media/images/coats_of_arms/aw.png",
    svg: "https://mainfacts.com/media/images/coats_of_arms/aw.svg"
    },
    startOfWeek: "monday",
    capitalInfo: {
    latlng: [
    12.52,
    -70.03
    ]
}
    }
]





const f = array.filter(country =>
    country.name.common.toLowerCase().includes('AR'.toLowerCase()) 
    );
const x = f[0].latlng[0]

  console.log(x)