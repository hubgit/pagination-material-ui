# Pagination Component for material-ui

## Usage
```
npm install --save pagination-material-ui

or

yarn add pagination-material-ui
```

```
import React, { Component } from 'react';
import { render } from 'react-dom';
import Pagination from 'pagination-material-ui'

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

render(<PaginationExample/>, document.getElementById('app'));
```


## Available Props 
<strong>total</strong> - Total rows count. <strong>Type: number - required</strong> <br/>
<strong>perPage</strong> - Show rows count on per page.  <strong>Type: number - required</strong> <br/>
<strong>onChange</strong> - Callback for page change <strong>Type: function required</strong> <br/>

```
  @currentPage
  @perPage	
```
<strong>texts</strong> - Localization text <strong>Type: object</strong>

```
{
  page: 'Page: ',
  perPage: 'Per Page: ',
  showing: 'Showing {total} of {from} to {to}'
}
```
