function style_cities() {
	return {
		radius: 5.0,
		weight: 2,
		color: "black",
		fillColor: "white",
		fillOpacity: 0.8
	}
};

function style_climate_general (feature) {
	switch (String(feature.properties['CLASS1FULL'])) {
		case 'Tropical':
			return {
				color: 'red',
				fillColor: 'red',
			}
		case 'Dry':
		return {
			color: 'orange',
			fillColor: 'orange',
		}
		case 'Temperate':
		return {
			color: 'lightgreen',
			fillColor: 'lightgreen',
		}
		case 'Continental':
		return {
			color: 'darkgreen',
			fillColor: 'darkgreen',
		}
		case 'Polar':
		return {
			color: 'skyblue',
			fillColor: 'blue',
		}
	}
};

function style_climate_detailed (feature) {
	switch (String(feature.properties['CLASS2ABBR'])) {
		case 'Af':
			return {
				color: 'darkred',
				fillColor: 'darkred',
			}
		case 'Am':
			return {
				color: 'red',
				fillColor: 'red',
			}
		case 'As':
			return {
				color: 'hotpink',
				fillColor: 'hotpink',
			}
		case 'Aw':
			return {
				color: 'lightpink',
				fillColor: 'lightpink',
			}
		case 'BWk':
			return {
				color: 'yellow',
				fillColor: 'yellow',
			}
		case 'BWh':
			return {
				color: 'orange',
				fillColor: 'orange',
			}
		case 'BSk':
			return {
				color: 'burlywood',
				fillColor: 'burlywood',
			}
		case 'BSh':
			return {
				color: 'peru',
				fillColor: 'peru',
			}
		case 'Bsb':
			return {
				color: 'goldenrod',
				fillColor: 'goldenrod',
			}
		case 'Cfa':
			return {
				color: 'darkgreen',
				fillColor: 'darkgreen',
			}
		case 'Cfb':
			return {
				color: 'limegreen',
				fillColor: 'limegreen',
			}
		case 'Cfc':
			return {
				color: 'darkolivegreen',
				fillColor: 'darkolivegreen',
			}
		case 'Csa':
			return {
				color: 'lime',
				fillColor: 'lime',
			}
		case 'Csb':
			return {
				color: 'lawngreen',
				fillColor: 'lawngreen',
			}
		case 'Csc':
			return {
				color: 'greenyellow',
				fillColor: 'greenyellow',
			}
		case 'Cwa':
			return {
				color: 'lime',
				fillColor: 'chocolate',
			}
		case 'Cwb':
			return {
				color: 'lime',
				fillColor: 'lime',
			}
		case 'Cwc':
			return {
				color: 'saddlebrown',
				fillColor: 'saddlebrown',
			}
		case 'Dfa':
			return {
				color: 'rgb(48,0,48)',
				fillColor: 'rgb(48,0,48)',
			}
		case 'Dfb':
			return {
				color: 'indigo',
				fillColor: 'indigo',
			}
		case 'Dfc':
			return {
				color: 'rgb(203,0,203)',
				fillColor: 'rgb(203,0,203)',
			}
		case 'Dfd':
			return {
				color: 'rgb(200,20,135)',
				fillColor: 'rgb(200,20,135)',
			}
		case 'Dsa':
			return {
				color: 'fuchsia',
				fillColor: 'fuchsia',
			}
		case 'Dsb':
			return {
				color: 'rgb(255,180,255)',
				fillColor: 'rgb(255,180,255)',
			}
		case 'Dsc':
			return {
				color: 'rgb(230,202,255)',
				fillColor: 'rgb(230,202,255)',
			}
		case 'Dsd':
			return {
				color: 'darkgrey',
				fillColor: 'darkgrey',
			}
		case 'Dwa':
			return {
				color: 'rgb(205,180,255)',
				fillColor: 'rgb(205,180,255)',
			}
		case 'Dwb':
			return {
				color: 'rgb(155,125,180)',
				fillColor: 'rgb(155,125,180)',
			}
		case 'Dwc':
			return {
				color: 'darkorchid',
				fillColor: 'darkorchid',
			}
		case 'Dwd':
			return {
				color: 'darkmagenta',
				fillColor: 'darkmagenta',
			}
		case 'EF':
			return {
				color: 'RoyalBlue',
				fillColor: 'DodgerBlue',
			}
		case 'ET':
			return {
				color: 'LightSkyBlue',
				fillColor: 'LightSkyBlue',
			}
	}
};