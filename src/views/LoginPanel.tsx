import * as React from 'react';
import * as XP from 'reactxp';
import { Button } from '../controls/Button';
import { SearchTextField } from '../controls/SearchTextField';

interface LoginPanelProps extends XP.CommonProps {
  onLoginSuccess: () => void;
}

interface LoginPanelState {
  someValue?: number;
  login: string;
  password: string;
}

const styles = {
  containerStyle: XP.Styles.createViewStyle({
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }),
  scrollStyle: XP.Styles.createScrollViewStyle({
    alignSelf: 'stretch',
    backgroundColor: '#f5fcff'
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
  })
};

const testLogin = {
  login: 'test',
  password: 'test'
}

export class LoginPanel extends XP.Component<LoginPanelProps, LoginPanelState> {

  readonly state: LoginPanelState = {
    someValue: 0,
    login: '',
    password: ''
  };

  render() {
    return (
      <XP.View useSafeInsets={ true }>
        <XP.ScrollView style={ styles.scrollStyle }>
          <XP.View style={ styles.containerStyle }>

            <XP.View style={ styles.headerStyle }>
              <XP.Text style={ styles.headerTextStyle }>
                Cool App
              </XP.Text>
            </XP.View>

            <SearchTextField
              value={ this.state.login }
              placeholder={ 'login' }
              onChangeText={ this._onChangeLoginText }
              onSubmitEditing={ () => {} }
            />
            <SearchTextField
              value={ this.state.password }
              placeholder={ 'password' }
              onChangeText={ this._onChangePasswordText }
              secureTextEntry
              onSubmitEditing={ this._onPressLogin }
            />

            <Button
              onPress={ this._onPressLogin }
              title={ 'Login' }
            />

          </XP.View>
        </XP.ScrollView>
      </XP.View>
    );
  }

  private _onPressLogin = () => {
    this._validateLogin(this.state.login, this.state.password);
  }

  private _validateLogin = (login: string, password: string) => {
    if (login === testLogin.login && password === testLogin.password) {
      this._onLoginSuccess();
    } else {
      this._onLoginFailed();
    }
  }

  private _onLoginFailed = () => {
    XP.Alert.show('Attention!', 'The login supplied is not correct. Please try again');
  }

  private _onLoginSuccess = () => {
    this.props.onLoginSuccess();
  }

  private _onChangeLoginText = (text: string) => {
    this.setState({ login: text });
  }

  private _onChangePasswordText = (text: string) => {
    this.setState({ password: text });
  }

}
