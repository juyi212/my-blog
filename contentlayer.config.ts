import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

const rehypeOptions = {
  theme: 'slack-dark',
  keepBackground: true,
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    thumbnail: {
      type: 'string',
      required: true,
    },
    createdAt: {
      type: 'date',
      required: true,
    },
    updatedAt: {
      type: 'date',
      required: false,
    },
  },
  computedFields: {
    id: {
      type: 'string',
      resolve: (post) => {
        const [_, id] = post._raw.flattenedPath.split('/');

        return id || post._raw.flattenedPath;
      },
    },

    url: {
      type: 'string',
      resolve: (post) => {
        const [_, path] = post._raw.flattenedPath.split('/');

        return `/posts/${path || post._raw.flattenedPath}`;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        // @ts-expect-error - rehype-pretty-code types are not compatible with rehype plugins
        rehypePrettyCode,
        rehypeOptions,
      ],
    ],
  },
});
