import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import Login from './../src/components/Login';

expect.extend(expectJSX);

describe('Login', () => {
    function renderLogin(isAuthenticated, onLoginClick) {
        let renderer = TestUtils.createRenderer();
        renderer.render(<Login isAuthenticated={isAuthenticated} onLoginClick={onLoginClick} />);
        return renderer.getRenderOutput();
    }
    it('should render correctly', () => {
        let buttonClick = expect.createSpy();
        let output = renderLogin(true, buttonClick);
        expect(output.type).toBe('div');
        const [input1, input2, button] = output.props.children;
        expect(input1.type).toBe('input');
        expect(input2.type).toBe('input');
        expect(button.type).toBe('button');
    });
    it('should handle button click', () => {
        let buttonClick = expect.createSpy();
        let output = renderLogin(true, buttonClick);
        const [,,button] = output.props.children;
        button.props.onClick();
        expect(buttonClick.calls.length).toBe(1);
    });
});
