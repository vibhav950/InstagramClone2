import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { userData } from '../../data/userData';

// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

interface IconProps {
  icon: {
    name: string;
    inactiveImg: any; // replace 'any' with the actual type of your image assets
    activeImg: any; // replace 'any' with the actual type of your image assets
  };
}

export const bottomTabIcons = [
  {
    name: 'Home',
    inactiveImg: require('../../assets/icons/home.png'),
    activeImg: require('../../assets/icons/home-active.png'),
  },
  {
    name: 'Search',
    inactiveImg: require('../../assets/icons/search.png'),
    activeImg: require('../../assets/icons/search-active.png'),
  },
  {
    name: 'NewPost',
    inactiveImg: require('../../assets/icons/plus.png'),
    activeImg: require('../../assets/icons/plus.png'),
  },
  {
    name: 'Reels',
    inactiveImg: require('../../assets/icons/reels.png'),
    activeImg: require('../../assets/icons/reels-active.png'),
  },
];

const BottomTab = ({ nav, icons, currentScreen }: { nav: HomeProps['navigation']; icons: typeof bottomTabIcons; currentScreen: string }) => {

  const Icon = ({ icon }: IconProps) => (
    <TouchableOpacity
      onPress={() => {
        nav.navigate(icon.name);
      }}>
      <Image
        source={currentScreen === icon.name ? icon.activeImg : icon.inactiveImg}
        style={styles.icon}
      />
    </TouchableOpacity>
  );

  return (
    <View>
      <Divider width={1} orientation='vertical' style={styles.wrapper} />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            nav.navigate('MyProfile')
          }}
          style={{ marginTop: -2 }}>
          <View style={styles.profileContainer}>
            <Image source={userData.profilePic} style={styles.profilePic} />
            <Image
              source={currentScreen === 'MyProfile' ? require('../../assets/icons/white-frame-circular.png') : require('../../assets/icons/none.png')}
              style={[styles.icon, styles.overlayIcon]}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '3%',
    zIndex: 998,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 42,
    marginTop: 10,
    backgroundColor: '#ffffff'
  },
  icon: {
    width: 30,
    height: 30,
  },
  overlayIcon: {
    position: 'absolute',
    zIndex: 99,
    width: 45,
    height: 45,
    top: '50%',
    left: '50%',
    transform: [{ translateX: -22.5 }, { translateY: -22.5 }], // Center the overlay icon
  },
  profileContainer: {
    position: 'relative',
  },
  profilePic: {
    width: 34,
    height: 34,
    borderRadius: 50,
  },
});

export default BottomTab;
