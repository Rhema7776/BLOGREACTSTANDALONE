import React from 'react'
import {NavLink} from 'react-router-dom'
import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react'

const Navbar = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='li' header>
          Rhema's Markdown Blog
        </Menu.Item>
        <NavLink to='/'><Menu.Item as='a'>Posts</Menu.Item></NavLink> 
        <NavLink to='/create'><Menu.Item as='a'>Create a Post</Menu.Item></NavLink> 
    
        {/* <NavLink to={`/posts/${post.slug}`}>
                <Item.Header as='h3'>{post.title}</Item.Header>
                </NavLink>        */}
        
      </Container>
    </Menu>

    

   
  </div>
)

export default Navbar