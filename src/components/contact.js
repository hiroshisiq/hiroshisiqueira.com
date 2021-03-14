import React from "react"
import PropTypes from "prop-types"
import getIcon from "../utils/get-icon"

const Contact = ( { contacts } ) => {
  return (
    <div>
      {contacts.map( contact => {
        return (
          <a href={contact.url} target="_blank" rel="noreferrer">
            <img
              key={contact.icon}
              src={getIcon(contact.icon)}
              alt={contact.icon}
            />
          </a>
          )
      })}
    </div>
  )
}

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Contact
