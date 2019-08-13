
import { boundMethod } from 'autobind-decorator'
import React from 'react'
import {
    NativeSyntheticEvent,
    NativeScrollEvent,
    ScrollView,
    ScrollViewProps,
    Text,
} from 'react-native';
import { 
    withNavigation, 
    NavigationInjectedProps,
    NavigationScreenProps, 
} from "react-navigation";


class LargeTitlesScrollViewBase extends React.Component<ScrollViewProps & NavigationInjectedProps> {

    @boundMethod
    private _onScroll(event: NativeSyntheticEvent<NativeScrollEvent> ) {
      this.props.navigation.setParams({
        scrollOffset: event.nativeEvent.contentOffset.y,
      });
      if (this.props.onScroll) {
          this.props.onScroll(event);
      }
    }
  
    render() {
      const { children, ...props } = this.props;
      return (
        <ScrollView
          {...props}
          onScroll={this._onScroll}
        >
          <Text style={{fontSize:32, backgroundColor: "white"}}>Home</Text>
          {children}
        </ScrollView>
      );
    }
}

const LargeTitlesScrollView = withNavigation(LargeTitlesScrollViewBase);
export { LargeTitlesScrollView };

export function largeTitlesNavigationOptions(navigation: NavigationScreenProps) {
  const scrollOffset: number = navigation.navigation.getParam("scrollOffset", 0);
  let opacity = 1;

  if ( scrollOffset <= 0 ) {
    opacity = 0;
  } else if ( scrollOffset <= 44 ) {
    opacity = scrollOffset / 44;
  }
  return {
    headerStyle: {
      opacity: opacity
    },
  }
}