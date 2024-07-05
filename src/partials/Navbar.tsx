import { Logo, NavbarTwoColumns, Section } from 'astro-boilerplate-components';
import { FaCode } from 'react-icons/fa';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={<FaCode className="mr-4 h-8 w-8 text-white" />}
          name="  Pablo's Portfolio"
        />
      </a>

      {/* <NavMenu>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="/">GitHub</NavMenuItem>
        <NavMenuItem href="/">Twitter</NavMenuItem>
      </NavMenu> */}
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
