/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const {baseUrl} = this.props.config;
    const {docsUrl} = this.props.config;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    const {config} = this.props;

    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href="https://www.npmjs.com/package/delfos" className="nav-home">
            {config.footerIcon && (
              <img
                src={config.baseUrl + config.footerIcon}
                alt={config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <a href="https://github.com/">GitHub</a>
            <a
              className="github-button"
              href={config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
        </section>
        {/* <section className="copyright">{config.copyright}</section> */}
      </footer>
    );
  }
}



module.exports = Footer;
