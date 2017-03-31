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
  onChange = (currentPage, limit) => {
    // Do some pagination thing here
  }
  
  render() {
    return (
      <Pagination total={100} limit={10} onChange={this.onChange}/>
    )
  }
}

render(<PaginationExample/>, document.getElementById('app'));
```


## Available Props 
<strong>total</strong> - Total rows count. <strong>Type: number - required</strong> <br/>
<strong>limit</strong> - Number of items per page.  <strong>Type: number - required</strong> <br/>

```
  @currentPage
  @limit	
```
