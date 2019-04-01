import * as React from 'react';
import * as RX from 'reactxp';
import { Button } from '../controls/Button';
import { SearchTextField } from '../controls/SearchTextField';

interface LoginPanelProps extends RX.CommonProps {
  onPressLogin: () => void;
}

interface LoginPanelState {
  someValue?: number;
  login: string;
  password: string;
}

const styles = {
  containerStyle: RX.Styles.createViewStyle({
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }),
  scrollStyle: RX.Styles.createScrollViewStyle({
    alignSelf: 'stretch',
    backgroundColor: '#f5fcff'
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
  })
};

export class LoginPanel extends RX.Component<LoginPanelProps, LoginPanelState> {

  readonly state: LoginPanelState = {
    someValue: 0,
    login: '',
    password: ''
  };

  render() {
    return (
      <RX.View useSafeInsets={ true }>
        <RX.ScrollView style={ styles.scrollStyle }>
          <RX.View style={ styles.containerStyle }>

            <RX.View style={ styles.headerStyle }>
              <RX.Text style={ styles.headerTextStyle }>
                Cool App
              </RX.Text>
            </RX.View>

            <SearchTextField
              value={ this.state.login }
              placeholder={ 'login' }
              onChangeText={ this._onChangeLoginText }
            />
            <SearchTextField
              value={ this.state.password }
              placeholder={ 'password' }
              onChangeText={ this._onChangePasswordText }
            />

            <Button
              onPress={ this._onPressBack }
              title={ 'Login' }
            />

          </RX.View>
        </RX.ScrollView>
      </RX.View>
    );
  }

  private _onPressBack = () => {
    this.props.onPressLogin();
  }

  private _onChangeLoginText = (text: string) => {
    this.setState({ login: text });
  }

  private _onChangePasswordText = (text: string) => {
    this.setState({ password: text });
  }

}
