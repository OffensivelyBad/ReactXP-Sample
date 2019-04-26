import * as React from 'react';
import * as XP from 'reactxp';
import {
  VirtualListView,
  VirtualListViewItemInfo,
  VirtualListViewCellRenderDetails
} from 'reactxp-virtuallistview';

interface ListViewProps {
  renderItem: (
    details: VirtualListViewCellRenderDetails<ListViewItemInfo>
  ) => JSX.Element;
  items: any[];
}

export interface VirtualListViewCellRenderDetails {}

export interface ListViewItemInfo extends VirtualListViewItemInfo {
  title: string;
  backgroundColor: string;
}

export class ListView extends XP.Component<ListViewProps, XP.Stateless> {
  render() {
    return (
      <VirtualListView
        itemList={this.props.items}
        renderItem={this._renderItem}
        animateChanges={true}
        skipRenderIfItemUnchanged={true}
      />
    );
  }

  private _renderItem = (
    details: VirtualListViewCellRenderDetails<ListViewItemInfo>
  ) => {
    return this.props.renderItem(details);
  };
}
