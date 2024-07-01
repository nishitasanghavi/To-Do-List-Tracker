import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "25vh",
    width : "100%"
  }
  return (
    <footer className='bg-dark text-light text-center py-3' style={footerStyle}>
      <p>Copyright &copy; MyTodosList.com</p>
      </footer>
  )
}
