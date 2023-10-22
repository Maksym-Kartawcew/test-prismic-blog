// function SignUpForm({ settings }) {
//   return (
//     <div className="px-4">
//       <form
//      >
//         {prismic.isFilled.richText(settings.data.newsletterDisclaimer) && (
//           <div >
//             <PrismicRichText
//               field={settings.data.newsletterDescription}
//                     />
//           </div>
//         )}
//         <div >
//           <div>
//             <label>
//               <span >Email address</span>
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="jane.doe@example.com"
//                 required={true}
//               />
//             </label>
//             <button
//               type="submit"
//             >
//               <span>Submit</span>
//               <span>&rarr;</span>
//             </button>
//           </div>
//           {prismic.isFilled.richText(settings.data.newsletterDisclaimer) && (
//             <p>
//               <PrismicText field={settings.data.newsletterDisclaimer} />
//             </p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }
