import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'
import { useState } from 'react';

function CloudWidget({ publicId, setPublicId, setImageCloud }){

    const successCallBack = (result) => {
        if (result && result.event === 'success') {
          console.log('Upload successful:', result.info);
          console.log(result.info.public_id);
          setImageCloud(true);
          setPublicId(result.info.public_id);
        }
    }

    const failureCallBack = (response) => {
        console.log("test failure", response);
    }

    return(
        <div>
        <WidgetLoader />
        <Widget
          sources={['local', 'camera']} // set the sources available for uploading -> by default
          // all sources are available. More information on their use can be found at
          // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
          //sourceKeys={{dropboxAppKey: '1dsf42dl1i2', instagramClientId: 'd7aadf962m'}} // add source keys
          // and ID's as an object. More information on their use can be found at
          // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
          resourceType={'image'} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
          cloudName={'dwyipecoa'} // your cloudinary account cloud name.
          // Located on https://cloudinary.com/console/
          uploadPreset={'ml_default'} // check that an upload preset exists and check mode is signed or unisgned
          buttonText={'Upload Image'} // default 'Upload Files'
          style={{
                color: 'white',
                border: 'none',
                width: '150px',
                backgroundColor: 'black',
                borderRadius: '4px',
                height: '50px'
              }} // inline styling only or style id='cloudinary_upload_button'
          folder={'my_folder'} // set cloudinary folder name to send file
          cropping={false} // set ability to crop images -> default = true
          // https://support.cloudinary.com/hc/en-us/articles/203062071-How-to-crop-images-via-the-Upload-Widget-#:~:text=Click%20on%20the%20%22Edit%22%20link,OK%22%20and%20Save%20the%20changes.
          // more information here on cropping. Coordinates are returned or upload preset needs changing
          multiple={true} // set to false as default. Allows multiple file uploading
          // will only allow 1 file to be uploaded if cropping set to true
          autoClose={false} // will close the widget after success. Default true
          onSuccess={successCallBack} // add success callback -> returns result
          onFailure={failureCallBack} // add failure callback -> returns 'response.error' + 'response.result'
          logging={false} // logs will be provided for success and failure messages,
          // set to false for production -> default = true
          customPublicId={"testFileName"} // set a specific custom public_id.
          // To use the file name as the public_id use 'use_filename={true}' parameter
          eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'} // add eager transformations -> deafult = null
          use_filename={true} // tell Cloudinary to use the original name of the uploaded
          // file as its public ID -> default = true,
  
          widgetStyles={{
            palette: {
              window: '#737373',
              windowBorder: '#FFFFFF',
              tabIcon: '#FF9600',
              menuIcons: '#D7D7D8',
              textDark: '#DEDEDE',
              textLight: '#FFFFFF',
              link: '#0078FF',
              action: '#FF620C',
              inactiveTabIcon: '#B3B3B3',
              error: '#F44235',
              inProgress: '#0078FF',
              complete: '#20B832',
              sourceBg: '#909090'
            },
            fonts: {
              default: null,
              "'Fira Sans', sans-serif": {
                url: 'https://fonts.googleapis.com/css?family=Fira+Sans',
                active: true
              }
            }
          }} // ability to customise the style of the widget uploader
          destroy={true} // will destroy the widget on completion
        />
      </div> 
    )
}
export default CloudWidget