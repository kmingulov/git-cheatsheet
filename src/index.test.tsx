jest.mock('react-dom');
jest.mock('cheatsheet/App');

describe('index', () => {
  let root: HTMLDivElement;
  let whyDidYouUpdateCalled: boolean;

  jest.mock('why-did-you-update', () => ({
    whyDidYouUpdate: () => { whyDidYouUpdateCalled = true; },
  }));

  beforeEach(() => {
    root = document.createElement('div');
    root.setAttribute('id', 'root');

    jest.resetModules();

    document.body.appendChild(root);

    whyDidYouUpdateCalled = false;
  });

  afterEach(() => {
    document.body.removeChild(root);
    process.env.NODE_ENV = 'development';
  });

  it('renders without crashing', () => {
    require('./index');
  });

  it('calls whyDidYouUpdate in development mode', () => {
    process.env.NODE_ENV = 'development';

    require('./index');

    expect(whyDidYouUpdateCalled).toBeTruthy();
  });

  it('doesn\'t call whyDidYouUpdate in production mode', () => {
    process.env.NODE_ENV = 'production';

    require('./index');

    expect(whyDidYouUpdateCalled).toBeFalsy();
  });
});

export {
  // Empty export to fix TypeScript errors. See:
  // https://github.com/Microsoft/TypeScript/issues/15230
};
