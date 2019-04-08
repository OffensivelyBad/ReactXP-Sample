import * as React from 'react';
import * as RX from 'reactxp';
import { ListViewItemInfo } from './ListView';

export interface ListViewCellProps {
  itemInfo: ListViewItemInfo;
}

export class ListViewCell extends RX.Component<ListViewCellProps, RX.Stateless> {

  render() {
    const viewStyle = RX.Styles.createViewStyle({
      height: this.props.itemInfo.height,
      backgroundColor: this.props.itemInfo.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center'
    }, false);

    return (
      <RX.View style={ viewStyle }>
        <RX.Text>
          { this.props.itemInfo.title }
        </RX.Text>
      </RX.View>
    );
  }

}
