import * as React from 'react';
import * as XP from 'reactxp';
import { TextField } from './TextField';

interface LoginTextFieldProps {
  textStyle?: {};
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  autoCorrect?: boolean;
  autoFocus?: boolean;
}

export class LoginTextField extends XP.Component<
  LoginTextFieldProps,
  XP.Stateless
> {
  render() {
    return (
      <TextField
        textStyle={this.props.textStyle}
        value={this.props.value}
        onChangeText={this.props.onChangeText}
        placeholder={this.props.placeholder}
        secureTextEntry={this.props.secureTextEntry}
        onSubmitEditing={this.props.onSubmitEditing}
        autoCorrect={this.props.autoCorrect}
        autoFocus={this.props.autoFocus}
      />
    );
  }
}
