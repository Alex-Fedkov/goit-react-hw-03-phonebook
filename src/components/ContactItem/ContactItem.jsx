import PropTypes from "prop-types";
import { 
  Item,
  List,
  Click
} from "./styles.jsx";

const ContactItem = ({ name, number, onDelete}) => {
  return (
    <li>
    <Item>
      <List>{name}:</List>
      <List>{number}</List>
      <Click onClick={onDelete}>delete</Click>
    </Item>
    </li>
    
  )
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default ContactItem;