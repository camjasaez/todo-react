export const Checkbox = ({ className }) => (
  <svg
    style={{ pointerEvents: 'none' }}
    onClick={(e) => e.stopPropagation()}
    className={className}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_4_23)">
      <rect
        x="1.5"
        y="1.5"
        width="25"
        height="25"
        rx="4.5"
        fill="#FFF0EE"
        stroke="#33322E"
        strokeWidth="3"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_4_23"
        x="0"
        y="0"
        width="30"
        height="30"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.2 0 0 0 0 0.196078 0 0 0 0 0.180392 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4_23"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4_23"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const CheckboxCompleted = ({ className }) => (
  <svg
    style={{ pointerEvents: 'none' }}
    onClick={(e) => e.stopPropagation()}
    className={className}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_4_24)">
      <rect width="28" height="28" rx="6" fill="#8CD4CB" />
      <rect
        x="1.5"
        y="1.5"
        width="25"
        height="25"
        rx="4.5"
        stroke="#33322E"
        strokeWidth="3"
      />
    </g>
    <path
      d="M6.36317 12.6751C5.55939 12.4745 4.7452 12.9635 4.54463 13.7673C4.34405 14.571 4.83305 15.3852 5.63683 15.5858L6.36317 12.6751ZM12.1587 19L10.7804 19.5918C11.031 20.1754 11.622 20.5379 12.2557 20.4969C12.8895 20.4558 13.4288 20.02 13.6019 19.4089L12.1587 19ZM26.3261 6.46413C27.1347 6.28406 27.6442 5.48257 27.4641 4.67395C27.2841 3.86533 26.4826 3.35579 25.6739 3.53587L26.3261 6.46413ZM5.63683 15.5858C6.02764 15.6833 7.12299 16.151 8.2778 16.9426C9.43988 17.7393 10.3891 18.6803 10.7804 19.5918L13.5371 18.4082C12.8109 16.7171 11.3016 15.3783 9.97406 14.4682C8.63927 13.5532 7.21399 12.8874 6.36317 12.6751L5.63683 15.5858ZM13.6019 19.4089C14.1359 17.5244 15.4948 14.6585 17.6727 12.0639C19.8445 9.47675 22.7417 7.26235 26.3261 6.46413L25.6739 3.53587C21.2583 4.5192 17.8275 7.21342 15.3749 10.1351C12.9285 13.0495 11.3667 16.2929 10.7155 18.5911L13.6019 19.4089Z"
      fill="#F9F3E5"
    />
    <defs>
      <filter
        id="filter0_d_4_24"
        x="0"
        y="0"
        width="30"
        height="30"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.2 0 0 0 0 0.196078 0 0 0 0 0.180392 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4_24"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4_24"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const CheckboxDiscard = ({ className }) => (
  <svg
    style={{ pointerEvents: 'none' }}
    onClick={(e) => e.stopPropagation()}
    className={className}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_21_1184)">
      <rect width="28" height="28" rx="6" fill="#F6A89E" />
      <rect
        x="1.5"
        y="1.5"
        width="25"
        height="25"
        rx="4.5"
        stroke="#33322E"
        strokeWidth="3"
      />
    </g>
    <path
      d="M5.72251 20.2139C5.28834 20.9194 5.50832 21.8433 6.21385 22.2775C6.91939 22.7117 7.84331 22.4917 8.27749 21.7861L5.72251 20.2139ZM21.7942 8.47087C22.6065 8.3084 23.1333 7.51817 22.9709 6.70583C22.8084 5.89349 22.0182 5.36666 21.2058 5.52913L21.7942 8.47087ZM8.27749 21.7861C10.24 18.5971 12.5493 15.4443 14.9487 12.985C17.3862 10.4866 19.747 8.8803 21.7942 8.47087L21.2058 5.52913C18.253 6.1197 15.3638 8.26343 12.8013 10.89C10.2007 13.5557 7.76002 16.9029 5.72251 20.2139L8.27749 21.7861Z"
      fill="#F9F3E5"
    />
    <path
      d="M8.92567 5.36281C8.57375 4.61285 7.68049 4.29017 6.93053 4.64209C6.18057 4.99401 5.85789 5.88727 6.20981 6.63723L8.92567 5.36281ZM20.5991 22.2594C21.2946 22.7094 22.2233 22.5104 22.6733 21.8149C23.1234 21.1194 22.9244 20.1907 22.2289 19.7407L20.5991 22.2594ZM6.20981 6.63723C8.67075 11.8816 11.8546 16.6012 20.5991 22.2594L22.2289 19.7407C13.9734 14.3989 11.1572 10.1184 8.92567 5.36281L6.20981 6.63723Z"
      fill="#F9F3E5"
    />
    <defs>
      <filter
        id="filter0_d_21_1184"
        x="0"
        y="0"
        width="30"
        height="30"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.2 0 0 0 0 0.196078 0 0 0 0 0.180392 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_21_1184"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_21_1184"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const EditSVG = ({ className }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_0_1)">
      <rect
        x="1.5"
        y="1.5"
        width="25"
        height="25"
        rx="4.5"
        fill="#FFF0EE"
        stroke="#33322E"
        strokeWidth="3"
      />
    </g>
    <g clipPath="url(#clip0_0_1)">
      <path
        d="M19.4608 5.16408C19.3554 5.05863 19.2123 4.99939 19.0631 4.99939C18.914 4.99939 18.7709 5.05863 18.6655 5.16408L16.8126 7.01696L20.983 11.1873L22.8358 9.33558C22.8882 9.28333 22.9298 9.22126 22.9581 9.15292C22.9865 9.08458 23.0011 9.01132 23.0011 8.93733C23.0011 8.86334 22.9865 8.79008 22.9581 8.72174C22.9298 8.65341 22.8882 8.59133 22.8358 8.53908L19.4608 5.16408V5.16408ZM20.1876 11.9827L16.0172 7.81233L8.70471 15.1248H8.93759C9.08677 15.1248 9.22985 15.1841 9.33533 15.2896C9.44082 15.3951 9.50009 15.5381 9.50009 15.6873V16.2498H10.0626C10.2118 16.2498 10.3548 16.3091 10.4603 16.4146C10.5658 16.5201 10.6251 16.6631 10.6251 16.8123V17.3748H11.1876C11.3368 17.3748 11.4798 17.4341 11.5853 17.5396C11.6908 17.6451 11.7501 17.7881 11.7501 17.9373V18.4998H12.3126C12.4618 18.4998 12.6048 18.5591 12.7103 18.6646C12.8158 18.7701 12.8751 18.9131 12.8751 19.0623V19.2952L20.1876 11.9827V11.9827ZM11.7861 20.3842C11.7624 20.3213 11.7502 20.2546 11.7501 20.1873V19.6248H11.1876C11.0384 19.6248 10.8953 19.5656 10.7898 19.4601C10.6844 19.3546 10.6251 19.2115 10.6251 19.0623V18.4998H10.0626C9.9134 18.4998 9.77033 18.4406 9.66484 18.3351C9.55935 18.2296 9.50009 18.0865 9.50009 17.9373V17.3748H8.93759C8.7884 17.3748 8.64533 17.3156 8.53984 17.2101C8.43435 17.1046 8.37509 16.9615 8.37509 16.8123V16.2498H7.81259C7.74534 16.2497 7.67865 16.2375 7.61571 16.2138L7.41434 16.4141C7.36073 16.4681 7.31863 16.5324 7.29059 16.6031L5.04059 22.2281C4.99967 22.3303 4.98965 22.4423 5.01178 22.5501C5.03391 22.658 5.0872 22.757 5.16506 22.8349C5.24292 22.9127 5.34191 22.966 5.44977 22.9881C5.55763 23.0103 5.66962 23.0002 5.77184 22.9593L11.3968 20.7093C11.4676 20.6813 11.5319 20.6392 11.5858 20.5856L11.7861 20.3853V20.3842Z"
        fill="black"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_0_1"
        x="0"
        y="0"
        width="30"
        height="30"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.2 0 0 0 0 0.196078 0 0 0 0 0.180392 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_0_1"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_0_1">
        <rect width="18" height="18" fill="white" transform="translate(5 5)" />
      </clipPath>
    </defs>
  </svg>
);
