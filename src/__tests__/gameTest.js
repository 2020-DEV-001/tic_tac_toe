import React from 'react';
import Game from '../game';
import Board from '../board';
import {shallow,mount} from 'enzyme';

describe('Game', () => {

  
    it('should have a Board', () => {
        const game = shallow(<Game />);
          expect(game.find(Board).length).toBe(1);
    });

    it('should render without crashing', () => {
        let squares = Array(9).fill(null)
        shallow(<Board squares={squares}/>);
      });

      it('should verify game status data for content match', () => {
        const wrapper = mount(<Game/>);
        const firstPlayer = wrapper.find('.status').text();
        expect(firstPlayer).toEqual('Player:2')
    
      })

      it('should pass  game status data for content match', () => {
        const wrapper = mount(<Game/>);
        const firstPlayer = wrapper.find('.status').text();
        expect(firstPlayer).toEqual('Player:X')
    
      })

   
});
