import * as React from 'react';
import * as RX from 'reactxp';
import Navigator, { NavigatorDelegateSelector as DelegateSelector, Types } from 'reactxp-navigation';

import { MainPanel } from './MainPanel';
import { SecondPanel } from './SecondPanel';
import { LoginPanel } from './LoginPanel';
import { POSearchPanel } from './POSearchPanel';

enum NavigationRouteId {
    MainPanel,
    SecondPanel,
    LoginPanel,
    POSearchPanel
}

const styles = {
    // Standard navigator style should be an object. So we have to disable caching here.
    navCardStyle: RX.Styles.createViewStyle({
        backgroundColor: '#f5fcff'
    }, false)
};

export class RootView extends RX.Component<RX.CommonProps, RX.Stateless> {
    private _navigator: Navigator | undefined;

    componentDidMount() {
        if (this._navigator) {
            this._navigator.immediatelyResetRouteStack([{
                // routeId: NavigationRouteId.MainPanel,
                routeId: NavigationRouteId.LoginPanel,
                sceneConfigType: Types.NavigatorSceneConfigType.Fade
            }]);
        }
    }

    render() {
        return (
            <Navigator
                delegateSelector={ DelegateSelector }
                cardStyle={ styles.navCardStyle }
                renderScene={ this._renderScene }
                ref={ this._onNavigatorRef }
            />
        );
    }

    private _onNavigatorRef = (navigator: Navigator) => {
        this._navigator = navigator;
    }

    private _renderScene = (navigatorRoute: Types.NavigatorRoute) => {
        switch (navigatorRoute.routeId) {
            case NavigationRouteId.MainPanel:
                return (
                    <MainPanel onPressNavigate={ this._onPressNavigate } onPressLogin={ this._onPressLogin }/>
                );

            case NavigationRouteId.SecondPanel:
                return (
                    <SecondPanel onNavigateBack={ this._onPressBack } />
                );

            case NavigationRouteId.LoginPanel:
                return (
                    <LoginPanel onPressLogin={ this._onPressLogin } />
                );

            case NavigationRouteId.POSearchPanel:
                return (
                    <POSearchPanel onPressLogout={ this._onPressLogout } />
                );
        }

        return null;
    }

    private _onPressNavigate = () => {
        if (this._navigator) {
            this._navigator.push({
                sceneConfigType: Types.NavigatorSceneConfigType.FloatFromRight,
                routeId: NavigationRouteId.SecondPanel
            });
        }
    }

    private _onPressBack = () => {
        if (this._navigator) {
            this._navigator.pop();
        }
    }

    private _onPressLogin = () => {
        if (this._navigator) {
            this._navigator.push({
                sceneConfigType: Types.NavigatorSceneConfigType.FadeWithSlide,
                routeId: NavigationRouteId.POSearchPanel
            });
        }
    }

    private _onPressLogout = () => {
        if (this._navigator) {
            this._navigator.push({
                sceneConfigType: Types.NavigatorSceneConfigType.FloatFromBottom,
                routeId: NavigationRouteId.LoginPanel
            });
        }
    }
}
