import React,{useEffect,useState} from 'react'
import './Recommended.css'
import { API_KEY,value_converter } from '../../data.js'
import { Link } from 'react-router-dom'


const Recommended = ({categoryId}) => {
 


        const [apiData,setApiData] = useState([]);
        const fetchData = async () =>{
            const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY} `;
            await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items))
        }
        useEffect(()=>{
            fetchData();
        },[])
        
        
          return (
            <div className="recommended">
                {apiData.map((item,index)=>{
                    return(
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list" >
                    <img src={item.snippet.thumbnails.medium.url} alt='' />  
                    <div className="vid-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle }</p>
                        <p>{value_converter(item.statistics.viewCount)} Views</p>
                        </div>  
                        </Link>  
                   
                   
                    )
                })}
                
                   
            </div>
    
  )
}

export default Recommended

// {/* <div className='recommended'>
// <div className="side-video-list">
//     <img src={thumbnail1} alt="" />
//     <div className="vid-info">
//      <h4>Best channel that help you to be web devoloper</h4>
//      <p>greatstack</p>
//      <p>199k views</p>
//     </div>
// </div>
// <div className="side-video-list">
//     <img src={thumbnail2} alt="" />
//     <div className="vid-info">
//      <h4>Best channel that help you to be web devoloper</h4>
//      <p>greatstack</p>
//      <p>199k views</p>
//     </div>
// </div>
// <div className="side-video-list">
//     <img src={thumbnail3} alt="" />
//     <div className="vid-info">
//      <h4>Best channel that help you to be web devoloper</h4>
//      <p>greatstack</p>
//      <p>199k views</p>
//     </div>
// </div>
// <div className="side-video-list">
//     <img src={thumbnail4} alt="" />
//     <div className="vid-info">
//      <h4>Best channel that help you to be web devoloper</h4>
//      <p>greatstack</p>
//      <p>199k views</p>
//     </div>
// </div>
// <div className="side-video-list">
//     <img src={thumbnail5} alt="" />
//     <div className="vid-info">
//      <h4>Best channel that help you to be web devoloper</h4>
//      <p>greatstack</p>
//      <p>199k views</p>
//     </div>
// </div>
// <div className="side-video-list">
//     <img src={thumbnail6} alt="" />
//     <div className="vid-info">
//      <h4>Best channel that help you to be web devoloper</h4>
//      <p>greatstack</p>
//      <p>199k views</p>
//     </div>
// </div>
// <div className="side-video-list">
//     <img src={thumbnail7} alt="" />
//     <div className="vid-info">
//      <h4>Best channel that help you to be web devoloper</h4>
//      <p>greatstack</p>
//      <p>199k views</p>
//     </div>
// </div>
// <div className="side-video-list">
//     <img src={thumbnail8} alt="" />
//     <div className="vid-info">
//      <h4>Best channel that help you to be web devoloper</h4>
//      <p>greatstack</p>
//      <p>199k views</p>
//     </div>
// </div>

// </div> */}
