import * as React from 'react';
import * as RX from 'reactxp';
import { Button } from '../controls/Button';

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
  containerStyle: RX.Styles.createViewStyle({
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }),
  headerTextStyle: RX.Styles.createTextStyle({
    fontSize: 72,
    color: '#333fff'
  }),
  buttonStyle: RX.Styles.createViewStyle({
    margin: 16,
    borderRadius: 6,
    backgroundColor: '#333fff',
    width: 300
  }),
  buttonTextStyle: RX.Styles.createTextStyle({
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6
  }),
  searchTextStyle: RX.Styles.createTextInputStyle({
    fontSize: 30,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    color: '#4a4a4a',
    width: 300,
    borderWidth: 1,
    borderColor: '#4a4a4a',
    borderRadius: 6,
    textAlign: 'center'
  })
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
            <RX.Text style={ styles.headerTextStyle }>
              PO List
            </RX.Text>

            <RX.TextInput
              style={ styles.searchTextStyle }
              value={ this.state.po }
              onChangeText={ this._onChangeSearchText }
              placeholder={ 'PO search...' }
            />

            {/* <RX.Button style={ styles.buttonStyle } onPress={ this._onPressLogout }>
              <RX.Text style={ styles.buttonTextStyle }>
                Logout
              </RX.Text>
            </RX.Button> */}
            <Button
              title='Logout'
              onPress= { this._onPressLogout }
            />

          </RX.View>
        </RX.ScrollView>
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
