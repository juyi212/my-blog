import 'github-markdown-css';
import { getAllPosts, getPostBySlug } from '../../../lib/api';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import styled from '@emotion/styled';
import { useMDXComponent } from 'next-contentlayer/hooks';
import markdownToHtml from '../../../lib/markdownHtml';

// import Callout from '../../../components/callout/Callout';

interface PostType {
  slug: string;
  category: string[];
  title: string;
  date: string;
  coverImage?: string;
  content: string;
}

// interface CustomComponentProps {
//   id?: string;
//   style?: CSSProperties;
// }

const customComponent = {
  // h1: (props: PropsWithChildren<CustomComponentProps>) => <Typography variant="h1" {...props} />,
  // h2: (props: PropsWithChildren<CustomComponentProps>) => <Typography variant="h2" {...props} />,
  // h3: (props: PropsWithChildren<CustomComponentProps>) => <Typography variant="h3" {...props} />,
  // h4: (props: PropsWithChildren<CustomComponentProps>) => <Typography variant="h4" {...props} />,
  // p: (props: PropsWithChildren<CustomComponentProps>) => {
  //   return <Typography variant="body1" color="gray400" lineHeight={1.5} {...props} />;
  // },
  // em: (props: PropsWithChildren<CustomComponentProps>) => (
  //   <Typography variant="body1" color="gray400" {...props} />
  // ),
  // blockquote: (props: PropsWithChildren<CustomComponentProps>) => (
  //   <Callout>
  //     <Callout.Description {...props} />
  //   </Callout>
  // ),
  // Callout: ({ icon, children }: PropsWithChildren<{ icon: string }>) => (
  //   <Callout>
  //     <Callout.Icon>{icon}</Callout.Icon>
  //     <Callout.Description>{children}</Callout.Description>
  //   </Callout>
  // ),
};

const Post = ({ post, source }: { post: PostType; source: MDXRemoteSerializeResult }) => {
  console.log('source :', source);

  return (
    <>
      {/* <Typography variant="h1">{post.title}</Typography> */}
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}

      <PostContentContainer>
        <MDXRemote {...source} />
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
    margin-right: 0.25rem;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSize.NORMAL};
    // color: ${({ theme }) => theme.color.main800};
    // background-color: ${({ theme }) => theme.color.main50};
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
    margin: 1.5rem 0;
    padding: 2rem 2rem 2rem 2.5rem;
    border-left: ${({ theme }) => `5px solid ${theme.color.main}`};
    border-radius: 5px;
    background-color: ${({ theme }) => {
      console.log('theme :', theme);
      return theme.color.background3;
    }};
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
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'description',
    'date',
    'lastmod',
    'weight',
    'content',
    'fileName',
  ]);
  console.log('post', post);
  const content = await markdownToHtml(post.content || '');
  const mdxSource = await serialize(post.content);
  // console.log('content :', content);
  console.log('mdxSource', mdxSource);

  return {
    props: {
      post: {
        ...post,
      },
      // source: content,
      source: mdxSource,
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
