import * as React from 'react';
import * as XP from 'reactxp';
import { ListViewItemInfo } from './ListView';

interface ListViewCellProps {
  itemInfo: ListViewItemInfo;
  onSelectItem: (item: any) => void;
}

const contentStyle = XP.Styles.createViewStyle({
  alignItems: 'center',
  justifyContent: 'center'
});

export class ListViewCell extends XP.Component<ListViewCellProps, XP.Stateless> {
  render() {
    return (
      <XP.Button
        style={[ contentStyle, { height: this.props.itemInfo.height, backgroundColor: this.props.itemInfo.backgroundColor } ]}
        onPress={this.props.onSelectItem}
      >
        <XP.Text>
          { this.props.itemInfo.title }
        </XP.Text>
      </XP.Button>
    );
  }
}
