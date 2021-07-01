function SliderThumbIcon() {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" width="31" height="58" viewBox="0 0 31 58">
         <defs>
            <filter id="Rectangle_152" x="0" y="0" width="31" height="58" filterUnits="userSpaceOnUse">
               <feOffset dy="3" input="SourceAlpha" />
               <feGaussianBlur stdDeviation="3" result="blur" />
               <feFlood flood-opacity="0.161" />
               <feComposite operator="in" in2="blur" />
               <feComposite in="SourceGraphic" />
            </filter>
         </defs>
         <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_152)">
            <rect id="Rectangle_152-2" data-name="Rectangle 152" width="13" height="40" rx="3" transform="translate(9 6)" fill="#3e6eb0" />
         </g>
      </svg>
   );
}

export default SliderThumbIcon;