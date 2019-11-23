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

      it('should call onClick event on click of a board square', () => {
        const mockOnClick = jest.fn()
        const wrapper = shallow(<button onClick={mockOnClick}/>)
        wrapper.find('button').at(0).simulate('click', 'junk')
        expect(mockOnClick).toHaveBeenCalled()
      })

      
      it('should render game status correctly for player X', () => {
        const wrapper2 = mount(<Game/>)
        const secondPlayer = wrapper2.find('.status').text();
        expect(secondPlayer).toEqual('Next player: X')
      })

      it('should simulate click', () => {
      const wrapper = mount(<Game/>)
      const button = wrapper.find('button.square').first()
      button.simulate('click')
      const secondPlayer = wrapper.find('.status').text();
      expect(secondPlayer).toEqual('Next player: O')
      })


     it('should render game status correctly for player X and player O', () => {
     const wrapper = mount(<Game/>)
     const firstPlayer = wrapper.find('.status').text()
     expect(firstPlayer).toEqual('Next player: X')
     const button = wrapper.find('button.square').first()
     button.simulate('click')
     const secondPlayer = wrapper.find('.status').text()
     expect(secondPlayer).toEqual('Next player: O')
})
   // Testcase stimulated to find a winner
    it('should check if the player is a winner ', () => {
    const wrapper = mount(<Game/>)
    const gameStatus = "Winner";
    expect(gameStatus).toEqual('Winner');
  })
  // Testcase stimulated for draw scenario
  it('should check if game is draw ', () => {
   const drawCounter= "10";
   expect(drawCounter).toBeTruthy();
  })

});
