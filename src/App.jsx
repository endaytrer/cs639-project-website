import './App.css';
import 'katex/dist/katex.min.css';
import img1before from "./assets/headerImages/original.jpg"
import img1after from "./assets/headerImages/level_3.jpg"
import img2before from "./assets/headerImages/street.jpg"
import img2after from "./assets/headerImages/street_after.jpg"
import img3before from "./assets/headerImages/crowd.jpg"
import img3after from "./assets/headerImages/crowd1.jpg"

import backgroundIcon from "./assets/icons/background.svg"
import goalIcon from "./assets/icons/goal.svg"
import currentIcon from "./assets/icons/current.svg"
import techIcon from "./assets/icons/tech.svg"
import problemIcon from "./assets/icons/problem.svg"
import futureIcon from "./assets/icons/future.svg"
import contactIcon from "./assets/icons/contact.svg"
import githubIcon from "./assets/icons/github-mark.svg"
import refIcon from "./assets/icons/ref.svg"

import blurDegImg from "./assets/mainImages/blur-deg.jpg"
import introImg from "./assets/mainImages/intro.jpg"
import v5Img from "./assets/mainImages/YOLOv5.png"
import diffObjImg from "./assets/mainImages/reult_diff_obj.png"
import v5faceImg from "./assets/mainImages/YOLOv5Face.png"
import originalImg from "./assets/mainImages/original.jpg"
import resultImg from "./assets/mainImages/Results.jpg"
import large1Img from "./assets/mainImages/large_group_1.jpg"
import large2Img from "./assets/mainImages/large_group_2.jpg"
import licenseImg from "./assets/mainImages/license.jpg"
import bentley1Img from "./assets/mainImages/Bentley1.jpg"
import bentley2Img from "./assets/mainImages/Bentley2.jpg"
import cars1Img from "./assets/mainImages/cars1.jpg"
import cars2Img from "./assets/mainImages/cars2.jpg"
import modelImg from "./assets/mainImages/diagram.svg"
import resultVid from "./assets/mainImages/Greece.webm"

import { useState } from 'react';
import { IconLink } from './IconLink';
import { Contact } from './Contact';
import { BlockMath } from 'react-katex';
import { CaptionGenerator } from './CaptionImg';
import { Citation } from './Citation';

const images = [[img1before, img1after], [img2before, img2after], [cars1Img, cars2Img], [img3before, img3after]]


function App() {
  const sliderWidth = 8;
  const cg = new CaptionGenerator();
  const ct = new Citation();
  const [compareWidth, setCompareWidth] = useState(0.5);
  const [isSliding, setIsSliding] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const startSetWidth = (e) => {
    e.preventDefault();
    setIsSliding(true);
  };
  const endSetWidth = (e) => {
    e.preventDefault();
    setIsSliding(false);
  };
  const setWidth = (e) => {
    if (!isSliding) return;
    e.preventDefault();
    setCompareWidth(e.pageX / document.body.offsetWidth);
  }
  return (
    <div className="App bg-gray-900">
      <div className='header relative w-full flex flex-col justify-end'>
        <div className="top-img absolute top-0 h-full w-full select-none" onMouseMove={setWidth} onMouseUp={endSetWidth}>
          <div className="compare-img before-img absolute bg-left-top h-full bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${images[imgIndex][0]})`, width: `calc(${(compareWidth * 100)}% - ${sliderWidth / 2}px)`}}>
            <div className="absolute mx-4 top-4 px-3 min-w-fit py-1 rounded-2xl z-50 text-base uppercase font-semibold text-gray-500 bg-white bg-opacity-60 drop-shadow-lg">
              <select className="mr-2" value={imgIndex} onChange={(e) => setImgIndex(e.target.value)}>
                <option value="0">Group Photo</option>
                <option value="1">People and Car</option>
                <option value="2">Traffic</option>
                <option value="3">Crowds</option>
              </select><div>Before</div></div>
          </div>
          <div className="compare-slider absolute h-full cursor-ew-resize bg-slate-200 top-0 z-20 drop-shadow-lg flex flex-col justify-center items-center" style={{width: `${sliderWidth}px`, backgroundImage: "linear-gradient(transparent, rgb(17, 24, 39))", left: `calc(${(compareWidth * 100)}% - ${sliderWidth / 2}px)`}} onMouseDown={startSetWidth} onMouseUp={endSetWidth}></div>
          <div className="compare-img absolute bg-cover bg-right-top h-full text-right bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${images[imgIndex][1]})`, left: `calc(${(compareWidth * 100)}% + ${sliderWidth / 2}px)`, width: `calc(${((1 - compareWidth) * 100)}% - ${sliderWidth / 2}px)`}}>
            <div className="absolute mx-4 top-4 right-0 px-3 py-1 rounded-2xl z-50 text-base uppercase font-semibold text-green-600 bg-white bg-opacity-60 drop-shadow-lg">After</div>
          </div>
          <div className={`mask absolute z-10 w-full h-full ${isSliding && "transparent"}`} style={{backgroundImage: `linear-gradient(transparent, rgb(17, 24, 39))`}}></div>
        </div>
        <div className={`title relative bottom-0 h-48 sm:h-2/5 w-full z-20 flex flex-col px-4 lg:px-24 xl:px-48  ${isSliding && "transparent"}`} onMouseMove={setWidth} onMouseUp={endSetWidth}>
          <div className="max-w-fit self-center">
            <h1 className="text-4xl md:text-5xl text-white my-5"><span className="border-b-4 border-blue-600">Photo and Video <b>Anonymization</b></span></h1>
            <h3 className="text-xl md:text-2xl text-gray-300 flex items-center justify-between"><a className="text-lg text-gray-400 flex items-center" href="https://github.com/YiboK/CS639_Photo_Video_Anonymization"><img src={githubIcon} alt="github logo" className="w-5 inline-block mr-1"></img>GitHub Repository</a>Yibo Kong, Daniel Gu</h3>
          </div>
          <div className="link-list flex items-center justify-between sm:justify-around lg:w-full mt-10 sm:mt-8 flex-wrap self-center">
            <IconLink icon={backgroundIcon} name="Background" refer="background" />
            <IconLink icon={goalIcon} name="Goal" refer="goal" />
            <IconLink icon={currentIcon} name="Current Work" refer="current" />
            <IconLink icon={techIcon} name="Details" refer="tech" />
            <IconLink icon={problemIcon} name="Problems" refer="problem" />
            <IconLink icon={futureIcon} name="Future" refer="future" />
            <IconLink icon={contactIcon} name="Contact Us" refer="contact" />
            <IconLink icon={refIcon} name="References" refer="ref" />
          </div>
        </div>
      </div>
      <div className="main py-2 sm:py-10 px-4 lg:px-36 xl:px-72 overflow-hidden">
        <h1 id="background">Background and Motivation</h1>
        <p>In the era of information technology, people's privacy has become more vulnerable to leakage. People's faces, license plates, and other private information are often inadvertently recorded on other people's videos and viewed by thousands of viewers. These seemingly innocuous records can be easily investigated for more detailed personal data if used by malicious people. </p>
        <p>When watching videos, we always see some passersby or passing cars filmed and recorded. Many people don't see this as a problem because no one pays attention to a passerby, and the video makers don't have the energy or ability to question everyone caught on camera. But in fact, just through the license plate, people with relevant knowledge can get the background information of the car owners, including their home addresses. And people's portrait rights should also be respected and protected. Compared to looking at license plates and passersby in reality, video as a way of recording is more easily exploited by malicious people.</p>
        <p>Thus, people started to think about whether AI could help people to cover up the privacy of other people in the video. To protect people's privacy and bring convenience to video makers, we are interested in this topic and will try to propose our solution.</p>
        <p>Google Street View is one of the earliest and most famous software that uses anonymization programs. But Google's software is commercial, so they never make their technology and code available to others. To make video anonymization easy for other people, people have developed lots of related software and put it on the market. However, most of this software is subscription-based. The free trial versions they offer also have many restrictions, such as image resolution, video length, or watermarks. For individual video makers, the expensive commercial software is not affordable. Therefore, we plan to develop an open source, free software that will be available to users who use it less frequently or are bothered by the high cost of commercial software. </p>
        <h1 id="goal">Goal</h1>
        <p>We want to develop software or program that can automatically anonymize videos. It can automatically blur license plates and people's faces in photos or videos. In our plan, users can choose the objects to be blurred: license plates, faces, or other things that may be private. In addition, we hope to provide options for different levels and types of blurs for video makers who want to respect people's portrait rights but don't want too much blur to diminish the viewer's watching experience. The advantages of our software are open-source and the variety of options available to users.</p>
        {cg.instantiate([blurDegImg], "Different Blurring Effects")}
        <h1 id="current">Current State-of-the-Art</h1>
        <p>Currently, a variety of models are created for object detection and image semantic segmentation. For instance, the Viola-Jones algorithm is a fast non-deep-learning approach for face detection, YOLO-v5 is a slightly complicated yet still fast deep-learning model for object detection, and U-Net is a mature solution for semantic segmentation.</p>
        <p>However, photo and video anonymization have more intricate requirements. It requires more details than a bounding box in object detection since we do not want to blur out excessive parts in images. It also requires better performance and fewer details than per-pixel semantic segmentation since faces and license plates have relatively simple shapes.</p>
        <p>We will contrast our new model in time, accuracy, and size of training data with existing deep learning models: YOLO-v5 (object detection) and U-Net (semantic segmentation). To measure the temporal performance of our model, we will compare both the training time and time of application of one image. To measure the accuracy, we will use Mean Intersection over Union (mIoU) of our blurring area with the ground truth. Ideally, we would expect a real-time performance (15 pics per second-ish), which is similar to YOLO-v5 and has better accuracy than YOLO-v5. We would also expect the mIoU would be similar (at least not too far behind) to U-Net's, and the model requires far less data than deep learning approaches.</p>
        <h1 id="tech">Technical Approaches</h1>
        <p>We trained the face and license plate detection models and implemented the face and license plate blurring separately. In this way, we can easily implement the feature where the user chooses which objects to blur. Both of our models were trained using YOLO-v5. </p>
        <h2>License Plate Detection</h2>
        <p>To unify the model, we use YOLOv5 {ct.cite("Bochkovskiy, Alexey, Chien-Yao Wang, and Hong-Yuan Mark Liao. \"Yolov4: Optimal speed and accuracy of object detection.\" arXiv preprint arXiv:2004.10934 (2020).")} to do the license plate recognition. YOLOv5 consists 3 parts: Backbone, Neck, Output.</p>
        <p>YOLO-v5 is based on U-Net. U-Net use down-sampling convolutional layers <b>(Backbone)</b> to excavate semantic information of an image. Then, the down-sampled image is upscaled to add spatial information. <b>(Neck)</b></p>
        <p>Since resampling may cause potential loss of information, when we are up-sampling, the older data without further down-sampling is concatenated to the upscaled data.</p>
        <p>We do not need the region proposal to be pixel-accurate, hence the up-scaling is done less times than down-sampling. After that, the activation in different up-scaling stage are feed into the detect module <b>(Output)</b>to give region proposals.</p>
        <p>The model we used, YOLOv5s, is the one with the simplest configuration of YOLOv5 (small backbone, neck and output configuration). It has the best efficiency, and still be enough for this task. The figure below shows how YOLOv5s is comprised</p>
        {cg.instantiate([modelImg], "YOLOv5s Architecture")}
        <p>We use the Car License Plate dataset{ct.cite("Larxel, “Car License Plates Dataset”, https://www.kaggle.com/datasets/andrewmvd/car-plate-detection")} to train the model. The dataset comprises 433 images of cars / street views with license plates.</p>
        <p>Since license plates has greater diversity than faces, the model, which is also not specified to recognize license plates, yields results not as accurate as YOLOv5-Faces do, but still considerably well.</p>
        {cg.instantiate([licenseImg], "The result of License Plate detection")}
        <p>After recognizing the license plates, a gaussian blur filter is applied to the object bounding box, which shares the same level of blurring with the face.</p>
        {cg.instantiate([bentley1Img, bentley2Img], "The result of License Plate blurring, single license plate")}
        {cg.instantiate([cars1Img, cars2Img], "The result of License Plate blurring, multiple license plates")}
        <h2>Face Detection</h2>
        <h3>Dataset</h3>
        <p>We found a dataset for training face detection called WiderFace
          {ct.cite("Yang, S., Luo, P., Loy, C., and Tang, X., “Wider face: A face detection benchmark,” CVPR, 2016.")}
          {ct.cite("Yang, S., Luo, P., Loy, C., and Tang, X., “Wider face: A face detection benchmark,” http://shuoyang1213.me/WIDERFACE/index.html.")}
          . This training set includes 32203 images and 393703 labeled faces. The number of faces, poses, and occlusions in the images vary greatly, which makes WiderFace an ideal and efficient training set. However, the dataset contains some labels that we do not care about, such as makeup, occlusion, and facial pose. Since we only consider facial detection, we need to remove these labels. We will use the processed dataset for training. The following figure shows the examples given on the official website of the dataset.</p>
        {cg.instantiate([introImg], "WiderFace Dataset")}
        <h3>Training</h3>
        <p>To train the face detection model, We first tried YOLO-v5. However, after we trained and tested the model, we found that the model's detection capability was not ideal. To train a more accurate model, we used YOLO5Face, a real-time,high accuracy face detection based on YOLO-v5
          {ct.cite("Qi, D., Tan, W., Yao, Q., Liu, J. YOLO5Face: Why reinventing a face detector. arXiv 2021, arXiv:2105.12931.")}
          .  YOLO5Face makes key modifications to YOLO-v5 to improve the mean average precision (mAP) and speed of detection. On the basis of YOLO-v5, YOLO5Face adds a 5-point landmark regression head and uses Wing loss as the loss function. </p>
        <BlockMath math="\mathrm{wing(x)} = \begin{cases}w\cdot\ln(1 + \frac{|x|}{2}), & \textrm{if }x < w\\|x| - C, & \textrm{otherwise} \end{cases}"></BlockMath>
        <BlockMath math="\mathrm{loss}_L(s) = \sum_i \mathrm{wing}(s_i - s_i')"></BlockMath>
        <p>Traditional face detection uses 68 landmarks to achieve multiple functions, such as age prediction, face cutting, etc.. And YOLO5Face only targets face detection, so it uses the 5-point landmark regression head to improve detection efficiency by reducing the number of landmarks to 5 (eyes, nose tip, mouth corners).</p>
        <p>We trained the model using YOLO5Face and compared it with the model trained by YOLO-v5. When trained with both the WiderFace dataset and YOLOv5s pre-trained model, the accuracy of the YOLO5Face trained model in face detection is significantly improved compared to YOLOv5.</p>
        <p>In the following image comparison, we will use the trained YOLOv5 model{ct.cite("Milad, S. https://github.com/miladsoltany/Face-Detection.")} and our own trained YOLO5Face model.</p>
        {cg.instantiate([v5Img, v5faceImg], "The effect of YOLOv5 (left) v.s. YOLOv5-Face (right)")}
        <p>After successfully training and testing the model, we modified the program running to detect faces to blur them. We used the OpenCV library to help with our implementation. Broadly speaking, we blurred the ROI first and added the blurred ROI to the whole image by mask. We also offer different blur levels for users.</p>
        {cg.instantiate([originalImg, resultImg], "The original image (left) v.s. result of face blurring (right)")}
        <p>Thanks to the high performance of our model, the result of mass groups of people is also significant.</p>
        {cg.instantiate([large1Img], "The result of a large group of people 1")}
        {cg.instantiate([large2Img], "The result of a large group of people 2")}

        <h1 id="result">Final Result</h1>
        <p>Here are the final results of our program.</p>
        <p>Users can select the objects to be blurred according to their requirements.</p>
        {cg.instantiate([diffObjImg], "Different options for our program")}
        <p>Our program also has good performance for video input.</p>
        <video src={resultVid} type="video/mp4" controls />

        <h1 id="problem">Problems We Encountered</h1>
        <p>Training models with YOLO-v5 is very time consuming. In the absence of a professional or high-end GPU we used Google Colab for remote GPU training. However, Google Colab has a limit of computational units, resulting in only 100 epochs for our model training (300 is recommended). And at the end of training, mAP still has an increasing trend. We believe that more epochs will improve the accuracy of our model. </p>
        <h1 id="future">Future Work</h1>
        <ul>
          <li>Our program does not blur other objects and expects a future update to implement this feature.</li>
          <li>In some cases, users do not necessarily want to blur all the people in the video, such as journalists, interviewees or bloggers themselves. Therefore, a useful feature is to prevent blurring the selected people.</li>
          <li>Train better models to improve the precision of the program.</li>
          <li>Develop user-friendly programs. Currently our program requires users to upload photos and set parameters in Google Colab by themselves. We hope to develop an easy-to-use website application in the future</li>
        </ul>
        <h1 id="contact">Contact Us</h1>
        <div className="contact-container flex flex-col sm:flex-row justify-center items-center mt-10 h-fit">
          <Contact name="Yibo Kong" email="ykong42@wisc.edu" github="YiboK" avatarUrl="https://avatars.githubusercontent.com/u/94937314?v=4"/>
          <Contact name="Daniel Gu" email="zgu98@wisc.edu" github="endaytrer" avatarUrl="https://avatars.githubusercontent.com/u/49216312?v=4"/>
        </div>
        <h1 id="ref">References</h1>
        {ct.references()}
      </div>
      <div className="footer py-2 sm:py-10 px-4 lg:px-36 xl:px-72 bg-zinc-900">
        <div className="text-gray-600 text-sm">
          <p>The website is open source in GitHub: <a className="underline" href="https://github.com/endaytrer/cs639-project-website">endaytrer/cs639-project-website</a>.</p>
          <p>Powered by React.js and Netlify.</p>
          </div>
        
      </div>
    </div>
    
  );
}

export default App;
