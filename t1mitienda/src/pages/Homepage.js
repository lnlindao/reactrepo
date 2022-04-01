import ItemListContainer from '../components/Containers/ItemListContainer';
import Container from '@mui/material/Container';

function Homepage() {
  return (
    <>
      <img src='/images/banner/1.jpg'/>
      <Container maxWidth="lg">
        <ItemListContainer/>
      </Container>
    </>
    
    
  );
}

export default Homepage;
