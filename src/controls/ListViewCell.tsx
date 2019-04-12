import * as React from 'react';
import * as XP from 'reactxp';
import { ListViewItemInfo } from './ListView';

interface ListViewCellProps {
  itemInfo: ListViewItemInfo;
}

const contentStyle = XP.Styles.createViewStyle({
  alignItems: 'center',
  justifyContent: 'center'
  // shadowColor: '#000000',
  // shadowOpacity: 0.8,
  // shadowRadius: 6,
});

export class ListViewCell extends XP.Component<ListViewCellProps, XP.Stateless> {

  render() {
    

    return (
      <XP.View style={[ contentStyle, { height: this.props.itemInfo.height, backgroundColor: this.props.itemInfo.backgroundColor } ]}>
        <XP.Text>
          { this.props.itemInfo.title }
        </XP.Text>
      </XP.View>
    );
  }

}
