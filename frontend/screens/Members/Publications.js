import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ItemPublication from '../../components/Publications/ItemPublication';
import { getRessources, getRessource } from '../../services/server_api';

class Publications extends React.Component {

  constructor(props) {
    super(props)
    this.dorefresh = this.refresh.bind(this);
    this.state = {
      publications: [],
      comments: []
    }
  }

  componentDidMount(){
    this.refresh();
  }

  refresh(){

    getRessources("comment").then(result=>{
      // console.log(result.response)
      var comments = result.response;
      this.setState({comments: comments});
      getRessources("publication").then(result=>{
        // console.log(result.response)
        this.setState({publications: result.response});
      });
  
    });
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Community!</Text>
        <ScrollView contentContainerStyle={styles.containerItems}>
          {this.state.publications.map((value, index)=>{
            
            return <ItemPublication key={index} data={value} dorefresh={this.dorefresh} comments={this.state.comments}/>
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
    textAlign:"center",
    marginTop: 60,
    //margin:"10px"
  },
  containerItems: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Publications;