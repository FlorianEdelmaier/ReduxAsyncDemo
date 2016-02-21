import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import UserName from './../src/components/UserName';

expect.extend(expectJSX);

describe('UserName component', () => {
    function renderUserName(props) {
        let renderer = TestUtils.createRenderer();
        renderer.render(<UserName {...props} />);
        return renderer.getRenderOutput();
    }
    describe('given a user property', () => {
        it('should render first- and last-name', () => {
            const properties = { user: { firstName: 'foo', lastName: 'bar' }};
            let output = renderUserName(properties);
            expect(output).toIncludeJSX('<h3> foo bar </h3>');
        });
    });
    describe('given empty object', () => {
        it('should render empty string', () => {
            let output = renderUserName({});
            expect(output).toIncludeJSX('<h3> </h3>');
        });
    });
});
