import React, { Component, ComponentType, ReactNode } from 'react';

/**
 * Higher-order component (HOC) simply returning a new component with a given display name which always just renders its
 * children.
 * @param displayName component display name
 */
export function plainComponent<P extends object>(displayName: string): ComponentType<P> {
  return class PlainComponent extends Component<P> {
    public static displayName = displayName;

    public render(): ReactNode {
      return (
        <>
          { this.props.children }
        </>
      );
    }
  };
}
