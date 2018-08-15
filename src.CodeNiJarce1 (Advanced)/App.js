import React, { Component } from 'react';
import HeroPickList from './HeroPickList';
import HeroWindow from './HeroWindow';


class World extends Component {
  constructor(props){
    super(props);
    this.state = {
      heroList: this.props.heroList,
      rHero: {},
      lHero: {},
      ready: 0, turn: Math.floor(Math.random() * 2), 
      damage: null, winner: ''
    }
  }
  
  
  componentWillUnmount(){
    clearInterval(this.threadId)
  }
  
  componentDidUpdate(){
    if(this.state.rHero.health === 0 || this.state.lHero.health === 0 ){
      clearInterval(this.threadId)
      if(this.state.winner === ''){
        this.endFight();
      }
    }
  }

  pickHeroFunc = {
    mouseHover: (name) => {
      const {ready: x} = this.state;
      x === 0?
      this.setState({
        rHero: {name: name}
      }) : (x === 1) ?
      this.setState({
        lHero: {name: name}
      }) : console.log()
    },
    mouseOut: () => {
      const {ready: x} = this.state;
      x === 0 ?
      this.setState({
        rHero: {}
      }) : (x === 1) ?
      this.setState({
        lHero: {}
      }) : console.log()
    },
    pickHero: (name, index) => {
      const {ready: x} = this.state;
      if(x < 2){
        x === 0 ?
        (()=>{
          this.setState({
            rHero: {name: name, health: 1000},
            ready : 1,
          });
        })() : 
        (x === 1) ?
        (()=>{
          this.setState({
            lHero: {name: name, health: 1000},
            ready : 2,
          });
        })()
        : console.log('haha')
        
        //gawa bago list tapos ilagay ulit sa setstate 
          let list = [...this.state.heroList]
          list[index].picked = true
          this.setState({
            heroList : list,
          })
      } else{
      }
    },
    startFight: () => {
      this.setState({ 
        ready: 3 
      })
      setTimeout(()=>{
        this.threadId = setInterval(()=>this.turn(), 800)
      }, 800)
    },
  }

  restart = () =>{
    this.setState({
      heroList: [
        {name: 'Junie Boy', picked: false},
        {name: 'Junie Bem', picked: false},
        {name: 'Junie Girl', picked: false},
        {name: 'Junie Jem', picked: false}
      ],
      rHero: {},
      lHero: {},
      ready: 0, turn: Math.floor(Math.random() * 2),
      damage: null, winner: ''
    })
  }

  endFight= () =>{
    const {rHero, lHero} = this.state

    setTimeout(()=>{

      rHero.health > lHero.health ?
      this.setState({ winner: 'right'}):
      this.setState({ winner: 'left'})
    }, 1500)
  }

  turn = ()=>{
      const {turn, rHero, lHero} = this.state
      let damage = this.slap();
      
      turn === 0 ?
      this.setState({
        rHero: {name: rHero.name, health: (rHero.health - damage) <= 0 ? 0 : rHero.health - damage},
        turn: 1, damage: damage
      }):
      this.setState({
        lHero: {name: lHero.name, health: (lHero.health - damage) <= 0 ? 0 : lHero.health - damage},
        turn: 0, damage: damage
      })
  }

  slap = () => {
    let puta = (min, max)=>{
      return Math.floor(Math.random() * (max - min) + min)
    }
    let chanceDamage = Math.floor(Math.random()*10+1)
    
    if(chanceDamage === 1){
      return 0;
    }
    else if(chanceDamage > 1 && chanceDamage <= 5){
      return puta(20, 50)
    }
    else if(chanceDamage > 5 && chanceDamage <= 9){
      return puta(60, 90)

    }
    else if(chanceDamage === 10){
      let chanceCritical = Math.floor(Math.random()*5+1)
      if(chanceCritical === 5){
        // console.log('critical!')
        return puta(250, 500)
      } else{
        return puta(100, 140)
      }
    }
  }

  render() {
    const {rHero, lHero, heroList, ready, damage, turn, winner} = this.state
    return (
      <div className="world">
        <HeroPickList func={this.pickHeroFunc} info={{heroList, ready}}/>
        <div className="HeroArena">
          <HeroWindow className="HeroWindow" heroInfo={rHero} corner="left" info={{turn, winner, damage, ready}} />
            <h4 className={winner === '' ? 'vs': 'vs-hide'}>VS.</h4>
          <HeroWindow className="HeroWindow" heroInfo={lHero} corner="right" info={{turn, winner, damage, ready}}/>
          <button className={winner === '' ? 'restartbtn-hide': 'restartbtn'} onClick={this.restart}>Again</button>
        </div>
      </div>
    );
  }
}

export default World;
