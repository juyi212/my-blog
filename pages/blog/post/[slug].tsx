import 'github-markdown-css';
import { getAllPosts, getPostBySlug } from '../../../lib/api';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import styled from '@emotion/styled';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts as _allPosts } from '@/contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { ImgHTMLAttributes } from 'react';
import Image, { ImageProps } from 'next/image';

const ImageComponent = (attrs: ImgHTMLAttributes<HTMLImageElement>) => {
  console.log('attrs :', attrs);
  if (!attrs.src || !attrs.alt)
    throw new Error("Necessary attributes in <img> tags: 'src', 'alt', 'width', 'height'");

  return <img src={attrs.src} alt={'asdfasdf'} width={'100%'} />;
};

const components = {
  img: ImageComponent,
};

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post?.body.code || '');

  return (
    <>
      <PostContentContainer>
        <MDXComponent components={components} />
      </PostContentContainer>
    </>
  );
};

const PostContentContainer = styled.section`
  h1 {
    margin: 2rem 0 1rem 0;
    font-size: ${({ theme }) => theme.fontSize.LARGE};
  }

  h2,
  h3,
  h4 {
    margin: 2rem 0 1rem 0;
    font-size: ${({ theme }) => theme.fontSize.EXTRA_BIG};
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.MEDIUM};
    color: ${({ theme }) => theme.color.main};
    line-height: 1.7;
    word-break: break-all;
  }

  p {
    white-space: pre-wrap;
  }

  p,
  li,
  span,
  code {
    word-break: keep-all;
    line-height: 1.8;
    font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  }

  ol,
  ul {
    margin: 1rem 0;
    padding: 2rem;
    border-radius: 5px;
    border: ${({ theme }) => `1px solid ${theme.color.border2}`};
    background-color: ${({ theme }) => theme.color.main50};
  }

  li {
    margin-left: 2rem;
    color: ${({ theme }) => theme.color.black};
  }

  code:not([data-language]) {
    padding: 0.25rem 0.75rem;
    border-radius: 5px;
    margin-right: 0.25rem;
    font-size: ${({ theme }) => theme.fontSize.NORMAL};
    color: ${({ theme }) => theme.color.main800};
    background-color: ${({ theme }) => theme.color.main50};
  }

  th {
    text-align: start;
    padding: 1.25rem 1.75rem;
    font-size: ${({ theme }) => theme.fontSize.NORMAL};
    border: ${({ theme }) => `1px solid ${theme.color.border3}`};
    background-color: ${({ theme }) => theme.color.background3};
  }

  td {
    padding: 1.25rem 1.75rem;
    font-size: ${({ theme }) => theme.fontSize.NORMAL};
    border: ${({ theme }) => `1px solid ${theme.color.border3}`};
  }

  pre {
    width: 100%;
    margin: 1.5rem 0;
    word-break: break-all;
    overflow: auto;
    padding: 1.5rem;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.codeTheme};

    &::-webkit-scrollbar {
      width: 100%;
      height: 7.5px;
      border-radius: 0 0 5px 5px;
      background-color: ${({ theme }) => theme.color.background3};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0 0 5px 5px;
      background-color: ${({ theme }) => theme.color.main};
    }
  }

  blockquote {
    padding: 2rem;
    border-left: ${({ theme }) => `5px solid ${theme.color.main}`};
    border-radius: 5px;
    margin: 1.5rem 0;
    background-color: ${({ theme }) => theme.color.background3};
  }
`;

export default Post;

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const postId = params.slug || '';

  const post = _allPosts.find((post: any) => post.id === postId);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
