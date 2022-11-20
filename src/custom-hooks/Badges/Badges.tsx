import React, { useEffect } from 'react';
import { styled } from '@mui/system';


// const Div = styled('div')({
// })

// export const Badges = () => {
//   useEffect(() => {
//     const script = document.createElement('script');

//     script.src = '//cdn.credly.com/assets/utilities/embed.js';
//     script.async = true;
//     script.defer = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <Div sx={{
//         display: 'flex', 
//         justifyContent: 'center',
//         flexWrap: 'wrap',
//         paddingTop: '25px',
//     }}>
//         {/* CT badge */}
//       <div
//         className="badge-base CT-badge"
//         data-iframe-border='none'
//         data-iframe-width="150"
//         data-iframe-height="270"
//         data-share-badge-id="29b36aa9-122d404d-a48f-e531c064a7df"
//         data-share-badge-host="http://www.credly.com"
//       >
//        <a
//           className="badge-base__link CT-simple-link"
//           href="http://www.credly.com"
//         />
//       </div>

//         {/* Python */}
//       <div
//         className="badge-base CT-badge"
//         data-iframe-width="150"
//         data-iframe-height="270"
//         data-share-badge-id="654c1ea2-a5da-4ecd-8f02-22082ed70882"
//         data-share-badge-host="http://www.credly.com"
//       >
//        <a
//           className="badge-base__link CT-simple-link"
//           href="http://www.credly.com"
//         />
//       </div>

//         {/* JavaScript */}
//       <div
//         className="badge-base CT-badge"
//         data-iframe-width="150"
//         data-iframe-height="270"
//         data-share-badge-id="1cb7baef-4b42-4c5a-ac12-a900bca5d397"
//         data-share-badge-host="http://www.credly.com"
//       >
//        <a
//           className="badge-base__link CT-simple-link"
//           href="http://www.credly.com"
//         />
//       </div>
//         {/* React */}

//       <div
//         className="badge-base CT-badge"
//         data-iframe-width="150"
//         data-iframe-height="270"
//         data-share-badge-id="19550bd4-1e97-474f-9865-0264564ee082"
//         data-share-badge-host="http://www.credly.com"
//       >
//        <a
//           className="badge-base__link CT-simple-link"
//           href="http://www.credly.com"
//         />
//       </div>
      
//         {/* Flask */}
//       <div
//         className="badge-base CT-badge"
//         data-iframe-width="150"
//         data-iframe-height="270"
//         data-share-badge-id="613dc144-6be6-4d83-85fb-da2fc6610d39"
//         data-share-badge-host="http://www.credly.com"
//       >
//        <a
//           className="badge-base__link CT-simple-link"
//           href="http://www.credly.com"
//         />
//       </div>

//         {/* SQL */}
//       <div
//         className="badge-base CT-badge"
//         data-iframe-width="150"
//         data-iframe-height="270"
//         data-share-badge-id="7369e39f-e59f-42b5-a09e-408e7f09232a"
//         data-share-badge-host="http://www.credly.com"
//       >
//        <a
//           className="badge-base__link CT-simple-link"
//           href="http://www.credly.com"
//         />
//       </div>

//         {/* HTML */}
//       <div
//         className="badge-base CT-badge"
//         data-iframe-width="150"
//         data-iframe-height="270"
//         data-share-badge-id="cdf150ae-818a-40cc-b8e9-726fd8fcc4b6"
//         data-share-badge-host="http://www.credly.com"
//       >
//        <a
//           className="badge-base__link CT-simple-link"
//           href="http://www.credly.com"
//         />
//       </div>

//         {/* CSS */}
//       <div
//         className="badge-base CT-badge"
//         data-iframe-width="150"
//         data-iframe-height="270"
//         data-share-badge-id="522d70d3-ee7a-453c-b0e6-23a2bb059b3d"
//         data-share-badge-host="http://www.credly.com"
//       >
//        <a
//           className="badge-base__link CT-simple-link"
//           href="http://www.credly.com"
//         />
//       </div>

      
//     </Div>
//   );}