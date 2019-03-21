import * as React from 'react';
import * as RX from 'reactxp';

interface LoginPanelProps extends RX.CommonProps {
  onNavigateBack: () => void;
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
    backgroundColor: '#fff333'
  }),
  buttonStyle: RX.Styles.createViewStyle({
    margin: 16,
    borderRadius: 16,
    backgroundColor: '#333fff'
  }),
  buttonTextStyle: RX.Styles.createTextStyle({
    fontSize: 22,
    marginVertical: 6,
    marginHorizontal: 12,
    color: '#ffffff'
  }),
  entryTextStyle: RX.Styles.createTextInputStyle({
    fontSize: 15,
    margin: 2,
    backgroundColor: '#000000',
    color: '#ffffff',
    width: 100
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

            <RX.TextInput style={ styles.entryTextStyle } value={ this.state.login } onChangeText={ this._onChangeLoginText } />
            <RX.TextInput style={ styles.entryTextStyle } value={ this.state.password } onChangeText={ this._onChangePasswordText } />

            <RX.Button style={ styles.buttonStyle } onPress={ this._onPressBack }>
              <RX.Text style={ styles.buttonTextStyle }>
                Go Back
              </RX.Text>
            </RX.Button>
          </RX.View>
        </RX.ScrollView>
      </RX.View>
    );
  }

  private _onPressBack = () => {
    this.props.onNavigateBack();
  }

  private _onChangeLoginText = (text: string) => {
    this.setState({ login: text });
  }

  private _onChangePasswordText = (text: string) => {
    this.setState({ password: text });
  }

}
