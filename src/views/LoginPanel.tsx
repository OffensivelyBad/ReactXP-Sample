import * as React from 'react';
import * as RX from 'reactxp';

interface LoginPanelProps extends RX.CommonProps {
  onNavigateBack: () => void;
}

interface LoginPanelState {
  someValue?: number;
}

const styles = {
  containerStyle: RX.Styles.createViewStyle({
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  scrollStyle: RX.Styles.createScrollViewStyle({
    alignSelf: 'stretch',
    backgroundColor: '#fff333',
  }),
  buttonStyle: RX.Styles.createViewStyle({
    margin: 16,
    borderRadius: 16,
    backgroundColor: '#333fff',
  }),
  buttonTextStyle: RX.Styles.createTextStyle({
    fontSize: 22,
    marginVertical: 6,
    marginHorizontal: 12,
    color: '#ffffff',
  })
};

export class LoginPanel extends RX.Component<LoginPanelProps, LoginPanelState> {

  readonly state: LoginPanelState = {
    someValue: 0
  };

  render() {
    return (
      <RX.View useSafeInsets={ true }>
        <RX.ScrollView style={ styles.scrollStyle }>
          <RX.View style={ styles.containerStyle }>
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

}
