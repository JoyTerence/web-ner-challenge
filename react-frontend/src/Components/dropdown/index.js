import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Dropdown = (props) => {
  return (
    <Menu
      menuClassName="menu"
      menuButton={<MenuButton>{props.title}</MenuButton>}
      onItemClick={(e) => props.onItemClick(e)}
    >
      {props.items.map((item) => {
        return (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default Dropdown;
