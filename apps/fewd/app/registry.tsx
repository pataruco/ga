'use client';

import { useServerInsertedHTML } from 'next/navigation';
import React, { memo, useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();

    // Types are out of date, clearTag is not defined.
    // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/65021
    // biome-ignore lint/suspicious/noExplicitAny: From Styled Components docs
    (styledComponentsStyleSheet.instance as any).clearTag();

    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}

export default memo(StyledComponentsRegistry);
