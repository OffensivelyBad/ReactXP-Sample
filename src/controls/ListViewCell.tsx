import * as React from 'react';
import * as XP from 'reactxp';
import { ListViewItemInfo } from './ListView';

export interface ListViewCellProps {
  itemInfo: ListViewItemInfo;
}

export class ListViewCell extends XP.Component<ListViewCellProps, XP.Stateless> {

  render() {
    const viewStyle = XP.Styles.createViewStyle({
      height: this.props.itemInfo.height,
      backgroundColor: this.props.itemInfo.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000000',
      shadowOpacity: 0.8,
      shadowRadius: 6,
      borderRadius: 6,
      margin: 3
    }, false);

    return (
      <XP.View style={ viewStyle }>
        <XP.Text>
          { this.props.itemInfo.title }
        </XP.Text>
      </XP.View>
    );
  }

}
