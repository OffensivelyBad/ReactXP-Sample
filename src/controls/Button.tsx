import * as React from 'react';
import * as RX from 'reactxp';

export interface ButtonProps {
  buttonStyle?: {};
  textStyle?: {};
  title: string;
  onPress: () => void;
}

const _styles = {
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
  })
};

class Button extends RX.Component<ButtonProps, RX.Stateless> {

  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <RX.Button style={ [_styles.buttonStyle, this.props.buttonStyle] } onPress={ this.props.onPress }>
        <RX.Text style={ [_styles.buttonTextStyle, this.props.textStyle] }>
          {this.props.title}
        </RX.Text>
      </RX.Button>
    );
  }

}

export { Button };
