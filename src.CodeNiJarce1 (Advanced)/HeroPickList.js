import React, { Component } from 'react';
// import Hero from './Hero.js';

class HeroPickList extends Component {

  render() {
    const {func, info} = this.props

      return (
        <div className={(info.ready === 3)?'HeroPickList-hide' : 'HeroPickList' }>
          <h5>{
             info.ready === 0 ? "pick left player": (info.ready === 1) ? "pick right player" : "get ready!"
          }</h5>
          <ul className="HeroPickList__list">
            {
              info.heroList.map((hero, index)=>{
                if(!hero.picked) {
                  return(
                    <li 
                    onMouseOver={
                      func.mouseHover.bind(this, hero.name)
                    }
                    onMouseOut={
                      func.mouseOut.bind(this)
                    }
                    onClick={
                      func.pickHero.bind(this, hero.name, index)
                    }
                    key={"id_"+index}
                  > 
                    <span>{hero.name}</span>
                  </li>
                  )
                } else{
                  return <li className="picked" key={'id_'+ index}>
                          <span>{hero.name}</span>
                        </li>
                }
              })
            }
          </ul>
          <button  disabled={ info.ready === 2 ? false : true} className="fightbtn" onClick={func.startFight.bind(this)}>Fight!</button>
        </div>
      );
    }
  }
  
export default HeroPickList;