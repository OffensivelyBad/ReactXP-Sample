import * as React from 'react';
import * as RX from 'reactxp';
import { Button } from '../controls/Button';
import { SearchTextField } from '../controls/SearchTextField';
import { ListView } from '../controls/ListView';
import { VirtualListViewItemInfo, VirtualListViewCellRenderDetails } from 'reactxp-virtuallistview';

const ITEMS = [{
  key: 'header1',
  height: 30,
  title: 'Domestic Fruits',
  template: 'header'
}, {
  key: 'banana',
  height: 30,
  title: 'Banana',
  template: 'detail'
}, {
  key: 'apple',
  height: 30,
  title: 'Apple',
  template: 'detail'
}, 
{
  key: 'orange',
  height: 30,
  title: 'Orange',
  template: 'detail'
}, {
  key: 'Grapes',
  height: 30,
  title: 'Grapes',
  template: 'detail'
}];

interface POSearchPanelProps extends RX.CommonProps {
  onPressLogout: () => void;
}

interface POSearchPanelState {
  po: string;
}

interface ListViewItemInfo extends VirtualListViewItemInfo {
  title: string;
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
    const viewStyle = RX.Styles.createViewStyle({
      height: 20,
      backgroundColor: '#fff',
      alignItems: 'center'
    }, false);

    return (
      <RX.View style={ viewStyle }>
        <RX.Text>
          { details.item.title }
        </RX.Text>
      </RX.View>
    );
  }

  private _onPressLogout = () => {
    this.props.onPressLogout();
  }

  private _onChangeSearchText = (text: string) => {
    this.setState({ po: text });
  }

}
