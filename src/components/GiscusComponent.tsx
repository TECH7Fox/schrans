import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="TECH7Fox/schrans"
      repoId="R_kgDOM56E1Q"
      category="Comments"
      categoryId="DIC_kwDOM56E1c4Ci9NH"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="eager"
    />
  );
}
