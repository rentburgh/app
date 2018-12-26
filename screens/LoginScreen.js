import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';
import {View, Button, Text} from 'react-native';
import {FACEBOOK_APP_ID} from 'react-native-dotenv';


class LoginScreen extends React.Component {

  onPressButton() {
    this.props.login();
  }

  renderLoading() {
    return <View><Text>Loading</Text></View>
  }

  renderLogin() {
    return <View>
      <Text>{FACEBOOK_APP_ID}</Text>
      <Button title={"Login with Facebook"} onPress={this.onPressButton.bind(this)} />
    </View>
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    }

    return this.renderLogin();
  }

}

const mapStateToProps = state => {
  const {loading, errorMessage} = state.login;
  return {loading, errorMessage};
};

export default connect(mapStateToProps, {login})(LoginScreen);
