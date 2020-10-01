<h1 align="center">Visualization of UNICEF Office of Innovation (OoI)<br/> Activities by Country</h1>

This repository was conceived as a very simple tool to visualize on a map the various workstreams that are currenty underway at the UNICEF Office of Innovation organized by country. 

## 🤔 Rationale

The design requirements were as follows:

1. Data should be easily editable
2. Data should be displayed on a world map
3. Data would be multidimensional, and the visualization should layer multiple dimensions
4. Visualization should be easily customizable to meet the communications needs of the team

The above requirements were addressed with the following strategies:

1. Data is maintained in a Google Spreadsheets that any member of the team can easily edit. The spreadsheet is published on the web, and changes in data automatically and instantaneoulsy propagate to the web application. The integration is done through the [g-sheets-api](`https://www.npmjs.com/package/g-sheets-api) package.

2. Data is displayed on a world map using Mapbox, and integrated on the React frontend through the [react-mapbox-gl](https://www.npmjs.com/package/react-mapbox-gl) bindings for [React GL JS](https://docs.mapbox.com/mapbox-gl-js/api/).

3. Each workstream is visualized in its own layer, whose visibility can be toggled individually. Overlapping layers use a combination of background colors with transparency that can be combined (yellow + blue = green) for those layers with the larger number of countries, and fill patterns (dots and lines) for those layers with fewer number of countries.

4. Theming can easily be modified through CSS.

## 🛠 Architecture

This webapp is built using [Next.js](https://nextjs.org/) as a React Framework and deployed using [Vercel](https://vercel.com/). [Bootstrap](https://getbootstrap.com/) is used as the baseline theme. This application is as simple as it gets: it consists of one page and one component.

* `pages/_app.js` is the application entry point, which loads the required stylesheets and loads `index.js`
* `pages/index.js` wraps most of the logic of the application:
    - loads the data asynchronously from each of the 4 sheets of the referenced Google spreadsheet, and stores each dataset in its own React state variable, as well as combining them into a one single list.
    - displays a fixed sidebar that displays on a drop down the list of countries from each workstream
    - loads the MapComponent from `components/mapComponents.js`
* `components/mapComponent.js` loads the Mapbox map, adds a layer for each dataset, programmatically creates a popup for each country, and programmatically build s a navbar menu to toggle the visibility of each layer

## ✏️ Configuration

In order to run this application, you need to open an account with [Mapbox](https://www.mapbox.com/) to obtain an *Access Token*. The following [environment variable](https://nextjs.org/docs/basic-features/environment-variables) need to be set in `.env` or `.env.local`:
```
NEXT_PUBLIC_ACCESS_TOKEN="MAPBOX_ACCESS_TOKEN"
```

## 💻 Development Environment

Setup your development environment as follows:

1. Clone this repo:
    - SSL:
    ```bash
    git clone git@github.com:lacabra/ooi-project-visualization.git
    ```
    - HTTPS:
    ```bash
    git clone https://github.com/lacabra/ooi-project-visualization.git
    ```
2. Install project dependencies:
    ```bash
    cd ooi-project-visualization
    npm install
    ```
3. After having set up the proper [Configuration](#%EF%B8%8F-configuration), run the developmnet server with [fast refresh](https://nextjs.org/docs/basic-features/fast-refresh):
    ```bash
    npm run dev
    ```
    
## 💙 About UNICEF

[UNICEF](https://www.unicef.org/) works in over 190 countries and territories to protect the rights of every child. UNICEF has spent more than 70 years working to improve the lives of children and their families. In UNICEF, **we believe all children have a right to survive, thrive and fulfill their potential – to the benefit of a better world**.

## :memo: License

This software is licensed under the [GNU General Public License](LICENSE) as published by the Free Software Foundation, either version 3 of the License, or
any later version.

```
    Visualization of UNICEF Office of Innovation (OoI) Activities by Country
    Copyright (C) 2020 UNICEF

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
```


