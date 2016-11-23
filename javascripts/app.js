import React from 'react';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Pagination from 'pagination-material-ui';

const target = document.getElementById('app');


injectTapEventPlugin();

class PaginationExample extends Component {
  render() {
    return (
      <Pagination total={100} perPage={10} onChange={this.onChange.bind(this)}/>
    )
  }

  onChange(currentPage, perPage) {
    // Do some pagination thing here
  }
}

render(
	<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
		<PaginationExample/>
	</MuiThemeProvider>,
	target
);

