import React, { ReactNode, ReactElement } from "react";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";

type ComponentWrapperProps = {
  children: ReactNode;
};

export const ComponentWrapper = (
  props: ComponentWrapperProps
): ReactElement => {
  const { children } = props;
  return (
    <RecoilRoot>
      {/* Clear SWR Cache */}
      {/* https://github.com/vercel/swr/issues/161#issuecomment-912528569 */}
      <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
    </RecoilRoot>
  );
};
