import * as React from 'react';
import * as XP from 'reactxp';
import { ListView } from './ListView';

const styles = {
  subScrollStyle: XP.Styles.createScrollViewStyle({
    margin: 20,
    flex: 1,
    height: 100,
    backgroundColor: '#333fff',
  })
};

interface ScrollListViewProps {
  width: 200;
  height: 200;
  items: any[];
  renderItem: () => JSX.Element;
}

export class ScrollListView extends XP.Component<ScrollListViewProps, XP.Stateless> {

  render() {
    return (
      <XP.ScrollView style={ styles.subScrollStyle }>
        <ListView
          items={ this.props.items }
          renderItem={ this.props.renderItem }
        />
      </XP.ScrollView>
    );
  }

}
