import React from 'react';

import './directory.styles.scss';
import { MenuItem } from '../menu-item/menu-item.component';

export class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sections: props.sections };
  }

  render = () => (
    <div className='directory-menu'>
      {this.state.sections?.map(({ id, title, imageUrl, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
}
