import styles from '@/common/styles/resources.css';

const ResourcesSection = () => {
  return (
    <>
      <h2 id="resources">resources</h2>

      <section className="resources-sect">
        <div className="card">
          <p>Links to useful things: "How-to's", "Cheat Sheets", Documents, Helpers, and Generators. The best we've happened upon.</p>

          <ul>
            <li><a href="https://untools.co/" target="_blank">UnTools</a></li>
            <li><a href="http://fillerama.io/" target="_blank">Fillerama: A welcome and fun substitute for placeholder content, aka "Lorem Ipsum".</a></li>
            <li><a href="https://www.cssmatic.com/" target="_blank">CSSmatic: CSS Tools</a></li>
            <li><a href="https://html-css-js.com/" target="_blank">HTML-CSS-JS: Tips, tricks, tutorials…</a></li>
            <li><a href="https://www.symbolcopy.com/" target="_blank">Symbols galore!</a></li>
            <li><a href="https://placekitten.com/" target="_blank">Image placeholders…of kittens.</a></li>
            <li><a href="https://makepixelart.com/" target="_blank">Pixel Art Editor</a></li>
          </ul>

          <p>Online Education: Tutorials, Books, Courses, etc. Did I mention these are free? There are links to MIT courses, Harvard courses, and much more. The internet is overflowing with free education!</p>
          <ul>
            <li><a href="https://home.edx.org/" target="_blank">EDX.org</a></li>
            <li><a href="https://www.coursera.org/" target="_blank">Coursera</a></li>
            <li><a href="https://www.freecodecamp.org/" target="_blank">Free Code Camp</a></li>
            <li><a href="https://www.theodinproject.com/" target="_blank">The Odin Project</a></li>
            <li><a href="#" target="_blank"></a></li>
            <li><a href="#" target="_blank"></a></li>
            <li><a href="#" target="_blank"></a></li>
            <li><a href="#" target="_blank"></a></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default ResourcesSection;
