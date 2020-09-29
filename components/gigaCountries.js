import React, { useState, useEffect } from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


export default function gigaCountries(props) {

	let submenu = "";
	console.log(props.countries);


	return (
		<NavItem eventKey="giga">
			<NavIcon>
			  <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
			</NavIcon>
			<NavText>
			  GIGA
			</NavText>
			{props.countries.map( (country, index) => {
				console.log(country.country)
				return (
					<NavItem key={country.country}>
					<NavText>
					 	{country.country}
					</NavText>
				</NavItem>
					)
				})
			}
      </NavItem>
	);
}