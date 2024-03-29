import React, { useEffect, useRef, useState } from "react";
// import HTMLFlipBook from "react-pageflip";
import { Grid, Switch, Slider } from "@mui/material";
import "./Reader.css";
import demo from "../../static/videos/demo.mkv";
import mahabharat from "../../static/images/mahabhart.jpg";
import Navbar from "../Navbar";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import FlipPage from "react-flip-page";

// const FrontPageCover = React.forwardRef((props, ref) => {
//   return (
//     <div className='page front-page-cover' ref={ref} data-density='hard'>
//       <div className='page-content'>
//         <h2>{props.children}</h2>
//       </div>
//     </div>
//   );
// });

// const BackPageCover = React.forwardRef((props, ref) => {
//   return (
//     <div className='page back-page-cover' ref={ref} data-density='hard'>
//       <div className='page-content'>
//         <h2>{props.children}</h2>
//       </div>
//     </div>
//   );
// });

// const Page = React.forwardRef((props, ref) => {
//   return (
//     <div className='page' ref={ref}>
//       <div className='page-content'>
//         <h2 className='page-header'>Page header - {props.number}</h2>
//         <div className='page-image'></div>
//         <div className='page-text'>{props.children}</div>
//         <div className='page-footer'>{props.number}</div>
//       </div>
//     </div>
//   );
// });

function Reader({data}) {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState([]);
  const [audioUrl, setAudioUrl] = useState('');
  const [result, setResult] = useState([]);
  
  console.log(id);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        
        let temp = data.filter(item => item.id==id)
        console.log(temp[0].imgcontent)
        setResult(temp[0].imgcontent)
        setAudioUrl(`http://localhost:8000${temp[0].audio}`);
        console.log(result)
        // console.log(result)
        // console.log(data)
      } catch {}
    };
    getProduct();
  }, [id]);
  const [currentPage, setCurrentPage] = useState(0);

  const flipbookConfig = {
    orientation: "horizontal",
    width: 600,
    height: 500,
    startPage: currentPage,
    flipOnTouch: true,
    pageBackground: "#fff",
    uncutPages: false,
    animationDuration: 400,
    onPageUpdate: (e) => {
      setCurrentPage(e.data.activePageIndex);
      console.log(currentPage);
    },
    children: [
      result.map((image, index) => (
        <div key={index} style={{ height: '400px', width: '600px'}}>
                    <img src={`http://localhost:8000${image}`} style={{height: '400px', width: '600px'}} alt="" />
        </div>
      ))
    ],
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const book = useRef();
  // const [value, setValue] = useState(0);
  // const getHeading = (value) => `Chapter ${value}`;
  // const getLabelSum = (value) =>
  //   `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi vel alias soluta, voluptatibus`;

  return (
    <div className='reader'>
      <Navbar />
      <div className='reader-container'>
        <Grid container columns={12} spacing={4}>
          <Grid item lg={8} md={12} sm={12}>
            <div className='reader-grid'>
              <FlipPage {...flipbookConfig} />
              {/* <HTMLFlipBook
                width={350}
                height={500}
                maxShadowOpacity={0.5}
                ref={book}
                showCover={true}
                mobileScrollSupport={true}
                className='demo-book'
              >
                <FrontPageCover className='cover'></FrontPageCover>
                <Page number={1}>Page 1</Page>
                <Page number={2}>Page 2</Page>
                <Page number={3}>Page 3</Page>
                <Page number={4}>Page 4</Page>
                <Page number={5}>Page 5</Page>
                <Page number={6}>Page 6</Page>
                <Page number={7}>Page 7</Page>
                <Page number={8}>Page 8</Page>
                <Page number={9}>Page 9</Page>
                <Page number={10}>Page 10</Page>
                <Page number={11}>Page 11</Page>
                <Page number={12}>Page 12</Page>
                <Page number={13}>Page 13</Page>
                <Page number={14}>Page 14</Page>
                <Page number={15}>Page 15</Page>
                <Page number={16}>Page 16</Page>
                <BackPageCover></BackPageCover>
              </HTMLFlipBook> */}

              <div className='tracker'>
                {/* <Slider
                  valueLabelDisplay='on'
                  valueLabelFormat={(value) => {
                    return (
                      <div>
                        <div className='labelHead'>{getHeading(value)}</div>
                        <div className='labelSummary'>
                          <p>{getLabelSum(value)}</p>
                        </div>
                      </div>
                    );
                  }}
                  step={1}
                  marks
                  min={0}
                  max={15}
                  value={value}
                  onChange={(event) => {
                    setValue(event.target.value);
                    book.current.pageFlip().turnToPage(event.target.value);
                  }}
                /> */}
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={12} sm={12}>
            <div className='reader-sidebar'>
              <div className='audio'>
                <h1>Audiobook mode</h1>
                <br/>
                {audioUrl && <audio src={audioUrl} controls />}

              </div>
              <div className='video'>
                <video src={demo} poster={mahabharat} controls></video>
              </div>
              <div className='reader-summary'>
                <h1>Summary</h1>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi tempore repellendus at beatae repellat, sint eos
                    asperiores veritatis illo soluta non, magnam unde doloribus
                    fuga provident rerum. Adipisci, ea id.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sapiente similique, tempore inventore nemo nihil itaque fuga
                    cum, quia eaque voluptate illo asperiores esse. Facere
                    consequatur magnam laudantium atque voluptatem quis?
                  </li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium perspiciatis quo similique tempora, dolore
                    eligendi ipsa cupiditate doloribus? Dolorem quidem ratione
                    sequi reiciendis eligendi sunt, saepe nulla. Perspiciatis,
                    et quis?
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Reader;
