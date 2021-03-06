import React from 'react'
import { css } from '@emotion/core'

import Link from '../../Link'
import FeaturedPostTags from './FeatuedPostTags'
import FeatuedPostTitle from './FeatuedPostTitle'
import FeaturedPostDate from './FeaturedPostDate'

import theme from '../../../../config/theme'

function FeaturedPost({ post }) {
  console.log(post)
  return (
    <Link
      aria-label={`View ${post.frontmatter.title} article`}
      to={`/${post.frontmatter.slug}`}
    >
      <div
        key={post.id}
        css={css`
          color: ${theme.brand.primary};
          background-image: ${post.frontmatter.banner &&
            `url(${post.frontmatter.banner.childImageSharp.fluid.src});`}
          background-size: cover;
          background-repeat: no-repeat;
          flex: 1;
          border-radius: 1.25rem;
          h2 {
            margin-top: 5px;
            margin-bottom: 10px;
          }
          flex: 1;
          min-width: 280px;
          min-height: 300px;
          height: 40vh
          max-width: 100%;

          @media (min-width: 500px) {
            margin-left: 0.25rem;
          }
        `}
      >
        <div
          css={css`
            padding: 24px 0px;
            display: flex;
            flex: 1;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <div>
            <FeaturedPostTags
              tags={post.frontmatter.tags}
              padding="0.25rem 0.5rem"
            />
            <FeatuedPostTitle title={post.frontmatter.title} />
            <FeaturedPostDate date={post.frontmatter.date} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedPost
