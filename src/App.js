import React, {useState,useEffect} from 'react';
import {Heading} from './components/Heading';
import {Loader} from './components/Loader';
import {UnsplashingImage} from './components/UnsplashingImage';
import axios from 'axios';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component';
import {AppBar,Tabs,Tab} from '@material-ui/core'

const GlobalStyle =createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;  
}
body{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
`;
const WrapperImage = styled.section`
max-width:70rem;
margin:4rem auto;
display:grid;
grid-gap:1em;
grid-template-columns:repeat(auto-fit, minmax(250px,1fr));
grid-auto-rows:300px;


`



function App() {
  const [images,setImages] = useState([]);
  const [currentTab,setCurrentTab] = useState(0);
  useEffect(()=>{
    fetchImages();
     },[])

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=12`)
    .then(res => setImages([...images, ...res.data]))
   
  }
  const changeTab = (event, value) => {
    setCurrentTab(value)
  }

  return (
    <div className="App">
    
     <AppBar style={{margintop:10,background:'#031f3a'}}>
     <Tabs value={currentTab} onChange={changeTab}>
        <Tab label="Images" id="home-tab" aria-controls="home-panel" />
      
      </Tabs>
    
     </AppBar>
<GlobalStyle/>

<InfiniteScroll
  dataLength ={images.length}
  next ={fetchImages}
  hasMore={true}
  loader={<Loader/>} >
<WrapperImage>
    {images.map(image => (
         <UnsplashingImage url={image.urls.thumb} key={image.id}/>
     ))}
</WrapperImage>

</InfiniteScroll>


 
    </div>
  );
}

export default App;
