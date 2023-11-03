import React, {useState} from 'react';
import {View, Text, TextInput, Button, Dimensions} from 'react-native';

const OnBoardingScreen2 = () => {
  const Height = Dimensions.get('window').height;
  const Width = Dimensions.get('window').width;
  const [value, setValue] = useState('');
  const [table, setTable] = useState([]);

  const generateTable = () => {
    const num = parseInt(value, 10);

    if (!isNaN(num)) {
      const tableData = [];
      for (let i = 1; i <= 10; i++) {
        const result = num * i;
        tableData.push(
          <View style={{paddingVertical: 5}}>
            <View
              key={i}
              style={{
                height: 30,
                width: 100,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                borderRadius: 5,
                backgroundColor: '#fff',
                elevation: 5,
              }}>
              <Text style={{color: 'red'}}>{num} </Text>
              <Text style={{color: '#000', fontWeight: 'bold'}}>x </Text>
              <Text style={{color: 'red'}}>{i} </Text>
              <Text style={{color: '#000', fontWeight: 'bold'}}>=</Text>
              <Text style={{color: 'green'}}>{result}</Text>
            </View>
          </View>,
        );
      }
      setTable(tableData);
    }
  };

  return (
    <View
      style={{
        height: Height,
        width: Width,
        alignItems: 'center',
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 20,
          color: '#000',
          fontWeight: 'bold',
          marginBottom: 30,
        }}>
        My Calculator
      </Text>
      <View
        style={{
          flex: 1 / 1.2,
          width: 100,
        }}>
        <Text>{table}</Text>
      </View>
      <TextInput
        style={{borderWidth: 1, width: 250, marginTop: 20}}
        onChangeText={setValue}
        value={value}
        keyboardType="numeric"
      />
      <Button title="Table" onPress={generateTable} />
    </View>
  );
};

export default OnBoardingScreen2;
