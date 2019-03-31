import * as React from 'react';
import * as RX from 'reactxp';

export interface ButtonProps {
  overrideStyle?: RX.Styles;
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
}

export class Button extends RX.Component<ButtonProps, RX.Stateless> {

  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <RX.Button style={ [_styles.buttonStyle, this.props.overrideStyle] } onPress={ this.props.onPress }>
      <RX.Text style={ _styles.buttonTextStyle }>
        {this.props.title}
      </RX.Text>
    </RX.Button>
    )
  }

}
