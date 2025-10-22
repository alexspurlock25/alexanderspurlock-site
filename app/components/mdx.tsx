import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';

export function CustomMDX(props: { source: string }) {
  return <MDXRemote {...props} />;
}
