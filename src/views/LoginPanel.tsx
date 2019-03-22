import * as React from 'react';
import * as RX from 'reactxp';

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
  buttonStyle: RX.Styles.createViewStyle({
    margin: 16,
    borderRadius: 6,
    backgroundColor: '#333fff',
    width: 300
  }),
  buttonTextStyle: RX.Styles.createTextStyle({
    fontSize: 30,
    marginVertical: 6,
    marginHorizontal: 12,
    color: '#ffffff',
    alignSelf: 'center'
  }),
  entryTextStyle: RX.Styles.createTextInputStyle({
    fontSize: 30,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    color: '#4a4a4a',
    width: 300,
    borderWidth: 1,
    borderColor: '#4a4a4a',
    borderRadius: 6,
    textAlign: 'center'
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
    login: 'login',
    password: 'password'
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

            <RX.TextInput style={ styles.entryTextStyle } value={ this.state.login } onChangeText={ this._onChangeLoginText } />
            <RX.TextInput style={ styles.entryTextStyle } value={ this.state.password } onChangeText={ this._onChangePasswordText } />

            <RX.Button style={ styles.buttonStyle } onPress={ this._onPressBack }>
              <RX.Text style={ styles.buttonTextStyle }>
                Login
              </RX.Text>
            </RX.Button>
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
