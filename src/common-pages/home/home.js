import React, { useEffect, useState, useContext } from "react";
import './home.css';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Link, checkboxClasses } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useAuth0 } from "@auth0/auth0-react";
import ImageCatagoryContext from "../../context/imageCatagory";
import { FaCartArrowDown, FaDollarSign, FaDownload, FaRupeeSign } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import Slider from "react-slick";
import banner1 from '../../images/banner-1.jpg';
import banner2 from '../../images/banner-2.jpg';
import banner3 from '../../images/banner-3.jpg';
import banner4 from '../../images/banner-4.jpg';
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  width: '75%',
  borderRadius : '10px',
  overflow : 'hidden',
  border : 'none',
  outline : 'none'
};

export default function Home(){
  const contex = useContext(ImageCatagoryContext)
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    currentid : 0,
    imagepath : ''
  });
  const [filterData, setFilterData] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const cartid = [];
  const buttonToggle = false;
  const tagImage = '../../images/pricing-tag.png';

  var gotocart = false;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    buttonToggle: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    fade: true,
  };

  const LoginCheck = (buttonName) =>{
    if(isAuthenticated){
      if(buttonName == 'download'){
        window.open(formData.imagepath)
      }
      if(buttonName == 'buynow'){
        if(cart.length == 0){
          dispatch(addToCart({id: itemData[formData.currentid].id, title : itemData[formData.currentid].title, price : itemData[formData.currentid].price, image : itemData[formData.currentid].img, des : itemData[formData.currentid].description}))
          toast.success("Successfully Added In Cart")
        }else{
          if(!cart.find(x => x.id == itemData[formData.currentid].id)){
            dispatch(addToCart({id: itemData[formData.currentid].id, title : itemData[formData.currentid].title, price : itemData[formData.currentid].price, image : itemData[formData.currentid].img, des : itemData[formData.currentid].description}))
            toast.success("Successfully Added In Cart")
          }else{
            toast.error("Already Added")
          }
          handleClose()
        }
      }
      if(buttonName == 'addtocart'){
        if(cart.length == 0){
          dispatch(addToCart({id: itemData[formData.currentid].id, title : itemData[formData.currentid].title, price : itemData[formData.currentid].price, image : itemData[formData.currentid].img, des : itemData[formData.currentid].description}))
          toast.success("Successfully Added In Cart")
        }else{
          if(!cart.find(x => x.id == itemData[formData.currentid].id)){
            dispatch(addToCart({id: itemData[formData.currentid].id, title : itemData[formData.currentid].title, price : itemData[formData.currentid].price, image : itemData[formData.currentid].img, des : itemData[formData.currentid].description}))
            toast.success("Successfully Added In Cart")
          }else{
            toast.error("Already Added")
          }
        }
        handleClose()
      }
    }else{
      loginWithRedirect()
    }
  }

  const handleSubmit = (id) => {
    handleOpen();
    const  currentid = id;
    setFormData({...formData, currentid: currentid})

    itemData.filter((data) => {
      if(data.id == currentid){
        setFormData({...formData, currentid: currentid, imagepath: data.img})
      }
    })
    
  }

  useEffect(() => {
   
  })


  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      id : 0,
      uploaded_date: new Date().getFullYear(),
      price : 'Free'
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      id : 1,
      uploaded_date: new Date().getFullYear(),
      price : 'Free'
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      id : 2,
      uploaded_date: new Date().getFullYear(),
      price : 'Free'
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      id : 3,
      uploaded_date: new Date().getFullYear(),
      price : 10
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      id : 4,
      uploaded_date: new Date().getFullYear(),
      price : 40
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      id : 5,
      uploaded_date: new Date().getFullYear(),
      price : 90
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      id : 6,
      uploaded_date: new Date().getFullYear(),
      price : 190
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      id : 7,
      uploaded_date: new Date().getFullYear(),
      price : 100
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      id : 8,
      uploaded_date: new Date().getFullYear(),
      price : 60
    },
  ];

  const homeSlider = [{
      img: banner1,
      title: 'Lorem Ipsum1',
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
      img: banner2,
      title: 'Lorem Ipsum2',
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    img: banner3,
    title: 'Lorem Ipsum3',
    description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    img: banner4,
    title: 'Lorem Ipsum4',
    description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
      img: 'https://images.unsplash.com/photo-1598124147095-16d7e62b8d01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Lorem Ipsum',
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  }]

  return(
    <div className="main">
      <Toaster />
      <Slider {...settings}>
        {homeSlider.map((item) => (
          // <a href="">
            <div className="image-slider">
              <img src={item.img} />
              <div className="image-overlay"></div>
              <Container className="slider-text">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
              </Container>
            </div>
          // </a>
        ))}
      </Slider>
      <Container>
        <h2>All Catagory</h2>
        <div className="image-list">  
          {itemData.map((item) => (
            <a onClick={() => handleSubmit(item.id)}>
              <div className="images">
                {item.price == 'Free' ?  '' : <FaRupeeSign  className="pricing-tag" />}
                <img className="image" src={item.img}></img>
                <div className="image-details">
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="image-model"
      >
        <Box sx={style}>
          <div className="model-content">
            <div className="model-image">
              {/* <span className="pricing-tag">{itemData[formData.currentid].price}</span> */}
              <img src={itemData[formData.currentid].img} ></img>
            </div>
            <div className="model-text">
              <span>{itemData[formData.currentid].uploaded_date}</span>
              <h2>{itemData[formData.currentid].title}</h2>
              <p>{itemData[formData.currentid].description}</p>
              <div className="model-button">
                {itemData[formData.currentid].price === 'Free' ? 
                  <button type="button" className="btn btn-success" target="_blank" onClick={() => LoginCheck('download')}><FaDownload size={20} />Download</button> 
                  :
                    <><button type="button" className="btn btn-success" onClick={() => LoginCheck('buynow')}>Buy Now ${itemData[formData.currentid].price}</button>
                    <button type="button" className="btn btn-warning" onClick={() =>  LoginCheck('addtocart')}><FaCartArrowDown size={20} /> Add to Cart</button></>
                }
              </div>
            </div>
            
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}
