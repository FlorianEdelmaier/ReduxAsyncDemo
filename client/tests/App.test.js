import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJsx from 'expect-jsx';
import App from './../src/components/App';

expect.extend(expectJsx);

describe('App', () => {
    function renderApp() {
        const renderer = TestUtils.createRenderer();
        renderer.render(<App />);
        return renderer.getRenderOutput();
    };
    describe('output', () => {
        it('should render correctly', () => {
            const app = renderApp();
            const expected = '<h1> Test </h1>';
            expect(app).toIncludeJSX(expected);
        });
    });
});
