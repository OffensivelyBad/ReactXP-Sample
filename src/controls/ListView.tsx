import * as React from 'react';
import * as RX from 'reactxp';
import { VirtualListView, VirtualListViewItemInfo, VirtualListViewCellRenderDetails } from 'reactxp-virtuallistview';

export interface ListViewProps {
  renderItem: (details: VirtualListViewCellRenderDetails<ListViewItemInfo>) => JSX.Element;
  items: any[];
}

export interface VirtualListViewCellRenderDetails {};

export interface ListViewItemInfo extends VirtualListViewItemInfo {
  title: string;
  backgroundColor: string;
}

export class ListView extends RX.Component<ListViewProps, RX.Stateless> {

  render() {
    return (
      <VirtualListView
        itemList={ this.props.items }
        renderItem={ this._renderItem }
        animateChanges={ true }
        skipRenderIfItemUnchanged={ true }
      />
    );
  }

  private _renderItem = (details: VirtualListViewCellRenderDetails<ListViewItemInfo>) => {
    return (
      this.props.renderItem(details)
    );
  }

}
