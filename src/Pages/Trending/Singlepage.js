
//  import React, { useState } from 'react';
//  import "./Singlepage.css";
//  import Badge from '@mui/material/Badge';
//  import Dialog from '@mui/material/Dialog';
//  import DialogTitle from '@mui/material/DialogTitle';
//  import DialogContent from '@mui/material/DialogContent';
//  import { img_300, unavailable } from '../../Config/Config';

//  const Singlepage = ({ voteaverage, id, poster, title, date, media_type }) => {
//    const [isModalOpen, setIsModalOpen] = useState(false);

//    const handleOpenModal = () => {
//      setIsModalOpen(true);
//    };

//    const handleCloseModal = () => {
//      setIsModalOpen(false);
//    };

//    return (
//      <div className='content-container' onClick={handleOpenModal}>
//        <div className='badge-container'>
//          <Badge badgeContent={voteaverage} color={voteaverage > 7 ? "secondary" : "primary"}></Badge>
//        </div>
//        <img className='poster' src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : unavailable} alt={title} />

//        {/* <Dialog open={isModalOpen} onClose={handleCloseModal}>
//          <DialogTitle>{title}</DialogTitle>
//          <DialogContent> */}
           
//            <div className='details'>
//              <span className='subs'>{media_type === "tv" ? "TV Series" : "Movie"}</span>
//              <span className='subs'> {date}</span>
//              {/* Additional details can be added here */}
//            </div>
//          {/* </DialogContent> */}
//        {/* </Dialog> */}
//      </div>
//    );
//  };

//  export default Singlepage;

// import React, { useState } from 'react';
// import "./Singlepage.css";
// import Badge from '@mui/material/Badge';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import { img_300, unavailable } from '../../Config/Config';

// const Singlepage = ({ voteaverage, id, poster, title, date, media_type }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     console.log("pop")
//     setIsModalOpen(false);
//   };

//   return (
//     <div className='content-container' onClick={handleOpenModal}>
//       <div className='badge-container'>
//         <Badge badgeContent={voteaverage} color={voteaverage > 7 ? "secondary" : "primary"}></Badge>
//       </div>
//       <img className='poster' src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : unavailable} alt={title} />

//       <Dialog open={isModalOpen} onClose={handleCloseModal}>
//         <DialogTitle>{title}</DialogTitle>
//         <DialogContent>
//           <img className='modalPoster' src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : unavailable} alt={title} />
//           <div className='details'>
//             <span className='subs'>{media_type === "tv" ? "TV Series" : "Movie"}</span>
//             <span className='subs'> {date}</span>
//             {/* Additional details can be added here */}
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default Singlepage;

// import React, { useState } from 'react';
// import "./Singlepage.css";
// import Badge from '@mui/material/Badge';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import axios from 'axios';
// import DialogContent from '@mui/material/DialogContent';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import { useEffect } from 'react';
// import { img_300, unavailable } from '../../Config/Config';

// const Singlepage = ({ voteaverage, id, poster, title, date, media_type , trailerId }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [video, setVideo] = useState();

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };
//   const fetchVideo = async () => {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=9849511ac6cdd6e184258727e15595ec&language=en-US`
//     );

//     setVideo(data.results[0]?.key);
//   };


//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   useEffect(() => {
    
//     fetchVideo();
    
//   }, []);
//   const handleWatchTrailer = () => {
//     // Assuming you have a specific YouTube video ID, replace 'VIDEO_ID' with the actual video ID
  
//     const youtubeUrl = `https://www.youtube.com/watch?v=${video}`;

//     // Open the YouTube video in a new tab
//     window.open(youtubeUrl, '_blank');
//   };

//   return (
//     <div
//       className='content-container'
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className='badge-container'>
//         <Badge badgeContent={voteaverage} color={voteaverage > 7 ? "secondary" : "primary"}></Badge>
//       </div>
//       <img className='poster' src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : unavailable} alt={title} />

//       {isHovered && (
//         <div className='watch-trailer-button' onClick={handleWatchTrailer}>
//           Watch 
//         </div>
//       )}

//       <Dialog open={isModalOpen} onClose={handleCloseModal}>
//         <DialogTitle>{title}</DialogTitle>
//         <DialogContent>
//           <img className='modalPoster' src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : unavailable} alt={title} />
//           <div className='details'>
//             <span className='subs'>{media_type === "tv" ? "TV Series" : "Movie"}</span>
//             <span className='subs'> {date}</span>
//             {/* Additional details can be added here */}
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default Singlepage;




// Singlepage.js
// Add this line at the top of your Singlepage.js file
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState, useEffect } from 'react';
import './Singlepage.css';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import DialogContent from '@mui/material/DialogContent';

import { img_300, unavailable } from '../../Config/Config';

const Singlepage = ({ voteaverage, id, poster, title, date, media_type  }) => {
  
  const [isHovered, setIsHovered] = useState(false);
  const [video, setVideo] = useState();

  

    // const fetchVideo = async () => {
    //   const { data } = await axios.get(
    //     `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=9849511ac6cdd6e184258727e15595ec&language=en-US`
    //   );

    //   setVideo(data.results[0]?.key);
    //   console.log(data)
    // };
    const fetchVideo = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
    
        setVideo(data.results[0]?.key);
        console.log(data);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };
    
  
  
  



    const handleWatchTrailer = () => {
      if (video) {
        const youtubeUrl = `https://www.youtube.com/watch?v=${video}`;
        window.open(youtubeUrl, '_blank');
      } else {
        console.warn('No video available');
        toast.warn('No video available', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000, // Adjust the duration as needed
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    };
    
  
  useEffect(() => {
    fetchVideo();
  },  [id, media_type]);

  return (
    <div  className={`content-container ${isHovered ? 'hovered' : ''}`}onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className='badge-container'>
        <Badge badgeContent={voteaverage} color={voteaverage > 7 ? 'secondary' : 'primary'}></Badge>
      </div>
      <img className='poster' src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : unavailable} alt={title} />

      {isHovered && (
        <div className='hovered-content'>
          <div className='title'>{title}</div>
          <div className='details-container'>
            <div className='date'>{date}</div>
            <div className='genre'>{/* Add genre information here */}</div>
          </div>
          <div className='watch-trailer-button' onClick={handleWatchTrailer}>
            Watch
          </div>
        </div>
      )}

      <Dialog >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <img className='modalPoster' src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : unavailable} alt={title} />
          <div className='details'>
            <span className='subs'>{media_type === 'tv' ? 'TV Series' : 'Movie'}</span>
            <span className='subs'> {date}</span>
            {/* Additional details can be added here */}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Singlepage;
