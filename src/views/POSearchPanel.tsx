import * as React from 'react';
import * as RX from 'reactxp';
import { Button } from '../controls/Button';
import { SearchTextField } from '../controls/SearchTextField';
import { ListView, ListViewItemInfo, VirtualListViewCellRenderDetails } from '../controls/ListView';
import { ListViewCell } from '../controls/ListViewCell';

const ITEMS = [{
  key: 'header1',
  height: 50,
  title: 'POs',
  template: 'header',
  backgroundColor: '#fff333'
}, {
  key: 'po1',
  height: 30,
  title: 'AS12345-1234',
  template: 'detail',
  backgroundColor: '#ffffff'
}, {
  key: 'po2',
  height: 30,
  title: 'SD12345-1234',
  template: 'detail',
  backgroundColor: '#ffffff'
}, 
{
  key: 'po3',
  height: 30,
  title: 'DF12345-1234',
  template: 'detail',
  backgroundColor: '#ffffff'
}, {
  key: 'po4',
  height: 30,
  title: 'FG12345-1234',
  template: 'detail',
  backgroundColor: '#ffffff'
}];

interface POSearchPanelProps extends RX.CommonProps {
  onPressLogout: () => void;
}

interface POSearchPanelState {
  po: string;
}

const styles = {
  scrollStyle: RX.Styles.createScrollViewStyle({
    alignSelf: 'stretch',
    backgroundColor: '#f5fcff'
  }),
  subScrollStyle: RX.Styles.createScrollViewStyle({
    margin: 20,
    flex: 1,
    height: 100,
    backgroundColor: '#333fff',
  }),
  containerStyle: RX.Styles.createViewStyle({
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }),
  headerStyle: RX.Styles.createViewStyle({
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6
  }),
  headerTextStyle: RX.Styles.createTextStyle({
    fontSize: 72,
    color: '#333fff'
  }),
  buttonStyle: {
    margin: 16,
    borderRadius: 6,
    backgroundColor: 'yellow',
    width: 300
  },
  buttonTextStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
    color: 'red'
  }
};

export class POSearchPanel extends RX.Component<POSearchPanelProps, POSearchPanelState> {

  readonly state: POSearchPanelState = {
    po: ''
  };

  render() {
    return (
      <RX.View useSafeInsets={ true }>
        <RX.ScrollView style={ styles.scrollStyle }>
          <RX.View style={ styles.containerStyle }>

            <RX.View style={ styles.headerStyle }>
              <RX.Text style={ styles.headerTextStyle }>
                PO List
              </RX.Text>
            </RX.View>

            <SearchTextField
              value= { this.state.po }
              onChangeText= { this._onChangeSearchText }
              placeholder={ 'PO Search...'}
            />

            <RX.ScrollView style={ styles.subScrollStyle }>
              <ListView
                items={ ITEMS }
                renderItem={ this._renderItem }
              />
            </RX.ScrollView>

            <Button
              title='Logout'
              onPress= { this._onPressLogout }
            />

          </RX.View>
        </RX.ScrollView>
      </RX.View>
    );
  }

  private _renderItem(details: VirtualListViewCellRenderDetails<ListViewItemInfo>) {
    return (
      <ListViewCell itemInfo={ details.item } />
    );
  }

  private _onPressLogout = () => {
    this.props.onPressLogout();
  }

  private _onChangeSearchText = (text: string) => {
    this.setState({ po: text });
  }

}
