import * as React from 'react';
import * as RX from 'reactxp';

export interface SearchTextFieldProps {
  searchStyle?: {};
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}

const _styles = {
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
  })
};

export class SearchTextField extends RX.Component<SearchTextFieldProps, RX.Stateless> {

  constructor(props: SearchTextFieldProps) {
    super(props);
  }

  render() {
    return (
      <RX.TextInput
        style={ [_styles.entryTextStyle, this.props.searchStyle] }
        value={ this.props.value }
        onChangeText={ this.props.onChangeText }
        placeholder={ this.props.placeholder }
        secureTextEntry={ this.props.secureTextEntry }
      />
    );
  }

}
