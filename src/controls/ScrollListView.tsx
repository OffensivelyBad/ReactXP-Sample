import * as React from 'react';
import * as XP from 'reactxp';
import { ListView } from './ListView';

const styles = {
  subScrollStyle: XP.Styles.createScrollViewStyle({
    margin: 20,
    flex: 1,
    height: 100,
    backgroundColor: '#333fff',
    alignSelf: 'center'
  })
};

interface ScrollListViewProps {
  width: number;
  height: number;
  items: any[];
  renderItem: (details: any) => JSX.Element;
}

export class ScrollListView extends XP.Component<ScrollListViewProps, XP.Stateless> {

  render() {
    return (
      <XP.ScrollView style={[ styles.subScrollStyle, { height: this.props.height || 200, width: this.props.width || 200 } ]}>
        <ListView
          items={ this.props.items }
          renderItem={ this.props.renderItem }
        />
      </XP.ScrollView>
    );
  }

}
