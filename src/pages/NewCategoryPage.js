import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { setAllCategoryName } from '../store/actions/categories';
import { setCategory, setGameQuestions } from '../store/actions/theGame';


// const images = [
//   {
//     url: 'https://image.shutterstock.com/image-illustration/examine-study-instructions-showed-magnify-260nw-1888576435.jpg',
//     title: 'instructions',
//     width: '30%',
//     link: '/gameInstructins',

//   },
//   {
//     url: 'https://media.istockphoto.com/id/665037818/photo/start-line-on-the-highway.webp?s=612x612&w=is&k=20&c=mwRs2hPQcRwGmm-cbqchQLcwSit_qnup1_st8rsh2js=',
//     title: 'build a game',
//     width: '30%',
//     link:'/gameCategory'
//   },
//   {
//     url: 'https://static5.depositphotos.com/1001094/465/i/950/depositphotos_4654925-stock-photo-man-entering-a-dark-room.jpg',
//     title: 'join a game',
//     width: '30%',
//     link:'/gameLogin'
//   },
//   {
//     url: 'https://media.istockphoto.com/photos/hand-inserting-suggestion-into-suggestion-box-picture-id496792842',
//     title: 'suggestions',
//     width: '30%',
//     link: "/gameSuggestion",
//   },
//   {
//     url: 'https://assets.entrepreneur.com/content/3x2/2000/20180128135931-shutterstock-466715522.jpeg?auto=webp&quality=95&crop=16:9&width=675',
//     title: 'admin add Question',
//     width: '30%',
//     link: "/gameAddQuestion",
//   },
//   {
//     url: 'https://th.bing.com/th/id/R.35a16aa6743a594d9a13883d71ad32cd?rik=r65LNwx8FIpelw&riu=http%3a%2f%2fwww.sagaflor.de%2ffileadmin%2f_processed_%2fcsm_final_Category_Management_Website_shutterstock_290636426_86304a41f0.jpg&ehk=OM3ysZk1v0t%2bSp8H8tCyKRa2V%2fxuu3iixtWMXPZFHds%3d&risl=&pid=ImgRaw&r=0',
//     title: 'admin add Category',
//     width: '30%',
//     link: "/gameAddCategory",
//   },
// ];
const h=window.innerHeight;
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  let newImages=[]
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const allCategory = useSelector((state) => state.categoriesReducer.categories)
  allCategory?.map(category => {
    let catego={
      url: category.img,
      title: category.categoryName,
      width: '30%',
      categoryObject:category,
    }
    newImages.push(catego)
  });
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {newImages.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
             height:h/8,
          }}
          onClick={() =>{
            dispatch(setCategory(image.categoryObject))
            dispatch(setGameQuestions(image.title))
             navigate("/gameNewQuestion")
             }
            }
          // href={image.link}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
