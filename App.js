import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import { exp } from 'react-native-reanimated';
import ListItemDetail from './src/components/ListItemDetail';

const navigation = createStackNavigator({
  searchScreen:SearchScreen,
  listDetailScreen:ListItemDetail
},{
  initialRouteName:'searchScreen',
  defaultNavigationOptions:{
    title:'Restaurant Search'
  }
})

export default createAppContainer(navigation)