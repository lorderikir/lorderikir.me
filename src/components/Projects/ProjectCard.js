import React from 'react'
import Remark from 'react-markdown'
import css from '@emotion/css'
import { lighten } from 'polished'

import theme from '../../../config/theme'
import { GitHub, ExternalLinkIcon } from '../Social'

const ProjectCard = ({ title, projectDescription, githubUrl, url }) => {
  return (
    <>
      <div
        css={css`
          flex: 1;
          max-width: 33%;
          display: flex;
          min-width: 280px;
        `}
      >
        <div
          css={css`
            flex: 1;
            padding: 5px 15px;
            margin: 5px;

            opacity: 0.9;
            z-index: 3;
            background-color: ${lighten(0.05, theme.brand.primary)};
            :hover {
              background-color: ${lighten(0.1, theme.brand.primary)};
            }
          `}
        >
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              align-items: center;
            `}
          >
            <div
              css={css`
                flex: 1;
              `}
            >
              <h3
                css={css`
                  color: white;
                  margin: 10px;
                `}
              >
                {title}
              </h3>
            </div>
            <div>
              {githubUrl && (
                <GitHub
                  color={lighten(0.5, theme.brand.primary)}
                  url={githubUrl}
                />
              )}
              {url && (
                <ExternalLinkIcon
                  color={lighten(0.5, theme.brand.primary)}
                  url={url}
                />
              )}
            </div>
          </div>
          <Remark
            source={projectDescription}
            css={css`
              font-size: 0.8em;
              margin: 10px;
            `}
          />
        </div>
      </div>
    </>
  )
}

export default ProjectCard
