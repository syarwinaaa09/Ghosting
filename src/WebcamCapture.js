import React, { useCallback, useRef, useState} from 'react';
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import "./WebcamCapture.css";
import { useNavigate } from 'react-router-dom/dist';

const videoConstraints = {
    width: 250,
    height: 400, 
    facingMode: "user",
};

function WebcamCapture() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        navigate('/preview');
    }, [webcamRef]);

  return <div className="webcamCapture">
    <Webcam 
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
    />

    <RadioButtonUncheckedIcon
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
    />
  </div>
}

export default WebcamCapture