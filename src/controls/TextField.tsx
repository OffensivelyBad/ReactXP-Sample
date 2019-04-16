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

export class TextField extends XP.Component<TextFieldProps, XP.Stateless> {

  constructor(props: TextFieldProps) {
    super(props);
  }

  render() {
    return (
      <XP.TextInput
        style={ [_styles.entryTextStyle, this.props.textStyle] }
        value={ this.props.value }
        onChangeText={ this.props.onChangeText }
        placeholder={ this.props.placeholder }
        secureTextEntry={ this.props.secureTextEntry }
        onSubmitEditing={ this.props.onSubmitEditing }
      />
    );
  }

}
