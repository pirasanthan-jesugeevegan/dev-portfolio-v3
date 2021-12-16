/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A } from 'theme-ui';

export function Link({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {children ? children : label}
    </A>
  );
}
