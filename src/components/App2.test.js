import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './login'
import App from './App';

configure({ adapter: new Adapter() });


describe('Login Test Suite', () => {

    it('should fetch the Subreddit sports as default', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find('input').exists()).toBe(true);
        expect(wrapper.state('currentSubreddit')).toEqual('sports');
                
    })
})

describe('Email Test Suite', () => {

    it('should change the state of the Login component', () => {

        const wrapper = shallow(<Login />);
        wrapper.find('#email').simulate('blur',
            {
                target: { name: 'email', value: 'logrocket@mail.com' }
            });

        expect(wrapper.state('email')).toEqual('logrocket@mail.com');
    })
})


describe('Password Test Suite', () => {

    it('should change the state of the Login component', () => {

        const wrapper = mount(<Login />);
        wrapper.find('#password').simulate('blur',
            {
                target: { name: 'password', value: 'my log is rocket' }
            });

        expect(wrapper.state('password')).toEqual('my log is rocket');
    })
})