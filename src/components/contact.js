import React from "react"
import PropTypes from "prop-types"
import getIcon from "../utils/get-icon"

const Contact = ( { contacts } ) => {
  return (
    <div>
      {contacts.map( contact => {
        return (
          <div key={contact.icon}>
            <a href={contact.url} target="_blank" rel="noreferrer">
              <img src={getIcon(contact.icon)} alt={contact.icon} />
            </a>
          </div>
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
