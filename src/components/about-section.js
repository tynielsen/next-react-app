import styles from '@/common/styles/about.scss';
import Image from 'next/image';

import javascriptIcon from '@/common/images/icon-javascript.svg';
import html5Icon from '@/common/images/icon-html5.svg';
import css3Icon from '@/common/images/icon-css3.svg';
import sassIcon from '@/common/images/icon-sass.svg';
import jsonIcon from '@/common/images/icon-json.svg';
import gitIcon from '@/common/images/icon-git.svg';
import githubIcon from '@/common/images/icon-github.svg';
import jiraIcon from '@/common/images/icon-jira.svg';
import typescriptIcon from '@/common/images/icon-typescript.svg';
import jqueryIcon from '@/common/images/icon-jquery.svg';
import adobeIcon from '@/common/images/icon-adobe.svg';
import atlassianIcon from '@/common/images/icon-atlassian.svg';
import confluenceIcon from '@/common/images/icon-confluence.svg';
import reactIcon from '@/common/images/icon-react.svg';
import angularIcon from '@/common/images/icon-angular.svg';
import eslintIcon from '@/common/images/icon-eslint.svg';
import wordpressIcon from '@/common/images/icon-wordpress.svg';
import jestIcon from '@/common/images/icon-jest.svg';
import materialuiIcon from '@/common/images/icon-material-ui.svg';
import nodeIcon from '@/common/images/icon-nodejs.svg';
import npmIcon from '@/common/images/icon-npm.svg';


const About = () => {
  return(
    <>
      <h2 id="about">About Black Rabbit Dev's Frontend Forge</h2>

      <section className="about-section">
        <h3>Web Development Is In Our Genetic Code</h3>
        <div className="card">
          <p>You have just stumbled across a vast wealth of knowledge and experience working with The World Wide Web. The Frontend Forge are comprised of dedicated and experienced Web Architects, Developers, DevOps Engineers, and IT Professionals with over a decade of experience.</p>
          <p>Our true passion lies in creating bespoke web apps (websites) and single page applications (SPA) beautiful and made specifically to fit your needs. This is accomplished by utilizing the latest trends in technology ensuring your content is optimized for users, providing your users with the best experience possible online. We take great pride in delivering high-quality solutions to share your content in this digital world we live in.</p>
          <p>All of The Frontend Forge's work undergoes a rigorous Quality Assurance and testing process safeguarding it from issues with privacy, and confirming the user interface (UI) is intuitive, engaging and bug-free. That's all due to A) testing across all modern browsers and devices before deploying anything, B) shrinking the codebase as much as possible resulting in much faster load times, and C) dedication to the latest security best practices. Just in case, our support team is available 24/7.</p>
          <p>We're based out of The United States, Utah, but our clientele spans across the globe and our setup is fully remote. The Frontend Forge is accessible from anywhere, anytime.</p>
        </div>

        <h3>Tech-Stack</h3>
        <div className="card">
          <h4>A few computer programming languages, apps, libraries, frameworks, and technologies we are familiar with and can recommend.</h4>

          <div className="tech-stack-slider">
            <ul>
              <li>
                <Image
                  src={javascriptIcon}
                  alt="JavaScript"
                  title="JavaScript"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={html5Icon}
                  alt="HTML5"
                  title="HTML5"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={css3Icon}
                  alt="CSS 3"
                  title="CSS3"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={sassIcon}
                  alt="Sass"
                  title="Sass CSS"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={jsonIcon}
                  alt="JSON"
                  title="JSON"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={gitIcon}
                  alt="git"
                  title="git"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={githubIcon}
                  alt="GitHub"
                  title="GitHub"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={jiraIcon}
                  alt="Jira"
                  title="Jira"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={typescriptIcon}
                  alt="TypeScript"
                  title="TypeScript"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={jqueryIcon}
                  alt="jQuery"
                  title="jQuery"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={adobeIcon}
                  alt="Adobe"
                  title="Adobe"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={atlassianIcon}
                  alt="Atlassian"
                  title="Atlassian"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={confluenceIcon}
                  alt="Confluence"
                  title="Confluence"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={reactIcon}
                  alt="React JS"
                  title="React JS"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={angularIcon}
                  alt="Angular"
                  title="Angular"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={eslintIcon}
                  alt="ESLint"
                  title="ESLint"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={wordpressIcon}
                  alt="WordPress"
                  title="WordPress"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={jestIcon}
                  alt="Jest"
                  title="Jest"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={materialuiIcon}
                  alt="Material UI"
                  title="Material UI"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src={nodeIcon}
                  alt="Node JS"
                  title="Node JS"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="./common/images/icon-npm.svg"
                  alt="NPM"
                  title="NPM"
                  width="250"
                  height="4"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              {/* <li>
                <Image
                  src="/images/icon-php.svg"
                  alt="PHP"
                  title="PHP"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-prettier.svg"
                  alt="Prettier"
                  title="Prettier"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-redux.svg"
                  alt="Redux"
                  title="Redux"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-grunt.svg"
                  alt="Grunt"
                  title="Grunt"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-vercel.svg"
                  alt="Vercel"
                  title="Vercel"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-bitbucket.svg"
                  alt="BitBucket"
                  title="BitBucket"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-less.svg"
                  alt="Less CSS"
                  title="Less CSS"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-nextjs.svg"
                  alt="Next JS"
                  title="Next JS"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-nx.svg"
                  alt="NX"
                  title="NX"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-planet-scale.svg"
                  alt="Planet Scale"
                  title="Planet Scale"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-prisma.svg"
                  alt="Prisma"
                  title="Prisma"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-vuejs.svg"
                  alt="Vue JS"
                  title="Vue JS"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-vscode.svg"
                  alt="Visual Studio Code"
                  title="Visual Studio(VS) Code"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-sublime-text.svg"
                  alt="Sublime Text"
                  title="Sublime Text"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-bootstrap.svg"
                  alt="Bootstrap"
                  title="Bootstrap"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-tailwind-css.svg"
                  alt="Tailwind CSS"
                  title="Tailwind CSS"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li>
              <li>
                <Image
                  src="/images/icon-t3.svg"
                  alt="T3-Stack - TypeScript, tRPC, Tailwind, Next.js"
                  title="T3-Stack: TypeScript, Tailwind, tRPC, Next.js"
                  style={{
                    width: 'auto',
                    height: '4rem',
                  }}
                />
              </li> */}
            </ul>
          </div>

          <p>To summarize, the créme de la créme is HTML5, Sass CSS, and JavaScript. It's everything a growing web presence needs (and it's easy to maintain)! However, if content needs to be updated regularly, perhaps you have a blog, we recommend using a Content Management System (CMS) like WordPress. In using a CMS we can set your website up so that you can quickly and easily create, read, update/edit, and delete content. That gives you complete access and control to everything.</p>
          <p>We're knowledgeable, experienced, and flexible. Most importantly we'll listen and help you achieve your goals. Then, we can also make recommendations that best suits your needs. If you have an existing project to finish or update, let's finish <em>YOUR</em> brand the way <em>YOU</em> envision it!</p>
        </div>
      </section>
    </>
  );
}

export default About;
