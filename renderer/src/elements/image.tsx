import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Button } from './button';

interface PropsType {
  url?: string | undefined;
  showButton?: boolean;
  onChangedPhoto: (e) => void;
}

const Image = ({ url, showButton, onChangedPhoto }: PropsType) => {
  const handleUpload = async () => {
    // const { base64 } = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   base64: true,
    //   allowsEditing: true,
    //   quality: 1,
    // });
    // const base64ToUpload = `data:image/png;base64,${base64}`;
    // return base64ToUpload;
  };
  // const handlePhoto = async () => {

  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //     quality: 1,
  //   });

  //   if (!result.canceled) {
  //     console.log(result);
  //   } else {
  //     alert('You did not select any image.');
  //   // }
  //   // const { base64 } = await ImagePicker.launchImageLibraryAsync({
  //   //   mediaTypes: ImagePicker.MediaTypeOptions.All,
  //   //   base64: true,
  //   //   allowsEditing: true,
  //   //   quality: 1,
  //   // });

  //   // const base64ToUpload = `data:image/png;base64,${base64}`;
  // };
  return (
    <>
      <div className='w-20 h-20 text-center'>
        <img src={url} alt='프로필이미지' className='image' />
        {showButton && <Button onClick={handleUpload}></Button>}
      </div>
    </>
  );
};

export default Image;
