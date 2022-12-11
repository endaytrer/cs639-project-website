import './App.css';
import imgAfter from "./assets/level_3.jpg"
import imgBefore from "./assets/original.jpg"
import backgroundIcon from "./assets/background.svg"
import goalIcon from "./assets/goal.svg"
import currentIcon from "./assets/current.svg"
import techIcon from "./assets/tech.svg"
import problemIcon from "./assets/problem.svg"
import futureIcon from "./assets/future.svg"
import contactIcon from "./assets/contact.svg"
import refIcon from "./assets/ref.svg"
import { useState } from 'react';
import { IconLink } from './IconLink';
import { Contact } from './Contact';
function App() {
  const sliderWidth = 8;
  const [compareWidth, setCompareWidth] = useState(0.5);
  const [isSliding, setIsSliding] = useState(false);
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
      <div className='header relative h-screen w-full flex flex-col justify-end'>
        <div className="top-img absolute top-0 h-full w-full select-none" onMouseMove={setWidth}>
          <div className="compare-img before-img absolute bg-left-top h-full bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${imgBefore})`, width: `calc(${(compareWidth * 100)}% - ${sliderWidth / 2}px)`}}>
            <span className="absolute mx-4 top-4 px-3 py-1 rounded-2xl z-50 text-base uppercase font-semibold text-gray-500 bg-white drop-shadow-lg">Before</span>
          </div>
          <div className="compare-slider absolute h-full cursor-ew-resize bg-slate-200 top-0 z-20 drop-shadow-lg flex flex-col justify-center items-center" style={{width: `${sliderWidth}px`, backgroundImage: `linear-gradient(transparent, rgb(17, 24, 39))`, left: `calc(${(compareWidth * 100)}% - ${sliderWidth / 2}px)`}} onMouseDown={startSetWidth} onMouseUp={endSetWidth}></div>
          <div className="compare-img absolute bg-cover bg-right-top h-full text-right bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${imgAfter})`, left: `calc(${(compareWidth * 100)}% + ${sliderWidth / 2}px)`,width: `calc(${((1 - compareWidth) * 100)}% - ${sliderWidth / 2}px)`}}>
            <span className="absolute mx-4 top-4 right-0 px-3 py-1 rounded-2xl z-50 text-base uppercase font-semibold text-green-600 bg-white drop-shadow-lg">After</span>
          </div>
          <div className="mask absolute z-10 w-full h-full" style={{backgroundImage: `linear-gradient(transparent, rgb(17, 24, 39))`}}></div>
        </div>
        <div className="title relative bottom-0 h-2/5 w-full z-20 flex flex-col"  onMouseMove={setWidth}>
          <h1 className="text-5xl ml-10 text-white my-5"><span className="border-b-4 border-blue-600">Photo and Video <b>Anonymization</b></span></h1>
          <h3 className="text-2xl ml-10 text-gray-300">Yibo Kong, Daniel Gu</h3>
          <div className="link-list flex items-center justify-around lg:w-full mt-12 flex-wrap self-center">
            <IconLink icon={backgroundIcon} name="Background" refer="background" />
            <IconLink icon={goalIcon} name="Goal" refer="goal" />
            <IconLink icon={currentIcon} name="Current Work" refer="current" />
            <IconLink icon={techIcon} name="Tech Approach" refer="tech" />
            <IconLink icon={problemIcon} name="Problems" refer="problem" />
            <IconLink icon={futureIcon} name="Future" refer="future" />
            <IconLink icon={contactIcon} name="Contact Us" refer="contact" />
            <IconLink icon={refIcon} name="References" refer="ref" />
          </div>
        </div>
      </div>
      <div className="main py-10 px-4 lg:px-24 xl:px-48">
        <h1 id="background">Background and Motivation</h1>
        <p>In the era of information technology, people's privacy has become more vulnerable to leakage. People's faces, license plates, and other private information are often inadvertently recorded on other people's videos and viewed by thousands of viewers. These seemingly innocuous records can be easily investigated for more detailed personal data if used by malicious people. </p>
        <p>When watching videos, we always see some passersby or passing cars filmed and recorded. Many people don't see this as a problem because no one pays attention to a passerby, and the video makers don't have the energy or ability to question everyone caught on camera. But in fact, just through the license plate, people with relevant knowledge can get the background information of the car owners, including their home addresses. And people's portrait rights should also be respected and protected. Compared to looking at license plates and passersby in reality, video as a way of recording is more easily exploited by malicious people.</p>
        <p>Thus, people started to think about whether AI could help people to cover up the privacy of other people in the video. To protect people's privacy and bring convenience to video makers, we are interested in this topic and will try to propose our solution.</p>
        <p>Google Street View is one of the earliest and most famous software that uses anonymization programs. But Google's software is commercial, so they never make their technology and code available to others. To make video anonymization easy for other people, people have developed lots of related software and put it on the market. However, most of this software is subscription-based. The free trial versions they offer also have many restrictions, such as image resolution, video length, or watermarks. For individual video makers, the expensive commercial software is not affordable. Therefore, we plan to develop an open source, free software that will be available to users who use it less frequently or are bothered by the high cost of commercial software. </p>
        <h1 id="goal">Goal</h1>
        <p>We want to develop software or program that can automatically anonymize videos. It can automatically blur license plates and people's faces in photos or videos. In our plan, users can choose the objects to be blurred: license plates, faces, or other things that may be private. In addition, we hope to provide options for different levels and types of blurs for video makers who want to respect people's portrait rights but don't want too much blur to diminish the viewer's watching experience. The advantages of our software are open-source and the variety of options available to users.</p>
        <h1 id="current">Current State-of-the-Art</h1>
        <p>Currently, a variety of models are created for object detection and image semantic segmentation. For instance, the Viola-Jones algorithm is a fast non-deep-learning approach for face detection, YOLO-v5 is a slightly complicated yet still fast deep-learning model for object detection, and U-Net is a mature solution for semantic segmentation.</p>
        <p>However, photo and video anonymization have more intricate requirements. It requires more details than a bounding box in object detection since we do not want to blur out excessive parts in images. It also requires better performance and fewer details than per-pixel semantic segmentation since faces and license plates have relatively simple shapes.</p>
        <p>We will contrast our new model in time, accuracy, and size of training data with existing deep learning models: YOLO-v5 (object detection) and U-Net (semantic segmentation). To measure the temporal performance of our model, we will compare both the training time and time of application of one image. To measure the accuracy, we will use Mean Intersection over Union (mIoU) of our blurring area with the ground truth. Ideally, we would expect a real-time performance (15 pics per second-ish), which is similar to YOLO-v5 and has better accuracy than YOLO-v5. We would also expect the mIoU would be similar (at least not too far behind) to U-Net's, and the model requires far less data than deep learning approaches.</p>
        <h1 id="tech">Technical Approaches</h1>
        <p>We trained the face and license plate detection models and implemented the face and license plate blurring separately. In this way, we can easily implement the feature where the user chooses which objects to blur. Both of our models were trained using YOLO-v5. </p>
        <h2>Face Detection</h2>
        <h3>Dataset</h3>
        <p>We found a dataset for training face detection called WiderFace<a href="#r1"><sup>[1]</sup></a><a href="#r2"><sup>[2]</sup></a>. This training set includes 32203 images and 393703 labeled faces. The number of faces, poses, and occlusions in the images vary greatly, which makes WiderFace an ideal and efficient training set. However, the dataset contains some labels that we do not care about, such as makeup, occlusion, and facial pose. Since we only consider facial detection, we need to remove these labels. We will use the processed dataset for training. The following figure shows the examples given on the official website of the dataset.</p>
        <h3>Training</h3>
        <p>To train the face detection model, We first tried YOLO-v5. However, after we trained and tested the model, we found that the model's detection capability was not ideal. To train a more accurate model, we used YOLO5Face, a real-time,high accuracy face detection based on YOLO-v5 <a href="#r3"><sup>[3]</sup></a>.  YOLO5Face makes key modifications to YOLO-v5 to improve the mean average precision (mAP) and speed of detection. On the basis of YOLO-v5, YOLO5Face adds a 5-point landmark regression head and uses Wing loss as the loss function. </p>
        <p>Traditional face detection uses 68 landmarks to achieve multiple functions, such as age prediction, face cutting, etc.. And YOLO5Face only targets face detection, so it uses the 5-point landmark regression head to improve detection efficiency by reducing the number of landmarks to 5 (eyes, nose tip, mouth corners).</p>
        <p>We trained the model using YOLO5Face and compared it with the model trained by YOLO-v5. When trained with both the WiderFace dataset and YOLOv5s pre-trained model, the accuracy of the YOLO5Face trained model in face detection is significantly improved compared to YOLOv5.</p>
        <p>In the following image comparison, we will use the trained YOLOv5 model <a href="#r4"><sup>[4]</sup></a> and our own trained YOLO5Face model.</p>
        <p>After successfully training and testing the model, we modified the program running to detect faces to blur them. We used the OpenCV library to help with our implementation. Broadly speaking, we blurred the ROI first and added the blurred ROI to the whole image by mask. We also offer different blur levels for users.</p>
        <h1 id="problem">Problems We Encountered</h1>
        <p>Training models with YOLO-v5 is very time consuming. In the absence of a professional or high-end GPU we used Google Colab for remote GPU training. However, Google Colab has a limit of computational units, resulting in only 100 epochs for our model training (300 is recommended). And at the end of training, mAP still has an increasing trend. We believe that more epochs will improve the accuracy of our model. </p>
        <h1 id="future">Future Work</h1>
        <ul>
          <li>Our program does not blur other objects and expects a future update to implement this feature.</li>
          <li>In some cases, users do not necessarily want to blur all the people in the video, such as journalists, interviewees or bloggers themselves. Therefore, a useful feature is to prevent blurring the selected people.</li>
          <li>Train better models to improve the precision of the program.</li>
        </ul>
        <h1 id="contact">Contact Us</h1>
        <div className="contact-conainer flex justify-center items-center mt-10">
          <Contact name="Yibo Kong" email="ykong42@wisc.edu" github="YiboK" avatarUrl="https://avatars.githubusercontent.com/u/94937314?v=4"/>
          <Contact name="Daniel Gu" email="zgu98@wisc.edu" github="endaytrer" avatarUrl="https://avatars.githubusercontent.com/u/49216312?v=4"/>
        </div>
        <h1 id="ref">References</h1>
        <ul id="references">
          <li id="r1">[1] Yang, S., Luo, P., Loy, C., and Tang, X., “Wider face: A face detection benchmark,” CVPR, 2016. </li>
          <li id="r2">[2] Yang, S., Luo, P., Loy, C., and Tang, X., “Wider face: A face detection benchmark,” http://shuoyang1213.me/WIDERFACE/index.html.</li>
          <li id="r3">[3] Qi, D., Tan, W., Yao, Q., Liu, J. YOLO5Face: Why reinventing a face detector. arXiv 2021, arXiv:2105.12931.</li>
          <li id="r4">[4] Milad, S. https://github.com/miladsoltany/Face-Detection.</li>
          <li id="r5">[5] Larxel, “Car License Plates Dataset”, https://www.kaggle.com/datasets/andrewmvd/car-plate-detection</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
