import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/tag'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

// Components
import mdxComponents from './mdx'
import Header from './Header'
import BlogHeader from './BlogHeader'
import Sidebar from './Sidebar'

// Libraries
import { bpMaxSM } from '../lib/breakpoints'
import reset from '../lib/reset'
import { fonts } from '../lib/typography'

// Configurations
import theme from '../../config/theme'
import config from '../../config/website'
import Hero from './Hero'

export const globalStyles = css`
  .button-secondary {
    border-radius: 4px;
    padding: 12px 12px;
    background: ${theme.colors.primary_light};
  }
  ${bpMaxSM} {
    p,
    em,
    strong {
      font-size: 90%;
    }
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 24px;
    }
  }
  hr {
    margin: 50px 0;
    border: none;
    border-top: 1px solid ${theme.colors.gray};
    background: none;
  }
  em {
    font-family: ${fonts.regularItalic};
  }
  strong {
    em {
      font-family: ${fonts.semiboldItalic};
    }
  }
  input {
    border-radius: 4px;
    border: 1px solid ${theme.colors.gray};
    padding: 5px 10px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    font-family: ${fonts.regular};
    margin-top: 5px;
    ::placeholder {
      opacity: 0.4;
    }
  }
  .gatsby-resp-image-image {
    background: none !important;
    box-shadow: 0;
  }
  button {
    border-radius: 4px;
    background-color: ${theme.brand.primary};
    border: none;
    color: ${theme.colors.white};
    padding: 5px 10px;
    cursor: pointer;
    border: 1px solid ${theme.brand.primary};
    transition: ${theme.transition.ease};
    :hover {
      background: ${theme.colors.link_color_hover};
      border: 1px solid ${theme.colors.link_color_hover};
      transition: ${theme.transition.ease};
    }
  }
  pre {
    background-color: #061526 !important;
    border-radius: 4px;
    font-size: 16px;
    padding: 10px;
    overflow-x: auto;
    white-space: nowrap;
    /* Track */
    ::-webkit-scrollbar {
      width: 100%;
      height: 5px;
      border-radius: 0 0 5px 5px;
    }
    ::-webkit-scrollbar-track {
      background: #061526;
      border-radius: 0 0 4px 4px;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }
  }
  ${reset};
`

export default ({
  site,
  frontmatter = {},
  children,
  dark,
  headerBg,
  headerColor,
  noSubscribeForm,
  showHero = false,
  stickyHeader = false,
  showBlogHeader = false,
  showSidebar = true,
}) => {
  const {
    description: siteDescription,
    keywords: siteKeywords,
  } = site.siteMetadata

  const {
    keywords: frontmatterKeywords,
    description: frontmatterDescription,
  } = frontmatter

  const keywords = (frontmatterKeywords || siteKeywords).join(', ')
  const description = frontmatterDescription || siteDescription

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Global styles={globalStyles} />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: 100vh;
            background-color: ${theme.brand.primary};
          `}
        >
          <Helmet
            title={config.siteTitle}
            meta={[
              { name: 'description', content: description },
              { name: 'keywords', content: keywords },
            ]}
          >
            <html lang="en" />
            <noscript>This site runs best with JavaScript enabled.</noscript>
          </Helmet>
          <div>
            <div
              css={css`
                display: flex;
                flex-direction: 'column';
                flex-wrap: wrap;
                @media (min-width: 1224px) {
                  flex-direction: 'row';
                }
              `}
            >
              {showSidebar && <Sidebar />}
              <div
                css={css`
                  flex: 3;
                  overflow-x: hidden;
                  max-height: 100vh;
                  display: flex;
                  flex-direction: column;
                `}
              >
                <Header
                  siteTitle={site.siteMetadata.title}
                  bgColor={theme.brand.primary}
                  headerColor={theme.colors.white}
                />
                {showBlogHeader && <BlogHeader />}
                {showHero && <Hero />}
                <div
                  css={css`
                    padding-bottom: 0;
                    // background-color: #fff;
                    padding: 10px 24px;
                    max-width: 100vw;
                  `}
                >
                  <MDXProvider components={mdxComponents}>
                    {children}
                  </MDXProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
      author {
        name
      }
      keywords
    }
  }
`
