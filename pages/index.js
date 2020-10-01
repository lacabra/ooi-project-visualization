import Head from 'next/head';
import dynamic from 'next/dynamic';

import React, { useState, useEffect } from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Badge from 'react-bootstrap/Badge';

import GigaCountries from '../components/gigaCountries';


import GSheetReader from 'g-sheets-api';

const alpha3 = {
"Aruba": 'ABW', 
"Afghanistan": 'AFG', 
"Angola": 'AGO', 
"Anguilla": 'AIA', 
"Åland Islands": 'ALA', 
"Albania": 'ALB', 
"Andorra": 'AND', 
"Netherlands Antilles": 'ANT', 
"United Arab Emirates": 'ARE', 
"Argentina": 'ARG', 
"Armenia": 'ARM', 
"American Samoa": 'ASM', 
"Antarctica": 'ATA', 
"French Southern Territories": 'ATF', 
"Antigua and Barbuda": 'ATG', 
"Australia": 'AUS', 
"Austria": 'AUT', 
"Azerbaijan": 'AZE', 
"Burundi": 'BDI', 
"Belgium": 'BEL', 
"Benin": 'BEN', 
"Burkina Faso": 'BFA', 
"Bangladesh": 'BGD', 
"Bulgaria": 'BGR', 
"Bahrain": 'BHR', 
"Bahamas": 'BHS', 
"Bosnia and Herzegovina": 'BIH', 
"Saint Barthélemy": 'BLM', 
"Belarus": 'BLR', 
"Belize": 'BLZ', 
"Bermuda": 'BMU', 
"Bolivia": 'BOL', 
"Brazil": 'BRA', 
"Barbados": 'BRB', 
"Brunei Darussalam": 'BRN', 
"Bhutan": 'BTN', 
"Bouvet Island": 'BVT', 
"Botswana": 'BWA', 
"Central African Republic": 'CAF', 
"Canada": 'CAN', 
"Cocos (Keeling) Islands": 'CCK', 
"Switzerland": 'CHE', 
"Chile": 'CHL', 
"China": 'CHN', 
"Côte d'Ivoire": 'CIV', 
"Cameroon": 'CMR', 
"Congo, DRC": 'COD', 
"Congo": 'COG', 
"Cook Islands": 'COK', 
"Colombia": 'COL', 
"Comoros": 'COM', 
"Cape Verde": 'CPV', 
"Costa Rica": 'CRI', 
"Cuba": 'CUB', 
"Christmas Island": 'CXR', 
"Cayman Islands": 'CYM', 
"Cyprus": 'CYP', 
"Czech Republic": 'CZE', 
"Germany": 'DEU', 
"Djibouti": 'DJI', 
"Dominica": 'DMA', 
"Denmark": 'DNK', 
"Dominican Republic": 'DOM', 
"Algeria": 'DZA', 
"Ecuador": 'ECU', 
"Egypt": 'EGY', 
"Eritrea": 'ERI', 
"Western Sahara": 'ESH', 
"Spain": 'ESP', 
"Estonia": 'EST', 
"Ethiopia": 'ETH', 
"Finland": 'FIN', 
"Fiji": 'FJI', 
"Falkland Islands (Malvinas)": 'FLK', 
"France": 'FRA', 
"Faroe Islands": 'FRO', 
"Micronesia, Federated States of": 'FSM', 
"Gabon": 'GAB', 
"United Kingdom": 'GBR', 
"Georgia": 'GEO', 
"Guernsey": 'GGY', 
"Ghana": 'GHA', 
"Gibraltar": 'GIB', 
"Guinea": 'GIN', 
"Guadeloupe": 'GLP', 
"Gambia": 'GMB', 
"Guinea-Bissau": 'GNB', 
"Equatorial Guinea": 'GNQ', 
"Greece": 'GRC', 
"Grenada": 'GRD', 
"Greenland": 'GRL', 
"Guatemala": 'GTM', 
"French Guiana": 'GUF', 
"Guam": 'GUM', 
"Guyana": 'GUY', 
"Hong Kong": 'HKG', 
"Heard Island and McDonald Islands": 'HMD', 
"Honduras": 'HND', 
"Croatia": 'HRV', 
"Haiti": 'HTI', 
"Hungary": 'HUN', 
"Indonesia": 'IDN', 
"Isle of Man": 'IMN', 
"India": 'IND', 
"British Indian Ocean Territory": 'IOT', 
"Ireland": 'IRL', 
"Iran, Islamic Republic of": 'IRN', 
"Iraq": 'IRQ', 
"Iceland": 'ISL', 
"Israel": 'ISR', 
"Italy": 'ITA', 
"Jamaica": 'JAM', 
"Jersey": 'JEY', 
"Jordan": 'JOR', 
"Japan": 'JPN', 
"Kazakhstan": 'KAZ', 
"Kenya": 'KEN', 
"Kyrgyzstan": 'KGZ', 
"Cambodia": 'KHM', 
"Kiribati": 'KIR', 
"Saint Kitts and Nevis": 'KNA', 
"Korea, Republic of": 'KOR', 
"Kuwait": 'KWT', 
"Lao People's Democratic Republic": 'LAO', 
"Lebanon": 'LBN', 
"Liberia": 'LBR', 
"Libyan Arab Jamahiriya": 'LBY', 
"Saint Lucia": 'LCA', 
"Liechtenstein": 'LIE', 
"Sri Lanka": 'LKA', 
"Lesotho": 'LSO', 
"Lithuania": 'LTU', 
"Luxembourg": 'LUX', 
"Latvia": 'LVA', 
"Macao": 'MAC', 
"Saint Martin (French part)": 'MAF', 
"Morocco": 'MAR', 
"Monaco": 'MCO', 
"Moldova, Republic of": 'MDA', 
"Madagascar": 'MDG', 
"Maldives": 'MDV', 
"Mexico": 'MEX', 
"Marshall Islands": 'MHL', 
"Macedonia, the former Yugoslav Republic of": 'MKD', 
"Mali": 'MLI', 
"Malta": 'MLT', 
"Myanmar": 'MMR', 
"Montenegro": 'MNE', 
"Mongolia": 'MNG', 
"Northern Mariana Islands": 'MNP', 
"Mozambique": 'MOZ', 
"Mauritania": 'MRT', 
"Montserrat": 'MSR', 
"Martinique": 'MTQ', 
"Mauritius": 'MUS', 
"Malawi": 'MWI', 
"Malaysia": 'MYS', 
"Mayotte": 'MYT', 
"Namibia": 'NAM', 
"New Caledonia": 'NCL', 
"Niger": 'NER', 
"Norfolk Island": 'NFK', 
"Nigeria": 'NGA', 
"Nicaragua": 'NIC', 
"Niue": 'NIU', 
"Netherlands": 'NLD', 
"Norway": 'NOR', 
"Nepal": 'NPL', 
"Nauru": 'NRU', 
"New Zealand": 'NZL', 
"Oman": 'OMN', 
"Pakistan": 'PAK', 
"Panama": 'PAN', 
"Pitcairn": 'PCN', 
"Peru": 'PER', 
"Philippines": 'PHL', 
"Palau": 'PLW', 
"Papua New Guinea": 'PNG', 
"Poland": 'POL', 
"Puerto Rico": 'PRI', 
"Korea, Democratic People's Republic of": 'PRK', 
"Portugal": 'PRT', 
"Paraguay": 'PRY', 
"Palestine": 'PSE', 
"French Polynesia": 'PYF', 
"Qatar": 'QAT', 
"Réunion": 'REU', 
"Romania": 'ROU', 
"Russian Federation": 'RUS', 
"Rwanda": 'RWA', 
"Saudi Arabia": 'SAU', 
"Sudan": 'SDN', 
"Senegal": 'SEN', 
"Singapore": 'SGP', 
"South Georgia and the South Sandwich Islands": 'SGS', 
"Saint Helena, Ascension and Tristan da Cunha": 'SHN', 
"Svalbard and Jan Mayen": 'SJM', 
"Solomon Islands": 'SLB', 
"Sierra Leone": 'SLE', 
"El Salvador": 'SLV', 
"San Marino": 'SMR', 
"Somalia": 'SOM', 
"Saint Pierre and Miquelon": 'SPM', 
"Serbia": 'SRB', 
"Sao Tome and Principe": 'STP', 
"Suriname": 'SUR', 
"Slovakia": 'SVK', 
"Slovenia": 'SVN', 
"Sweden": 'SWE', 
"Swaziland": 'SWZ', 
"Seychelles": 'SYC', 
"Syria": 'SYR', 
"Turks and Caicos Islands": 'TCA', 
"Chad": 'TCD', 
"Togo": 'TGO', 
"Thailand": 'THA', 
"Tajikistan": 'TJK', 
"Tokelau": 'TKL', 
"Turkmenistan": 'TKM', 
"Timor-Leste": 'TLS', 
"Tonga": 'TON', 
"Trinidad and Tobago": 'TTO', 
"Tunisia": 'TUN', 
"Turkey": 'TUR', 
"Tuvalu": 'TUV', 
"Taiwan, Province of China": 'TWN', 
"Tanzania": 'TZA', 
"Uganda": 'UGA', 
"Ukraine": 'UKR', 
"United States Minor Outlying Islands": 'UMI', 
"Uruguay": 'URY', 
"United States": 'USA', 
"Uzbekistan": 'UZB', 
"Holy See (Vatican City State)": 'VAT', 
"Saint Vincent and the Grenadines": 'VCT', 
"Venezuela, Bolivarian Republic of": 'VEN', 
"Virgin Islands, British": 'VGB', 
"Virgin Islands, U.S.": 'VIR', 
"Vietnam": 'VNM', 
"Vanuatu": 'VUT', 
"Wallis and Futuna": 'WLF', 
"Samoa": 'WSM', 
"Yemen": 'YEM', 
"South Africa": 'ZAF', 
"Zambia": 'ZMB', 
"Zimbabwe": 'ZWE' }

export default function Home() {

  const [open, setOpen] = useState(true);
  const [countries, setCountries] = useState({});
  const [gigaCountries, setGigaCountries] = useState([]);
  const [procoCountries, setProcoCountries] = useState([]);
  const [pathfinder, setPathfinder] = useState([]);
  const [fundCountries, setFundCountries] = useState([]);

  const [gigaChecked, setGigaChecked] = useState(true);


  const options = {
    sheetId: process.env.NEXT_PUBLIC_SHEET,
    sheetNumber: 1,
    returnAllResults: true,
  }

  function addCountries(results, label) {
    let l = [];
    let c = countries;
    for(let i = 0; i < results.length; i++){
      if(! alpha3[results[i].country]) {
        console.log('Mismatched '+results[i].country)
      } else {
        if( ! Object.keys(c).find( e => e == alpha3[results[i].country])) {
          c[alpha3[results[i].country]] = {}
        }
        c[alpha3[results[i].country]][label] = results[i];

        l[alpha3[results[i].country]] = results[i];
      }
    }
    setCountries(c);
    switch(label) {
      case 'giga':
        setGigaCountries(l);
        break;
      case 'proco':
        setProcoCountries(l);
        break;
      case 'pathfinder':
        setPathfinder(l);
        break;
    }
  }

  function addFundCountries(results, label) {
    let c = countries;
    let f = []
    console.log(results)
    for(let i = 0; i < results.length; i++){
      if(! alpha3[results[i].country]) {
        console.log('Mismatched '+results[i].country)
      } else {
        if( ! Object.keys(c).find( e => e == alpha3[results[i].country])) {
          c[alpha3[results[i].country]] = {}
        }
        if( ! f[alpha3[results[i].country]]) {
          f[alpha3[results[i].country]] = { 
            country: results[i].country,
            investments: []
          }
        }

        if( ! c[alpha3[results[i].country]][label]) {
          c[alpha3[results[i].country]][label] = { 
            country: results[i].country,
            investments: []
          }
        }

        c[alpha3[results[i].country]][label].investments.push({
          investment: results[i].investment,
          co: results[i].co
        })

        f[alpha3[results[i].country]].investments.push({
          investment: results[i].investment,
          co: results[i].co
        })
        
      }
    }
    setFundCountries(f);
    setCountries(c); 
  }

  useEffect(() => {
    
    GSheetReader(options, results => {
      addCountries(results, 'giga');
    });

    let options2 = options;
    options2.sheetNumber = 2;
    GSheetReader(options2, results => {
      addCountries(results, 'proco');
    });

    options2.sheetNumber = 3;
    GSheetReader(options2, results => {
      addCountries(results, 'pathfinder');
    });

    options2.sheetNumber = 4;
    GSheetReader(options2, results => {
      addFundCountries(results, 'fund');
    });

  }, []);

  const MapComponent = dynamic(import('../components/mapComponent'),{
    ssr: false
  })

  function handleChange(event){
    switch(event.target.id){
      case 'giga':
        setGigaChecked(!gigaChecked);
        setGigaCountries([])
    }
    
  }

  return (
    <div className="main">
      <SideNav
          onSelect={(selected) => {
              // Add your code here
          }}
          style={{ bottom: "auto", minHeight: "100%", background: "white"}}
          expanded={true}
      >
          <SideNav.Toggle style={{ color: "black"}}/>
          <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="giga">
                  <NavIcon>
                      <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText style={{ color: "black"}}>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' style={{border: "1px solid black", background: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgogIDxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIxIiBmaWxsPSJyZWQiPjwvY2lyY2xlPgo8L3N2Zz4=")'}}>
                      </svg>
                      &nbsp; GIGA Countries
                  </NavText>
                  {Object.values(gigaCountries).map( (country, index) => {
                    return (
                      <NavItem key={"g-"+country.country}>
                        <NavText style={{ color: "black"}}>
                          {country.country}
                        </NavText>
                      </NavItem>
                      )
                    })
                  }
              </NavItem>
              <NavItem eventKey="proco">
                  <NavIcon>
                      <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText style={{ color: "black"}}>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' style={{border: "1px solid black", backgroundColor: "yellow", opacity: 0.2}} >
                      </svg>
                      &nbsp; ProCo Countries
                  </NavText>
                  {Object.values(procoCountries).map( (country, index) => {
                    return (
                      <NavItem key={"pc-"+country.country}>
                        <NavText style={{ color: "black"}}>
                          {country.country}
                        </NavText>
                      </NavItem>
                      )
                    })
                  }
              </NavItem>
              <NavItem eventKey="pathfinder">
                  <NavIcon>
                      <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText style={{ color: "black"}}>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' style={{border: "1px solid black", background: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cGF0aCBkPSJNLTIgMTBMMTAgLTJaTTEwIDZMNiAxMFpNLTIgMkwyIC0yIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=")'}}>
                      </svg>
                      &nbsp; DPG Pathfinders
                  </NavText>
                  {Object.values(pathfinder).map( (country, index) => {
                    return (
                      <NavItem key={"p-"+country.country}>
                        <NavText style={{ color: "black"}}>
                          {country.country}
                        </NavText>
                      </NavItem>
                      )
                    })
                  }
              </NavItem>
              <NavItem eventKey="fund">
                  <NavIcon>
                      <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText style={{ color: "black"}}>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' style={{border: "1px solid black", backgroundColor: "cyan", opacity: 0.2}} >
                      </svg>
                      &nbsp; Venture Fund
                  </NavText>
                  {Object.values(fundCountries).map( (country, index) => {
                    return (
                      <NavItem key={"f-"+country.country}>
                        <NavText style={{ color: "black"}}>
                          {country.country}&nbsp;&nbsp;
                          <Badge pill variant="info">
                            {country.investments.length}
                          </Badge>
                        </NavText>
                      </NavItem>
                      )
                    })
                  }
              </NavItem>
 
          </SideNav.Nav>

      </SideNav>

      <MapComponent 
        lon="-14" 
        lat="24.5" 
        countries={countries} 
        gigaCountries={gigaCountries} 
        procoCountries={procoCountries}
        fundCountries={fundCountries}
        pathfinderCountries={pathfinder}
      />  
      <ul id="menu"></ul>


    </div>
  )
}
