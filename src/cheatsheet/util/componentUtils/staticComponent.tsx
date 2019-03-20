import React, { Component, ComponentType, ReactElement } from 'react';

/**
 * Higher-order component (HOC) which wraps the given component and defines `shouldComponentUpdate` to always return
 * `false`, so that effectively the wrapped component will never be re-rendered. This HOC is useful for fully static
 * components whose state or properties should never change.
 * @param WrappedComp component to wrap
 */
export function staticComponent<P extends object>(WrappedComp: ComponentType<P>): ComponentType<P> {
  return class StaticComponent extends Component<P> {
    public static displayName = `staticComponent(${WrappedComp.displayName || WrappedComp.name || ''})`;

    public shouldComponentUpdate(): boolean {
      return false;
    }

    public render(): ReactElement {
      return <WrappedComp { ...this.props as P }/>;
    }
  };
}
