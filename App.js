import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        marginTop:30,
    },
    buttonContainer: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderWidth:1,
        justifyContent: 'center',
    },
    sectionHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderWidth:1,
        flex:1,
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    itemImage: {
        width: 210, // Specify width
        height: 300, // Specify height
        borderRadius: 5,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        padding:10,
    }
});

const datasource = [
  {data: [
      {name:'Charizard', image:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6.png'},
          {name:'Ninetail',image:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_38.png'}
      ],
      element:'FIRE', icon:'fire', bgColor:'#ffa07a', textColor:'#ff4000'},
    {data:[
            {name:'Jynx', image:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_124.png'},
            {name:'Blastoise', image:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_200.png'}
        ],
    element:'WATER', icon:'droplet',bgColor:'#B3E5FC', textColor:'#6a5acd'},
];

const renderItem = ({item}) => {
    return(
        <TouchableOpacity >
            <View style={styles.item}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Image source={{ uri: item.image}} style={styles.itemImage}/>
            </View>
        </TouchableOpacity>
    );
};

const App = () => {
  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <View><Button title='Add Pokemon'/></View>
        </View>
          <View  style={styles.itemContainer}>
              <StatusBar hidden={true}/>
              <SectionList
                  sections={datasource}
                  renderItem={renderItem}
                  renderSectionHeader={({ section: { element, icon, bgColor, textColor } }) => (
                      <View style={[styles.sectionHeader, {backgroundColor:bgColor}]}>
                          <Icon name={icon} size={20} color={textColor}/>
                          <Text style={[styles.sectionHeaderText, { color: textColor }]}>{element}</Text>
                      </View>
                  )}/>
          </View>
      </View>
  );
};

export default App;
