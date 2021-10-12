import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TextInput } from 'react-native';
import { getRessource, getRessources, createRessource, deleteRessource } from '../../services/server_api';
import { CommunityContext } from '../../CommunityContext';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
class ItemPublication extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      docomment: false,
      text: ""
    }
  }

  componentDidMount(){
    // console.log()
    moment.locale("FR");
    this.getCommentsForPub(this.props.comments,this.props.data.id)
  }
  refresh(){
    getRessources("comment").then(result=>{
      // console.log(result.response)
      this.getCommentsForPub(result.response,this.props.data.id)
    });
    
  }
  getCommentsForPub(commentst, id){
    var comments = []
    // console.log(id)
    // console.log(commentst)
    comments = commentst.filter(obj => {
      return obj.publication === id
    });
    // console.log(comments)
    if (comments === undefined){
      comments = []
    }
    var promises = comments.map(value => {
      return getRessource("member", value.author).then(result=>{
        value.author_detail = result.response; 
        return value;
      })
    })
    Promise.all(promises).then((results) =>{
      this.setState({comments: results});
    })
  }
  handleReply(id){
    this.refresh()
    this.setState({docomment: true})
  }
  handleComment(id){
    createRessource("comment", {content: this.state.text, author:this.context.currentUser.id,publication: this.props.data.id}).then(result=>{
            //console.log(result.response)
            Toast.show({
              type: 'success',
              text1: 'Ajout',
              text2: 'Votre commentaire a bien été ajouté'
            });

            this.setState({docomment: false})
            this.refresh()


        });
        this.props.dorefresh()
  }
  deleteComment(id){
    deleteRessource("comment",id).then(result=>{
            //console.log(result.response)
            Toast.show({
              type: 'success',
              text1: 'Suppression',
              text2: 'Votre commentaire a bien été supprimer'
            });

            this.refresh()

        });

  }
  onChangeText(text){
    this.setState({text: text})
  }
  render() {
    return (
      <View style={styles.container}>
        <Image  style={styles.avatar} source={require('../../assets/avatar.png')}/>
        <View style={styles.content} >
            <Text>{this.props.data.title}</Text>
            <Text>{this.props.data.content}</Text>
            {this.state.comments.map(value=> {
                  return (
                  <View style={styles.contentPost} >
                    { (this.context.currentUser.id === value.author) || (this.context.currentUser.role > 1) ?
                    <Ionicons style={{position: "absolute", right: 0, top:0}} name="md-trash" onPress={() => this.deleteComment(value.id)} size={16} color="#e80000" />
                    :null}
                    <Text style={{height: '20%', width:"100%",fontWeight:"bold"}}>{value.author_detail.name}</Text>
                    <Text style={{height: '20%', width:"100%"}}>{moment(value.created).fromNow().toString()}</Text>
                    <Text style={{flexBasis:"100%"}}>{value.content}</Text>

                  </View>
                  )
            })}
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.handleReply(this.props.data.id)}
        >
          <Text style={{color:"#FFF"}}> Reply </Text>
        </TouchableHighlight>
        {this.state.docomment ? 
          <View style={{display: 'flex', justifyContent: 'space-between',flexDirection: 'row', flexWrap: 'nowrap'}}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.onChangeText(text)} 
          />
              
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.handleComment(this.props.data.id)}
            >
            <Text style={{color:"#FFF"}}> Send </Text>
            </TouchableHighlight>
          </View>
        :null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
    backgroundColor: "#FFF"
  },
  avatar:{
    width: 150, 
    height: 150,
    margin: 10,
    borderColor:"black",
    borderWidth:1,
  },
  content:{
      margin: 10,
      flexWrap:"wrap",
      flex:1, 
  },
  contentPost:{
    marginBottom:10,
    marginTop:10,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    flexWrap: 'wrap',
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
  },
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    padding: 10,
    marginBottom: 10,
  }
});

ItemPublication.contextType = CommunityContext;


export default ItemPublication;