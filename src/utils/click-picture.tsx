export const closePhoto = (photoRef: any, setHasPhoto: any) => {
  let photo = photoRef.current;
  if (photo) {
    let ctx = photo.getContext("2d");
    ctx?.clearRect(0, 0, photo.width, photo.height);
    setHasPhoto(false);
  }
};

export const takePhoto = (photoRef: any, videoRef: any, setHasPhoto: any) => {
  const width = 480;
  const height = 640;

  if (photoRef.current && videoRef.current) {
    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let cntx = photo.getContext("2d");
    if (cntx) {
      cntx.drawImage(video, 0, 0, width, height);
      setHasPhoto(true);
    }
  }
};

export const getVideo = (videoRef: any) => {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 480, height: 640 },
      })
      .then((stream) => {
        if (videoRef.current) {
          let vid = videoRef.current;
          vid.srcObject = stream;
          vid.play();
        }
      })
      .catch((error: any) => {
        console.error(error);
      });
  } else {
    console.error("getUserMedia is not supported");
  }
};
