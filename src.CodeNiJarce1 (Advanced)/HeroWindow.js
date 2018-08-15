import React, { Component } from 'react';

class HeroWindow extends Component {
    showFace = () => {
      const {corner} = this.props
      const {info: {turn , damage}, heroInfo} = this.props
      
      if(damage !== null){
        if(corner === 'right'){
          if(turn === 1){
            return 'HeroWindow__face-right-def';
          } 
          else if(turn === 0 && damage === 0){
            return 'HeroWindow__face-right-miss';
          } 
          else if(turn === 0){
            return 'HeroWindow__face-right-attack';
          }
          else{
            return 'HeroWindow__face-right-poker'
          }
        } 
        else if(corner === 'left'){
          if(turn === 0){
            return 'HeroWindow__face-left-def';
          } 
          else if(turn === 1 && damage === 0){
            return 'HeroWindow__face-left-miss';
          } 
          else if(turn === 1){
            return 'HeroWindow__face-left-attack';
          } 
          else{
            return 'HeroWindow__face-left-poker'
          }
        } else {
        }
      } else {
        if(heroInfo.name){
          if(corner === 'right'){
            return 'HeroWindow__face-right-poker'
          } else if(corner === 'left'){
            return 'HeroWindow__face-left-poker'
          }
        } else{
          // return false
        }
      }
    }
    showWinner = () =>{
      const {corner, info} = this.props
     
      if(this.props.info.winner !== ''){
        return corner === info.winner? <h5 className="win">Lose</h5> : <h5 className="win">Win</h5>
      }
    }
    showDamage = ()=>{
      const {corner, info} = this.props
      let d;
      if(info.damage === 0){
        d = 'MISS';
      } else if(info.damage >= 250){
        d = <React.Fragment>Critical!!!<br /> <small>-{info.damage} HP</small></React.Fragment> ;
      } 
      else {
        d = info.damage !== null ? <small>-{info.damage} HP</small> : ''  
      } 

      if(corner === 'right' && info.turn === 0){
        return <h5 className="damage">{d}</h5>;
      } else if (corner === 'left' && info.turn === 1) {
        return <h5 className="damage">{d}</h5>;
      } else {
        return false
      }
    }

    render() {
      const {corner, heroInfo} = this.props
      return (
        <div className={this.props.className}>
          <div className="topLabel">
              {this.showDamage()} 
              {this.showWinner()} 
          </div>
          <div className={this.showFace()}>
            {/* { heroInfo.name || '???'} */}
          </div>
          <div className="HeroWindow__info">
            <span className={"heroname heroname-"+corner}>
              {
                heroInfo.name || '???'
              }
            </span>
            <div className="lifeBarContainer">
              <span className={"lifeBar lifeBar__"+corner}
                style={{
                  width: heroInfo.health ? (heroInfo.health / 1000) * 100 + '%' : 0 +'%' }
                  }></span>
              <div className={"healthPoints__Container healthPoints__Container__"+corner}>
                <span className="n">{heroInfo.health || 0}/1000</span><span className="t">HP</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
export default HeroWindow;