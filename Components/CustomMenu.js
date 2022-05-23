
  import { View, Text,TouchableOpacity } from 'react-native'
  import React from 'react'
  import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    MenuProvider,
  } from 'react-native-popup-menu';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomMenu = () => {
    const [showMenu, setShowMenu] = React.useState(false);
  
    return (
      <View style={{}}>
      <MenuProvider>
   
        <Menu
          visible={showMenu}
          onDismiss={() => setShowMenu(false)}
          anchor={
            <TouchableOpacity onPress={() => setShowMenu(true)}>
              <MaterialCommunityIcons
                name="earth"
                size={30}
                style={{ color: 'black' }}
              />
            </TouchableOpacity>
          }>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          {/* <Divider /> */}
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
             
      </MenuProvider>
      </View>
    );
  };
export default CustomMenu;
 

  

  
  