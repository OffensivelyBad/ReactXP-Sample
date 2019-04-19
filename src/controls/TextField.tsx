import * as React from 'react';
import * as XP from 'reactxp';

export interface TextFieldProps {
  textStyle?: {};
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  autoCorrect?: boolean;
  autoFocus?: boolean;
}

const _styles = {
  entryTextStyle: XP.Styles.createTextInputStyle({
    fontSize: 30,
    backgroundColor: '#ffffff',
    color: '#4a4a4a',
    width: 300,
    textAlign: 'center'
  }),
  containerStyle: XP.Styles.createViewStyle({
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    marginBottom: 10,
    borderRadius: 6
  })
};

export class TextField extends XP.Component<TextFieldProps, XP.Stateless> {

  constructor(props: TextFieldProps) {
    super(props);
  }

  render() {
    return (
      <XP.View style={ _styles.containerStyle }>
        <XP.TextInput
          style={ [_styles.entryTextStyle, this.props.textStyle] }
          value={ this.props.value }
          onChangeText={ this.props.onChangeText }
          placeholder={ this.props.placeholder }
          secureTextEntry={ this.props.secureTextEntry }
          onSubmitEditing={ this.props.onSubmitEditing }
        />
      </XP.View>
    );
  }

}
