import * as React from 'react';
import * as XP from 'reactxp';
import { Button } from '../controls/Button';
import { TextField } from '../controls/TextField';
import { ListViewItemInfo, VirtualListViewCellRenderDetails } from '../controls/ListView';
import { ListViewCell } from '../controls/ListViewCell';
import { ScrollListView } from '../controls/ScrollListView';

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

interface ResultPanelProps extends XP.CommonProps {
  onPressLogout: () => void;
}

interface ResultPanelState {
  po: string;
}

const styles = {
  scrollStyle: XP.Styles.createScrollViewStyle({
    alignSelf: 'stretch',
    backgroundColor: '#f5fcff'
  }),
  containerStyle: XP.Styles.createViewStyle({
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }),
  headerStyle: XP.Styles.createViewStyle({
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6
  }),
  headerTextStyle: XP.Styles.createTextStyle({
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

export class ResultPanel extends XP.Component<ResultPanelProps, ResultPanelState> {

  readonly state: ResultPanelState = {
    po: ''
  };

  render() {
    return (
      <XP.View useSafeInsets={ true }>
        <XP.ScrollView style={ styles.scrollStyle }>
          <XP.View style={ styles.containerStyle }>

            <XP.View style={ styles.headerStyle }>
              <XP.Text style={ styles.headerTextStyle }>
                PO List
              </XP.Text>
            </XP.View>

            <TextField
              value= { this.state.po }
              onChangeText= { this._onChangeSearchText }
              placeholder={ 'PO Search...'}
            />

            <ScrollListView
              width={600}
              height={300}
              items={ITEMS}
              renderItem={this._renderItem}
            />

            <Button
              title='Logout'
              onPress= { this._onPressLogout }
            />

          </XP.View>
        </XP.ScrollView>
      </XP.View>
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
