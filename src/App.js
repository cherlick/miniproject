import React from 'react';

class App extends React.Component
{

  constructor(){
    super();
    this.state = {count:0 ,hp:100 ,lvl:1 ,enemyTxt: "Fight Me", damage:1, cost:20}

  }
update(){
}
enemyTakesDamage(){
  if (this.state.hp < 0) {
    this.state.lvl +=1
    this.state.count += this.state.lvl*1.1
    this.state.hp = 100 * this.state.lvl
    this.state.enemyTxt= "Fight My new Me"
  }
  this.setState({
    hp: this.state.hp -this.state.damage
  })

}
increseDamage(){
  if (this.state.count>=this.state.cost) {
    this.state.count -=this.state.cost
    this.state.cost *=1.5
    this.setState({
      damage: this.state.damage +1
    })
  }

}
farmCoins(){
  this.setState({
    count: this.state.count +1
  })
}

  render()
  {
    return (

      <div>
        <h1>Lets try a game</h1>
        <label>Player Damage: {this.state.damage}</label> <hr />
        <Button update = {this.farmCoins.bind(this)}> Farm Coins</Button> {this.state.count}
        <hr />
        <label>Enemy Level {this.state.lvl}</label> <hr />
        <Label update = {this.enemyTakesDamage.bind(this)}> {this.state.enemyTxt} -   HP= </Label>{this.state.hp}
        <hr />
        <Button update = {this.increseDamage.bind(this)}> Increse Damage</Button> {this.state.cost} Coins
      </div>

    )
  }
}

const Button =(props) =>
 <button onClick={props.update}>{props.children}</button>

class Label extends React.Component{
  render(){
    return(
      <label onMouseMove={this.props.update}>
        {this.props.children}
      </label>
    )
  }
}

export default App;
