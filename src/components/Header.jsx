import { Nav, Container } from 'react-bootstrap'

const Header = () => {
  // const date = new Date()
  return (
    <Nav className='bg-primary p-2 background'>
      <Container className='d-flex justify-content-between align-items-center'>
        <h3 className='fw-bold'>Habit Tracker App</h3>  
      </Container>
    </Nav>
  )
}

export default Header
