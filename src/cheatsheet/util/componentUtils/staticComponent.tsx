import React, { Component, ComponentType, ReactElement } from 'react';

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
