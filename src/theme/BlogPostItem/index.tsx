import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import type BlogPostItemType from '@theme/BlogPostItem';
import GiscusComponent from '../../components/GiscusComponent';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props) {
  const { metadata, isBlogPostPage } = useBlogPost()

  const { frontMatter, title } = metadata
  const { comments } = frontMatter

  return (
    <>
      <BlogPostItem {...props} />
      {(comments && isBlogPostPage) && (
        <GiscusComponent />
      )}
    </>
  );
}
