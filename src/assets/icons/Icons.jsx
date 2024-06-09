import React from "react";

export const IconsGrid = ({
  className,
  color = "https://c.animaapp.com/mfyNgUvy/img/color-1.svg",
}) => {
  return (
    <div className={`relative w-5 h-5 ${className}`}>
      <img
        className="absolute w-[15px] h-[15px] top-[3px] left-0.5"
        alt="Color"
        src={color}
      />
    </div>
  );
};

export const IconsHardDrive = ({ className }) => {
  return (
    <div className={`relative w-5 h-5 ${className}`}>
      <img
        className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
        alt="Color"
        src="https://c.animaapp.com/mfyNgUvy/img/color-14.svg"
      />
    </div>
  );
};

export const IconsLayers = ({
  className,
  color = "https://c.animaapp.com/mfyNgUvy/img/color-3.svg",
}) => {
  return (
    <div className={`relative w-5 h-5 ${className}`}>
      <img
        className="absolute w-[15px] h-[15px] top-0.5 left-[3px]"
        alt="Color"
        src={color}
      />
    </div>
  );
};

export const IconsMenuMenu = ({ className }) => {
  return (
    <div className={`relative w-[21px] h-[21px] ${className}`}>
      <img
        className="absolute w-4 h-2.5 top-[5px] left-[3px]"
        alt="Color"
        src="https://c.animaapp.com/mfyNgUvy/img/color-16.svg"
      />
    </div>
  );
};

export const IconsSync = ({
  className,
  colorClassName,
  color = "https://c.animaapp.com/mfyNgUvy/img/color-4.svg",
}) => {
  return (
    <div
      className={`relative w-4 h-4 rounded-sm shadow-[0px_4px_4px_#00000040] ${className}`}
    >
      <img
        className={`absolute w-3 h-[11px] top-[3px] left-0.5 ${colorClassName}`}
        alt="Color"
        src={color}
      />
    </div>
  );
};

export const MobilePrimaryswitch = ({ className }) => {
  return (
    <div className={`relative w-[83px] h-5 ${className}`}>
      <div className="absolute w-44 h-[27px] -top-0.5 left-10">
        <img
          className="absolute w-[42px] h-[27px] top-0 left-0"
          alt="Switch on"
          src="https://c.animaapp.com/mfyNgUvy/img/switch-on-1@2x.png"
        />
        <div className="absolute w-[146px] h-5 top-0.5 left-[30px] [font-family:'Nunito',Helvetica] font-bold text-[#221f1f] text-base text-right tracking-[0] leading-[normal]">
          Production Mode
        </div>
      </div>
      <div className="absolute w-[87px] h-5 top-0 left-[-54px] [font-family:'Nunito',Helvetica] font-bold text-[#221f1f] text-base text-right tracking-[0] leading-[normal]">
        Test Mode
      </div>
    </div>
  );
};

export const Component19 = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="22"
      viewBox="0 0 22 22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11.9091C1 13.25 2.15547 14.3353 3.57713 14.3353H18.423C19.8445 14.3353 21 13.25 21 11.9091V10.0909C21 8.75002 19.8445 7.66479 18.423 7.66479H3.57713C2.15547 7.66479 1 8.75002 1 10.0909V11.9091Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="0.714286"
      />
      <path
        d="M1 5.24431C1 6.57954 2.15547 7.66477 3.57713 7.66477H18.423C19.8445 7.66477 21 6.57954 21 5.24431V3.42613C21 2.08522 19.8445 1 18.423 1H3.57713C2.15547 1 1 2.08522 1 3.42613V5.24431Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="0.714286"
      />
      <path
        d="M1 18.5738C1 19.9148 2.15547 21 3.57713 21H18.423C19.8445 21 21 19.9148 21 18.5738V16.7556C21 15.4205 19.8445 14.3353 18.423 14.3353H3.57713C2.15547 14.3353 1 15.4205 1 16.7556V18.5738Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="0.714286"
      />
      <path
        d="M18.3564 4.34555C18.3564 4.84555 17.9209 5.25464 17.3884 5.25464C16.8499 5.25464 16.4205 4.84555 16.4205 4.34555C16.4205 3.83986 16.8499 3.43646 17.3884 3.43646C17.9209 3.43646 18.3564 3.83986 18.3564 4.34555Z"
        fill="black"
      />
      <path
        d="M18.3564 11.1817C18.3564 11.6818 17.9209 12.0908 17.3884 12.0908C16.8499 12.0908 16.4205 11.6818 16.4205 11.1817C16.4205 10.6761 16.8499 10.2727 17.3884 10.2727C17.9209 10.2727 18.3564 10.6761 18.3564 11.1817Z"
        fill="black"
      />
      <path
        d="M18.3564 17.8726C18.3564 18.3726 17.9209 18.7817 17.3884 18.7817C16.8499 18.7817 16.4205 18.3726 16.4205 17.8726C16.4205 17.3669 16.8499 16.9635 17.3884 16.9635C17.9209 16.9635 18.3564 17.3669 18.3564 17.8726Z"
        fill="black"
      />
    </svg>
  );
};

export const Component191 = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="22"
      viewBox="0 0 22 22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11.9091C1 13.25 2.15547 14.3353 3.57713 14.3353H18.423C19.8445 14.3353 21 13.25 21 11.9091V10.0909C21 8.75003 19.8445 7.66479 18.423 7.66479H3.57713C2.15547 7.66479 1 8.75003 1 10.0909V11.9091Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.71"
      />
      <path
        d="M1 5.24431C1 6.57954 2.15547 7.66477 3.57713 7.66477H18.423C19.8445 7.66477 21 6.57954 21 5.24431V3.42613C21 2.08522 19.8445 1 18.423 1H3.57713C2.15547 1 1 2.08522 1 3.42613V5.24431Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.71"
      />
      <path
        d="M1 18.5739C1 19.9148 2.15547 21 3.57713 21H18.423C19.8445 21 21 19.9148 21 18.5739V16.7557C21 15.4206 19.8445 14.3353 18.423 14.3353H3.57713C2.15547 14.3353 1 15.4206 1 16.7557V18.5739Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.71"
      />
      <path
        d="M18.3563 4.34549C18.3563 4.84549 17.9208 5.25458 17.3883 5.25458C16.8499 5.25458 16.4204 4.84549 16.4204 4.34549C16.4204 3.8398 16.8499 3.4364 17.3883 3.4364C17.9208 3.4364 18.3563 3.8398 18.3563 4.34549Z"
        fill="black"
      />
      <path
        d="M18.3563 11.1818C18.3563 11.6819 17.9208 12.0909 17.3883 12.0909C16.8499 12.0909 16.4204 11.6819 16.4204 11.1818C16.4204 10.6761 16.8499 10.2727 17.3883 10.2727C17.9208 10.2727 18.3563 10.6761 18.3563 11.1818Z"
        fill="black"
      />
      <path
        d="M18.3563 17.8726C18.3563 18.3725 17.9208 18.7817 17.3883 18.7817C16.8499 18.7817 16.4204 18.3725 16.4204 17.8726C16.4204 17.3668 16.8499 16.9635 17.3883 16.9635C17.9208 16.9635 18.3563 17.3668 18.3563 17.8726Z"
        fill="black"
      />
    </svg>
  );
};

export const Hello1 = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M15.7921 14.5006C15.5733 14.3775 15.3067 14.3743 15.0849 14.4922L12.3914 15.9227C12.1506 16.0506 12 16.301 12 16.5738V19.3924C12 19.6651 12.1506 19.9156 12.3914 20.0435L15.0849 21.474C15.3067 21.5917 15.5733 21.5885 15.7921 21.4654L18.3262 20.0404C18.5584 19.9099 18.7021 19.6642 18.7021 19.3979V16.5683C18.7021 16.3019 18.5584 16.0562 18.3262 15.9257L15.7921 14.5006ZM13.2549 16.3699L15.4298 15.2148L17.4845 16.3701C17.3688 16.4297 17.2418 16.4948 17.1071 16.5634C16.5854 16.829 15.9541 17.1436 15.4306 17.3845C14.8742 17.1428 14.2015 16.8262 13.6465 16.5594C13.5069 16.4923 13.3751 16.4284 13.2549 16.3699ZM12.8 17.0382V19.3546L15.0353 20.5418V20.5398V20.5331V20.5262V20.5195V20.5127V20.5059V20.4991V20.4925V20.4858V20.479V20.4723V20.4657V20.4589V20.4523V20.4457V20.4389V20.4323V20.4257V20.419V20.4125V20.4059V20.3993V20.3927V20.3861V20.3796V20.373V20.3665V20.3599V20.3534V20.3469V20.3404V20.3339V20.3275V20.321V20.3145V20.3081V20.3017V20.2951V20.2887V20.2823V20.2759V20.2695V20.2631V20.2567V20.2503V20.2439V20.2377V20.2313V20.225V20.2186V20.2123V20.206V20.1996V20.1933V20.187V20.1807V20.1745V20.1682V20.1619V20.1557V20.1494V20.1431V20.137V20.1307V20.1245V20.1182V20.1121V20.1059V20.0997V20.0935V20.0873V20.0811V20.0749V20.0689V20.0627V20.0565V20.0503V20.0442V20.0381V20.0319V20.0259V20.0197V20.0137V20.0075V20.0014V19.9954V19.9893V19.9831V19.9771V19.971V19.965V19.9589V19.9529V19.9468V19.9407V19.9348V19.9287V19.9227V19.9166V19.9107V19.9046V19.8987V19.8926V19.8867V19.8806V19.8747V19.8686V19.8627V19.8567V19.8507V19.8447V19.8388V19.8329V19.8269V19.821V19.8149V19.809V19.803V19.7971V19.7911V19.7853V19.7794V19.7734V19.7675V19.7615V19.7556V19.7498V19.7438V19.7379V19.7319V19.7261V19.7202V19.7142V19.7084V19.7025V19.6966V19.6907V19.6849V19.6789V19.673V19.6671V19.6613V19.6554V19.6495V19.6436V19.6378V19.6318V19.626V19.6202V19.6142V19.6084V19.6026V19.5966V19.5908V19.585V19.579V19.5732V19.5674V19.5614V19.5556V19.5498V19.5438V19.538V19.5322V19.5263V19.5204V19.5146V19.5087V19.5028V19.497V19.4911V19.4853V19.4794V19.4735V19.4677V19.4618V19.4559V19.4501V19.4443V19.4383V19.4325V19.4267V19.4207V19.4149V19.409V19.4031V19.3973V19.3914V19.3855V19.3796V19.3738V19.3679V19.362V19.3562V19.3502V19.3444V19.3385V19.3325V19.3267V19.3207V19.3149V19.309V19.303V19.2972V19.2913V19.2853V19.2795V19.2735V19.2676V19.2617V19.2557V19.2498V19.2438V19.238V19.2321V19.2261V19.2202V19.2142V19.2082V19.2022V19.1963V19.1903V19.1844V19.1785V19.1724V19.1665V19.1605V19.1545V19.1485V19.1425V19.1365V19.1305V19.1245V19.1185V19.1125V19.1065V19.1004V19.0943V19.0884V19.0823V19.0763V19.0702V19.0642V19.0581V19.0521V19.046V19.0398V19.0338V19.0277V19.0217V19.0155V19.0094V19.0033V18.9972V18.991V18.985V18.9788V18.9726V18.9665V18.9604V18.9542V18.9481V18.9419V18.9357V18.9294V18.9233V18.9171V18.9109V18.9046V18.8985V18.8922V18.886V18.8797V18.8734V18.8673V18.861V18.8547V18.8484V18.8421V18.8358V18.8295V18.8231V18.8169V18.8106V18.8042V18.7979V18.7915V18.7852V18.7788V18.7724V18.766V18.7596V18.7532V18.7468V18.7404V18.734V18.7275V18.7211V18.7147V18.7082V18.7017V18.6953V18.6887V18.6822V18.6757V18.6692V18.6627V18.6562V18.6495V18.643V18.6364V18.6299V18.6233V18.6166V18.6101V18.6035V18.5969V18.5902V18.5835V18.5769V18.5702V18.5635V18.5569V18.5501V18.5434V18.5367V18.53V18.5233V18.5164V18.5097V18.5029V18.4961V18.4893V18.4825V18.4757V18.4689V18.462V18.4551V18.4483V18.4413V18.4345V18.4276V18.4206V18.4137V18.4068V18.3998V18.3929V18.3859V18.3789V18.3718V18.3649V18.3578V18.3508V18.3437V18.3366V18.3295V18.3225V18.3154V18.3082V18.3011V18.2939V18.2868V18.2796V18.2724V18.2652V18.258V18.2508V18.2435V18.2363V18.229V18.2217V18.2145V18.2071V18.1997V18.1924V18.1851V18.1777V18.1703V18.1629V18.1555V18.1481V18.1406V18.1332V18.1257V18.1182V18.1107V18.1031V18.0957V18.0881V18.0849C14.4797 17.8414 13.8314 17.5361 13.2998 17.2804C13.1173 17.1926 12.9479 17.1103 12.8 17.0382ZM15.8353 20.5233L17.9021 19.3611V17.0549C17.7721 17.1219 17.6262 17.1969 17.4701 17.2763C16.9696 17.5311 16.3595 17.8355 15.8353 18.0788V18.0805V18.0881V18.0957V18.1031V18.1107V18.1182V18.1257V18.1332V18.1406V18.1481V18.1555V18.1629V18.1703V18.1777V18.1851V18.1924V18.1997V18.2071V18.2145V18.2217V18.229V18.2363V18.2435V18.2508V18.258V18.2652V18.2724V18.2796V18.2868V18.2939V18.3011V18.3082V18.3154V18.3225V18.3295V18.3366V18.3437V18.3508V18.3578V18.3649V18.3718V18.3789V18.3859V18.3929V18.3998V18.4068V18.4137V18.4206V18.4276V18.4345V18.4413V18.4483V18.4551V18.462V18.4689V18.4757V18.4825V18.4893V18.4961V18.5029V18.5097V18.5164V18.5233V18.53V18.5367V18.5434V18.5501V18.5569V18.5635V18.5702V18.5769V18.5835V18.5902V18.5969V18.6035V18.6101V18.6166V18.6233V18.6299V18.6364V18.643V18.6495V18.6562V18.6627V18.6692V18.6757V18.6822V18.6887V18.6953V18.7017V18.7082V18.7147V18.7211V18.7275V18.734V18.7404V18.7468V18.7532V18.7596V18.766V18.7724V18.7788V18.7852V18.7915V18.7979V18.8042V18.8106V18.8169V18.8231V18.8295V18.8358V18.8421V18.8484V18.8547V18.861V18.8673V18.8734V18.8797V18.886V18.8922V18.8985V18.9046V18.9109V18.9171V18.9233V18.9294V18.9357V18.9419V18.9481V18.9542V18.9604V18.9665V18.9726V18.9788V18.985V18.991V18.9972V19.0033V19.0094V19.0155V19.0217V19.0277V19.0338V19.0398V19.046V19.0521V19.0581V19.0642V19.0702V19.0763V19.0823V19.0884V19.0943V19.1004V19.1065V19.1125V19.1185V19.1245V19.1305V19.1365V19.1425V19.1485V19.1545V19.1605V19.1665V19.1724V19.1785V19.1844V19.1903V19.1963V19.2022V19.2082V19.2142V19.2202V19.2261V19.2321V19.238V19.2438V19.2498V19.2557V19.2617V19.2676V19.2735V19.2795V19.2853V19.2913V19.2972V19.303V19.309V19.3149V19.3207V19.3267V19.3325V19.3385V19.3444V19.3502V19.3562V19.362V19.3679V19.3738V19.3796V19.3855V19.3914V19.3973V19.4031V19.409V19.4149V19.4207V19.4267V19.4325V19.4383V19.4443V19.4501V19.4559V19.4618V19.4677V19.4735V19.4794V19.4853V19.4911V19.497V19.5028V19.5087V19.5146V19.5204V19.5263V19.5322V19.538V19.5438V19.5498V19.5556V19.5614V19.5674V19.5732V19.579V19.585V19.5908V19.5966V19.6026V19.6084V19.6142V19.6202V19.626V19.6318V19.6378V19.6436V19.6495V19.6554V19.6613V19.6671V19.673V19.6789V19.6849V19.6907V19.6966V19.7025V19.7084V19.7142V19.7202V19.7261V19.7319V19.7379V19.7438V19.7498V19.7556V19.7615V19.7675V19.7734V19.7794V19.7853V19.7911V19.7971V19.803V19.809V19.8149V19.821V19.8269V19.8329V19.8388V19.8447V19.8507V19.8567V19.8627V19.8686V19.8747V19.8806V19.8867V19.8926V19.8987V19.9046V19.9107V19.9166V19.9227V19.9287V19.9348V19.9407V19.9468V19.9529V19.9589V19.965V19.971V19.9771V19.9831V19.9893V19.9954V20.0014V20.0075V20.0137V20.0197V20.0259V20.0319V20.0381V20.0442V20.0503V20.0565V20.0627V20.0689V20.0749V20.0811V20.0873V20.0935V20.0997V20.1059V20.1121V20.1182V20.1245V20.1307V20.137V20.1431V20.1494V20.1557V20.1619V20.1682V20.1745V20.1807V20.187V20.1933V20.1996V20.206V20.2123V20.2186V20.225V20.2313V20.2377V20.2439V20.2503V20.2567V20.2631V20.2695V20.2759V20.2823V20.2887V20.2951V20.3017V20.3081V20.3145V20.321V20.3275V20.3339V20.3404V20.3469V20.3534V20.3599V20.3665V20.373V20.3796V20.3861V20.3927V20.3993V20.4059V20.4125V20.419V20.4257V20.4323V20.4389V20.4457V20.4523V20.4589V20.4657V20.4723V20.479V20.4858V20.4925V20.4991V20.5059V20.5127V20.5195V20.5233Z"
        fill="black"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M15.7921 6.50064C15.5733 6.37755 15.3067 6.37434 15.0849 6.49214L12.3914 7.92262C12.1506 8.05054 12 8.30101 12 8.57375V11.3923C12 11.6651 12.1506 11.9155 12.3914 12.0435L15.0849 13.474C15.3067 13.5917 15.5733 13.5885 15.7921 13.4654L18.3262 12.0404C18.5584 11.9099 18.7021 11.6642 18.7021 11.3978V8.56826C18.7021 8.30188 18.5584 8.05621 18.3262 7.92563L15.7921 6.50064ZM13.2549 8.36992L15.4298 7.21477L17.4845 8.3701C17.3688 8.42965 17.2418 8.4948 17.1071 8.5634C16.5854 8.82897 15.9541 9.14357 15.4306 9.38452C14.8742 9.14282 14.2015 8.82624 13.6465 8.55936C13.5069 8.49224 13.3751 8.42842 13.2549 8.36992ZM12.8 9.03824V11.3546L15.0353 12.5417V12.5398V12.5331V12.5262V12.5195V12.5127V12.5059V12.4991V12.4925V12.4858V12.479V12.4723V12.4656V12.4589V12.4523V12.4456V12.4389V12.4323V12.4256V12.419V12.4125V12.4059V12.3992V12.3927V12.3861V12.3796V12.3729V12.3664V12.3599V12.3534V12.3469V12.3404V12.3339V12.3275V12.321V12.3144V12.308V12.3016V12.2951V12.2887V12.2823V12.2759V12.2695V12.2631V12.2567V12.2503V12.2439V12.2376V12.2312V12.225V12.2186V12.2123V12.206V12.1996V12.1933V12.187V12.1807V12.1744V12.1682V12.1619V12.1557V12.1494V12.1431V12.1369V12.1307V12.1245V12.1182V12.112V12.1059V12.0997V12.0935V12.0872V12.0811V12.0749V12.0688V12.0627V12.0565V12.0503V12.0441V12.0381V12.0319V12.0259V12.0197V12.0136V12.0075V12.0014V11.9953V11.9892V11.9832V11.9771V11.971V11.965V11.9589V11.9529V11.9468V11.9408V11.9347V11.9287V11.9227V11.9167V11.9106V11.9046V11.8986V11.8926V11.8866V11.8806V11.8746V11.8686V11.8627V11.8567V11.8507V11.8447V11.8388V11.8328V11.8269V11.8209V11.8149V11.809V11.8031V11.7971V11.7912V11.7852V11.7793V11.7734V11.7675V11.7615V11.7556V11.7497V11.7438V11.7379V11.732V11.7261V11.7202V11.7143V11.7084V11.7025V11.6966V11.6907V11.6848V11.6789V11.673V11.6671V11.6612V11.6554V11.6495V11.6436V11.6377V11.6319V11.626V11.6201V11.6142V11.6084V11.6025V11.5966V11.5908V11.5849V11.579V11.5732V11.5673V11.5614V11.5556V11.5497V11.5439V11.538V11.5321V11.5263V11.5204V11.5146V11.5087V11.5028V11.497V11.4911V11.4852V11.4794V11.4735V11.4677V11.4618V11.4559V11.4501V11.4442V11.4383V11.4325V11.4266V11.4207V11.4149V11.409V11.4031V11.3973V11.3914V11.3855V11.3796V11.3737V11.3679V11.362V11.3561V11.3502V11.3443V11.3384V11.3325V11.3267V11.3208V11.3148V11.3089V11.3031V11.2971V11.2912V11.2853V11.2794V11.2735V11.2676V11.2616V11.2557V11.2498V11.2439V11.2379V11.232V11.226V11.2201V11.2142V11.2082V11.2023V11.1963V11.1903V11.1844V11.1784V11.1724V11.1664V11.1605V11.1545V11.1485V11.1425V11.1365V11.1305V11.1245V11.1185V11.1124V11.1064V11.1004V11.0944V11.0883V11.0823V11.0762V11.0702V11.0641V11.0581V11.052V11.0459V11.0399V11.0338V11.0277V11.0216V11.0155V11.0094V11.0033V10.9972V10.991V10.9849V10.9788V10.9726V10.9665V10.9603V10.9542V10.948V10.9418V10.9356V10.9295V10.9233V10.9171V10.9108V10.9046V10.8984V10.8922V10.8859V10.8797V10.8735V10.8672V10.8609V10.8547V10.8484V10.8421V10.8358V10.8295V10.8232V10.8169V10.8105V10.8042V10.7979V10.7915V10.7851V10.7788V10.7724V10.766V10.7596V10.7532V10.7468V10.7404V10.734V10.7275V10.7211V10.7146V10.7082V10.7017V10.6952V10.6887V10.6822V10.6757V10.6692V10.6626V10.6561V10.6496V10.643V10.6364V10.6299V10.6233V10.6167V10.61V10.6034V10.5968V10.5902V10.5835V10.5769V10.5702V10.5635V10.5568V10.5501V10.5434V10.5367V10.5299V10.5232V10.5164V10.5097V10.5029V10.4961V10.4893V10.4825V10.4756V10.4688V10.462V10.4551V10.4482V10.4413V10.4344V10.4275V10.4206V10.4137V10.4067V10.3998V10.3928V10.3858V10.3788V10.3718V10.3648V10.3578V10.3507V10.3437V10.3366V10.3295V10.3224V10.3153V10.3082V10.3011V10.2939V10.2868V10.2796V10.2724V10.2652V10.258V10.2507V10.2435V10.2362V10.229V10.2217V10.2144V10.2071V10.1998V10.1924V10.1851V10.1777V10.1703V10.1629V10.1555V10.148V10.1406V10.1332V10.1257V10.1182V10.1107V10.1032V10.0956V10.0881V10.0849C14.4797 9.84144 13.8314 9.53599 13.2998 9.28034C13.1173 9.19255 12.9479 9.11037 12.8 9.03824ZM15.8353 12.5232L17.9021 11.3611V9.05486C17.7721 9.12188 17.6262 9.19679 17.4701 9.27632C16.9696 9.53109 16.3595 9.83551 15.8353 10.0788V10.0805V10.0881V10.0956V10.1032V10.1107V10.1182V10.1257V10.1332V10.1406V10.148V10.1555V10.1629V10.1703V10.1777V10.1851V10.1924V10.1998V10.2071V10.2144V10.2217V10.229V10.2362V10.2435V10.2507V10.258V10.2652V10.2724V10.2796V10.2868V10.2939V10.3011V10.3082V10.3153V10.3224V10.3295V10.3366V10.3437V10.3507V10.3578V10.3648V10.3718V10.3788V10.3858V10.3928V10.3998V10.4067V10.4137V10.4206V10.4275V10.4344V10.4413V10.4482V10.4551V10.462V10.4688V10.4756V10.4825V10.4893V10.4961V10.5029V10.5097V10.5164V10.5232V10.5299V10.5367V10.5434V10.5501V10.5568V10.5635V10.5702V10.5769V10.5835V10.5902V10.5968V10.6034V10.61V10.6167V10.6233V10.6299V10.6364V10.643V10.6496V10.6561V10.6626V10.6692V10.6757V10.6822V10.6887V10.6952V10.7017V10.7082V10.7146V10.7211V10.7275V10.734V10.7404V10.7468V10.7532V10.7596V10.766V10.7724V10.7788V10.7851V10.7915V10.7979V10.8042V10.8105V10.8169V10.8232V10.8295V10.8358V10.8421V10.8484V10.8547V10.8609V10.8672V10.8735V10.8797V10.8859V10.8922V10.8984V10.9046V10.9108V10.9171V10.9233V10.9295V10.9356V10.9418V10.948V10.9542V10.9603V10.9665V10.9726V10.9788V10.9849V10.991V10.9972V11.0033V11.0094V11.0155V11.0216V11.0277V11.0338V11.0399V11.0459V11.052V11.0581V11.0641V11.0702V11.0762V11.0823V11.0883V11.0944V11.1004V11.1064V11.1124V11.1185V11.1245V11.1305V11.1365V11.1425V11.1485V11.1545V11.1605V11.1664V11.1724V11.1784V11.1844V11.1903V11.1963V11.2023V11.2082V11.2142V11.2201V11.226V11.232V11.2379V11.2439V11.2498V11.2557V11.2616V11.2676V11.2735V11.2794V11.2853V11.2912V11.2971V11.3031V11.3089V11.3148V11.3208V11.3267V11.3325V11.3384V11.3443V11.3502V11.3561V11.362V11.3679V11.3737V11.3796V11.3855V11.3914V11.3973V11.4031V11.409V11.4149V11.4207V11.4266V11.4325V11.4383V11.4442V11.4501V11.4559V11.4618V11.4677V11.4735V11.4794V11.4852V11.4911V11.497V11.5028V11.5087V11.5146V11.5204V11.5263V11.5321V11.538V11.5439V11.5497V11.5556V11.5614V11.5673V11.5732V11.579V11.5849V11.5908V11.5966V11.6025V11.6084V11.6142V11.6201V11.626V11.6319V11.6377V11.6436V11.6495V11.6554V11.6612V11.6671V11.673V11.6789V11.6848V11.6907V11.6966V11.7025V11.7084V11.7143V11.7202V11.7261V11.732V11.7379V11.7438V11.7497V11.7556V11.7615V11.7675V11.7734V11.7793V11.7852V11.7912V11.7971V11.8031V11.809V11.8149V11.8209V11.8269V11.8328V11.8388V11.8447V11.8507V11.8567V11.8627V11.8686V11.8746V11.8806V11.8866V11.8926V11.8986V11.9046V11.9106V11.9167V11.9227V11.9287V11.9347V11.9408V11.9468V11.9529V11.9589V11.965V11.971V11.9771V11.9832V11.9892V11.9953V12.0014V12.0075V12.0136V12.0197V12.0259V12.0319V12.0381V12.0441V12.0503V12.0565V12.0627V12.0688V12.0749V12.0811V12.0872V12.0935V12.0997V12.1059V12.112V12.1182V12.1245V12.1307V12.1369V12.1431V12.1494V12.1557V12.1619V12.1682V12.1744V12.1807V12.187V12.1933V12.1996V12.206V12.2123V12.2186V12.225V12.2312V12.2376V12.2439V12.2503V12.2567V12.2631V12.2695V12.2759V12.2823V12.2887V12.2951V12.3016V12.308V12.3144V12.321V12.3275V12.3339V12.3404V12.3469V12.3534V12.3599V12.3664V12.3729V12.3796V12.3861V12.3927V12.3992V12.4059V12.4125V12.419V12.4256V12.4323V12.4389V12.4456V12.4523V12.4589V12.4656V12.4723V12.479V12.4858V12.4925V12.4991V12.5059V12.5127V12.5195V12.5232Z"
        fill="black"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M8.93491 10.3804C8.71602 10.2573 8.44953 10.2541 8.22774 10.3719L5.53427 11.8024C5.29339 11.9303 5.14282 12.1807 5.14282 12.4535V15.2721C5.14282 15.5449 5.29339 15.7953 5.53427 15.9233L8.22774 17.3537C8.44953 17.4715 8.71602 17.4683 8.93491 17.3452L11.469 15.9202C11.7012 15.7897 11.8449 15.5439 11.8449 15.2775V12.4481C11.8449 12.1817 11.7012 11.936 11.469 11.8054L8.93491 10.3804ZM6.39763 12.2497L8.57269 11.0945L10.6272 12.2499C10.5117 12.3094 10.3846 12.3746 10.2499 12.4431C9.72824 12.7087 9.09693 13.0234 8.57351 13.2643C8.01704 13.0226 7.34433 12.706 6.78933 12.4391C6.64973 12.3721 6.5179 12.3082 6.39763 12.2497ZM5.94282 12.918V15.2343L8.17817 16.4215V16.4196V16.4127V16.406V16.3993V16.3924V16.3857V16.3789V16.3722V16.3654V16.3588V16.3521V16.3453V16.3387V16.3321V16.3253V16.3187V16.3121V16.3054V16.2988V16.2922V16.2857V16.279V16.2724V16.2659V16.2594V16.2527V16.2462V16.2397V16.2332V16.2267V16.2202V16.2137V16.2071V16.2007V16.1942V16.1878V16.1813V16.1749V16.1685V16.1621V16.1556V16.1492V16.1428V16.1365V16.1301V16.1237V16.1173V16.111V16.1046V16.0983V16.0921V16.0857V16.0794V16.0731V16.0668V16.0605V16.0542V16.0479V16.0417V16.0354V16.0292V16.0229V16.0166V16.0105V16.0043V15.998V15.9918V15.9857V15.9794V15.9732V15.967V15.9609V15.9547V15.9485V15.9423V15.9363V15.9301V15.9239V15.9179V15.9117V15.9055V15.8995V15.8934V15.8873V15.8812V15.8751V15.869V15.8629V15.8569V15.8508V15.8447V15.8387V15.8326V15.8266V15.8205V15.8145V15.8085V15.8025V15.7964V15.7905V15.7844V15.7783V15.7724V15.7663V15.7604V15.7543V15.7484V15.7425V15.7364V15.7305V15.7245V15.7186V15.7126V15.7066V15.7006V15.6947V15.6887V15.6828V15.6769V15.6709V15.665V15.659V15.6532V15.6473V15.6413V15.6354V15.6294V15.6236V15.6177V15.6117V15.6058V15.5999V15.594V15.5882V15.5822V15.5763V15.5705V15.5645V15.5587V15.5527V15.5469V15.541V15.5351V15.5292V15.5234V15.5175V15.5116V15.5058V15.4998V15.494V15.4882V15.4822V15.4764V15.4706V15.4646V15.4588V15.453V15.447V15.4412V15.4354V15.4294V15.4236V15.4178V15.4119V15.406V15.4002V15.3943V15.3884V15.3826V15.3767V15.3709V15.365V15.3591V15.3533V15.3474V15.3415V15.3357V15.3299V15.3239V15.3181V15.3123V15.3063V15.3005V15.2947V15.2887V15.2829V15.277V15.2711V15.2653V15.2594V15.2535V15.2476V15.2418V15.2358V15.23V15.2241V15.2182V15.2123V15.2065V15.2005V15.1946V15.1887V15.1828V15.1769V15.171V15.1651V15.1591V15.1532V15.1474V15.1414V15.1355V15.1295V15.1236V15.1177V15.1117V15.1058V15.0998V15.0939V15.0879V15.082V15.0761V15.0701V15.0642V15.0581V15.0522V15.0462V15.0402V15.0342V15.0283V15.0222V15.0163V15.0102V15.0043V14.9982V14.9922V14.9862V14.9802V14.9741V14.9681V14.962V14.9561V14.95V14.9439V14.9379V14.9318V14.9257V14.9196V14.9135V14.9075V14.9013V14.8953V14.8892V14.883V14.877V14.8708V14.8646V14.8586V14.8524V14.8462V14.8401V14.8339V14.8277V14.8215V14.8154V14.8092V14.803V14.7969V14.7906V14.7844V14.7782V14.7719V14.7657V14.7595V14.7532V14.7469V14.7407V14.7345V14.7282V14.7219V14.7156V14.7092V14.7029V14.6966V14.6903V14.6839V14.6777V14.6713V14.6649V14.6586V14.6522V14.6458V14.6394V14.633V14.6266V14.6202V14.6138V14.6073V14.6009V14.5943V14.5879V14.5814V14.5749V14.5685V14.562V14.5555V14.549V14.5425V14.5358V14.5293V14.5228V14.5162V14.5097V14.503V14.4964V14.4898V14.4831V14.4765V14.4699V14.4633V14.4566V14.45V14.4433V14.4366V14.4299V14.4231V14.4164V14.4097V14.4029V14.3962V14.3894V14.3827V14.3758V14.3691V14.3622V14.3554V14.3486V14.3418V14.3349V14.3279V14.3211V14.3142V14.3073V14.3004V14.2934V14.2865V14.2796V14.2726V14.2655V14.2586V14.2516V14.2446V14.2375V14.2305V14.2235V14.2164V14.2093V14.2022V14.1951V14.1879V14.1809V14.1737V14.1666V14.1594V14.1522V14.145V14.1378V14.1305V14.1233V14.1161V14.1087V14.1014V14.0941V14.0868V14.0795V14.0722V14.0649V14.0574V14.0501V14.0427V14.0353V14.0278V14.0204V14.013V14.0054V13.998V13.9905V13.9829V13.9754V13.9678V13.9646C7.62251 13.7212 6.97429 13.4157 6.44264 13.1601C6.26006 13.0723 6.09067 12.9901 5.94282 12.918ZM8.97817 16.403L11.0449 15.2409V12.9346C10.915 13.0017 10.769 13.0765 10.6128 13.1561C10.1124 13.4108 9.50233 13.7153 8.97817 13.9586V13.9603V13.9678V13.9754V13.9829V13.9905V13.998V14.0054V14.013V14.0204V14.0278V14.0353V14.0427V14.0501V14.0574V14.0649V14.0722V14.0795V14.0868V14.0941V14.1014V14.1087V14.1161V14.1233V14.1305V14.1378V14.145V14.1522V14.1594V14.1666V14.1737V14.1809V14.1879V14.1951V14.2022V14.2093V14.2164V14.2235V14.2305V14.2375V14.2446V14.2516V14.2586V14.2655V14.2726V14.2796V14.2865V14.2934V14.3004V14.3073V14.3142V14.3211V14.3279V14.3349V14.3418V14.3486V14.3554V14.3622V14.3691V14.3758V14.3827V14.3894V14.3962V14.4029V14.4097V14.4164V14.4231V14.4299V14.4366V14.4433V14.45V14.4566V14.4633V14.4699V14.4765V14.4831V14.4898V14.4964V14.503V14.5097V14.5162V14.5228V14.5293V14.5358V14.5425V14.549V14.5555V14.562V14.5685V14.5749V14.5814V14.5879V14.5943V14.6009V14.6073V14.6138V14.6202V14.6266V14.633V14.6394V14.6458V14.6522V14.6586V14.6649V14.6713V14.6777V14.6839V14.6903V14.6966V14.7029V14.7092V14.7156V14.7219V14.7282V14.7345V14.7407V14.7469V14.7532V14.7595V14.7657V14.7719V14.7782V14.7844V14.7906V14.7969V14.803V14.8092V14.8154V14.8215V14.8277V14.8339V14.8401V14.8462V14.8524V14.8586V14.8646V14.8708V14.877V14.883V14.8892V14.8953V14.9013V14.9075V14.9135V14.9196V14.9257V14.9318V14.9379V14.9439V14.95V14.9561V14.962V14.9681V14.9741V14.9802V14.9862V14.9922V14.9982V15.0043V15.0102V15.0163V15.0222V15.0283V15.0342V15.0402V15.0462V15.0522V15.0581V15.0642V15.0701V15.0761V15.082V15.0879V15.0939V15.0998V15.1058V15.1117V15.1177V15.1236V15.1295V15.1355V15.1414V15.1474V15.1532V15.1591V15.1651V15.171V15.1769V15.1828V15.1887V15.1946V15.2005V15.2065V15.2123V15.2182V15.2241V15.23V15.2358V15.2418V15.2476V15.2535V15.2594V15.2653V15.2711V15.277V15.2829V15.2887V15.2947V15.3005V15.3063V15.3123V15.3181V15.3239V15.3299V15.3357V15.3415V15.3474V15.3533V15.3591V15.365V15.3709V15.3767V15.3826V15.3884V15.3943V15.4002V15.406V15.4119V15.4178V15.4236V15.4294V15.4354V15.4412V15.447V15.453V15.4588V15.4646V15.4706V15.4764V15.4822V15.4882V15.494V15.4998V15.5058V15.5116V15.5175V15.5234V15.5292V15.5351V15.541V15.5469V15.5527V15.5587V15.5645V15.5705V15.5763V15.5822V15.5882V15.594V15.5999V15.6058V15.6117V15.6177V15.6236V15.6294V15.6354V15.6413V15.6473V15.6532V15.659V15.665V15.6709V15.6769V15.6828V15.6887V15.6947V15.7006V15.7066V15.7126V15.7186V15.7245V15.7305V15.7364V15.7425V15.7484V15.7543V15.7604V15.7663V15.7724V15.7783V15.7844V15.7905V15.7964V15.8025V15.8085V15.8145V15.8205V15.8266V15.8326V15.8387V15.8447V15.8508V15.8569V15.8629V15.869V15.8751V15.8812V15.8873V15.8934V15.8995V15.9055V15.9117V15.9179V15.9239V15.9301V15.9363V15.9423V15.9485V15.9547V15.9609V15.967V15.9732V15.9794V15.9857V15.9918V15.998V16.0043V16.0105V16.0166V16.0229V16.0292V16.0354V16.0417V16.0479V16.0542V16.0605V16.0668V16.0731V16.0794V16.0857V16.0921V16.0983V16.1046V16.111V16.1173V16.1237V16.1301V16.1365V16.1428V16.1492V16.1556V16.1621V16.1685V16.1749V16.1813V16.1878V16.1942V16.2007V16.2071V16.2137V16.2202V16.2267V16.2332V16.2397V16.2462V16.2527V16.2594V16.2659V16.2724V16.279V16.2857V16.2922V16.2988V16.3054V16.3121V16.3187V16.3253V16.3321V16.3387V16.3453V16.3521V16.3588V16.3654V16.3722V16.3789V16.3857V16.3924V16.3993V16.403Z"
        fill="black"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M8.93491 2.38041C8.71602 2.25731 8.44953 2.25411 8.22774 2.3719L5.53427 3.80237C5.29339 3.9303 5.14282 4.18076 5.14282 4.4535V7.27209C5.14282 7.54483 5.29339 7.79529 5.53427 7.92322L8.22774 9.35369C8.44953 9.47148 8.71602 9.46828 8.93491 9.34518L11.469 7.92019C11.7012 7.78962 11.8449 7.54395 11.8449 7.27757V4.44802C11.8449 4.18164 11.7012 3.93597 11.469 3.8054L8.93491 2.38041ZM6.39763 4.24967L8.57269 3.09452L10.6272 4.24987C10.5117 4.30941 10.3846 4.37457 10.2499 4.44316C9.72824 4.70874 9.09693 5.02332 8.57351 5.26428C8.01704 5.02258 7.34433 4.70599 6.78933 4.43913C6.64973 4.37201 6.5179 4.30818 6.39763 4.24967ZM5.94282 4.91799V7.23437L8.17817 8.42154V8.41958V8.41277V8.40598V8.39921V8.39244V8.38567V8.37893V8.3722V8.36547V8.35876V8.35205V8.34537V8.33868V8.33201V8.32535V8.3187V8.31206V8.30543V8.29882V8.2922V8.28561V8.27901V8.27244V8.26587V8.25931V8.25276V8.24622V8.23969V8.23317V8.22666V8.22015V8.21366V8.20718V8.20071V8.19425V8.18779V8.18134V8.17491V8.16847V8.16206V8.15565V8.14924V8.14285V8.13646V8.13009V8.12372V8.11737V8.11101V8.10467V8.09834V8.09201V8.08569V8.07938V8.07307V8.06677V8.06049V8.0542V8.04794V8.04166V8.03541V8.02916V8.02292V8.01668V8.01045V8.00423V7.99802V7.99181V7.98561V7.97941V7.97323V7.96705V7.96087V7.9547V7.94854V7.94238V7.93623V7.9301V7.92396V7.91783V7.91171V7.90559V7.89948V7.89337V7.88727V7.88117V7.87509V7.869V7.86293V7.85685V7.85078V7.84473V7.83867V7.83262V7.82658V7.82053V7.8145V7.80846V7.80244V7.79642V7.79039V7.78438V7.77838V7.77237V7.76637V7.76038V7.75439V7.74841V7.74242V7.73644V7.73047V7.7245V7.71853V7.71257V7.70661V7.70066V7.6947V7.68876V7.68282V7.67687V7.67093V7.665V7.65907V7.65314V7.64722V7.6413V7.63538V7.62946V7.62354V7.61763V7.61172V7.60581V7.59991V7.59401V7.58811V7.58221V7.57633V7.57043V7.56454V7.55865V7.55276V7.54687V7.541V7.53511V7.52924V7.52335V7.51748V7.51161V7.50573V7.49986V7.49399V7.48812V7.48226V7.47638V7.47052V7.46466V7.45879V7.45292V7.44706V7.44119V7.43533V7.42948V7.42362V7.41775V7.41189V7.40603V7.40017V7.39431V7.38845V7.38259V7.37673V7.37087V7.36501V7.35915V7.35329V7.34742V7.34156V7.3357V7.32983V7.32397V7.3181V7.31223V7.30637V7.3005V7.29463V7.28876V7.28289V7.27701V7.27114V7.26526V7.25939V7.2535V7.24763V7.24174V7.23586V7.22997V7.22409V7.21819V7.2123V7.20641V7.20051V7.19461V7.18871V7.18281V7.1769V7.17099V7.16508V7.15917V7.15325V7.14733V7.14141V7.13548V7.12955V7.12362V7.11769V7.11175V7.10581V7.09987V7.09391V7.08796V7.08201V7.07605V7.07009V7.06412V7.05815V7.05218V7.0462V7.04022V7.03423V7.02825V7.02225V7.01625V7.01025V7.00423V6.99822V6.99221V6.98619V6.98015V6.97413V6.96809V6.96205V6.95601V6.94995V6.94389V6.93783V6.93177V6.9257V6.91962V6.91354V6.90745V6.90135V6.89525V6.88915V6.88303V6.87692V6.87079V6.86466V6.85853V6.85238V6.84623V6.84009V6.83393V6.82775V6.82158V6.8154V6.80921V6.80301V6.79682V6.79061V6.78439V6.77817V6.77194V6.76571V6.75947V6.75322V6.74695V6.74069V6.73442V6.72813V6.72185V6.71555V6.70925V6.70294V6.69662V6.69029V6.68396V6.67762V6.67126V6.6649V6.65853V6.65215V6.64577V6.63938V6.63298V6.62657V6.62014V6.61372V6.60727V6.60083V6.59438V6.58791V6.58143V6.57495V6.56846V6.56196V6.55546V6.54893V6.54241V6.53587V6.52931V6.52276V6.51619V6.50961V6.50302V6.49642V6.48981V6.48319V6.47657V6.46993V6.46327V6.45661V6.44994V6.44326V6.43657V6.42987V6.42315V6.41643V6.40969V6.40294V6.39619V6.38942V6.38263V6.37585V6.36905V6.36223V6.3554V6.34857V6.34172V6.33485V6.32798V6.3211V6.3142V6.3073V6.30037V6.29345V6.2865V6.27955V6.27258V6.26559V6.2586V6.25159V6.24458V6.23755V6.2305V6.22345V6.21637V6.20929V6.20219V6.19508V6.18796V6.18083V6.17367V6.16652V6.15934V6.15215V6.14495V6.13773V6.13051V6.12326V6.11601V6.10874V6.10145V6.09414V6.08684V6.0795V6.07217V6.06481V6.05743V6.05005V6.04266V6.03524V6.02781V6.02037V6.01291V6.00543V5.99795V5.99045V5.98293V5.9754V5.96785V5.96462C7.62251 5.72121 6.97429 5.41575 6.44264 5.16011C6.26006 5.07231 6.09067 4.99013 5.94282 4.91799ZM8.97817 8.40305L11.0449 7.24086V4.93461C10.915 5.00163 10.769 5.07655 10.6128 5.15607C10.1124 5.41084 9.50233 5.71527 8.97817 5.95855V5.96028V5.96785V5.9754V5.98293V5.99045V5.99795V6.00543V6.01291V6.02037V6.02781V6.03524V6.04266V6.05005V6.05743V6.06481V6.07217V6.0795V6.08684V6.09414V6.10145V6.10874V6.11601V6.12326V6.13051V6.13773V6.14495V6.15215V6.15934V6.16652V6.17367V6.18083V6.18796V6.19508V6.20219V6.20929V6.21637V6.22345V6.2305V6.23755V6.24458V6.25159V6.2586V6.26559V6.27258V6.27955V6.2865V6.29345V6.30037V6.3073V6.3142V6.3211V6.32798V6.33485V6.34172V6.34857V6.3554V6.36223V6.36905V6.37585V6.38263V6.38942V6.39619V6.40294V6.40969V6.41643V6.42315V6.42987V6.43657V6.44326V6.44994V6.45661V6.46327V6.46993V6.47657V6.48319V6.48981V6.49642V6.50302V6.50961V6.51619V6.52276V6.52931V6.53587V6.54241V6.54893V6.55546V6.56196V6.56846V6.57495V6.58143V6.58791V6.59438V6.60083V6.60727V6.61372V6.62014V6.62657V6.63298V6.63938V6.64577V6.65215V6.65853V6.6649V6.67126V6.67762V6.68396V6.69029V6.69662V6.70294V6.70925V6.71555V6.72185V6.72813V6.73442V6.74069V6.74695V6.75322V6.75947V6.76571V6.77194V6.77817V6.78439V6.79061V6.79682V6.80301V6.80921V6.8154V6.82158V6.82775V6.83393V6.84009V6.84623V6.85238V6.85853V6.86466V6.87079V6.87692V6.88303V6.88915V6.89525V6.90135V6.90745V6.91354V6.91962V6.9257V6.93177V6.93783V6.94389V6.94995V6.95601V6.96205V6.96809V6.97413V6.98015V6.98619V6.99221V6.99822V7.00423V7.01025V7.01625V7.02225V7.02825V7.03423V7.04022V7.0462V7.05218V7.05815V7.06412V7.07009V7.07605V7.08201V7.08796V7.09391V7.09987V7.10581V7.11175V7.11769V7.12362V7.12955V7.13548V7.14141V7.14733V7.15325V7.15917V7.16508V7.17099V7.1769V7.18281V7.18871V7.19461V7.20051V7.20641V7.2123V7.21819V7.22409V7.22997V7.23586V7.24174V7.24763V7.2535V7.25939V7.26526V7.27114V7.27701V7.28289V7.28876V7.29463V7.3005V7.30637V7.31223V7.3181V7.32397V7.32983V7.3357V7.34156V7.34742V7.35329V7.35915V7.36501V7.37087V7.37673V7.38259V7.38845V7.39431V7.40017V7.40603V7.41189V7.41775V7.42362V7.42948V7.43533V7.44119V7.44706V7.45292V7.45879V7.46466V7.47052V7.47638V7.48226V7.48812V7.49399V7.49986V7.50573V7.51161V7.51748V7.52335V7.52924V7.53511V7.541V7.54687V7.55276V7.55865V7.56454V7.57043V7.57633V7.58221V7.58811V7.59401V7.59991V7.60581V7.61172V7.61763V7.62354V7.62946V7.63538V7.6413V7.64722V7.65314V7.65907V7.665V7.67093V7.67687V7.68282V7.68876V7.6947V7.70066V7.70661V7.71257V7.71853V7.7245V7.73047V7.73644V7.74242V7.74841V7.75439V7.76038V7.76637V7.77237V7.77838V7.78438V7.79039V7.79642V7.80244V7.80846V7.8145V7.82053V7.82658V7.83262V7.83867V7.84473V7.85078V7.85685V7.86293V7.869V7.87509V7.88117V7.88727V7.89337V7.89948V7.90559V7.91171V7.91783V7.92396V7.9301V7.93623V7.94238V7.94854V7.9547V7.96087V7.96705V7.97323V7.97941V7.98561V7.99181V7.99802V8.00423V8.01045V8.01668V8.02292V8.02916V8.03541V8.04166V8.04794V8.0542V8.06049V8.06677V8.07307V8.07938V8.08569V8.09201V8.09834V8.10467V8.11101V8.11737V8.12372V8.13009V8.13646V8.14285V8.14924V8.15565V8.16206V8.16847V8.17491V8.18134V8.18779V8.19425V8.20071V8.20718V8.21366V8.22015V8.22666V8.23317V8.23969V8.24622V8.25276V8.25931V8.26587V8.27244V8.27901V8.28561V8.2922V8.29882V8.30543V8.31206V8.3187V8.32535V8.33201V8.33868V8.34537V8.35205V8.35876V8.36547V8.3722V8.37893V8.38567V8.39244V8.39921V8.40305Z"
        fill="black"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const Iconinfo2 = ({ color = "#0C5BC6", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_422)">
        <g clipPath="url(#clip1_1_422)">
          <path
            d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z"
            fill={color}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_422">
          <rect fill="white" height="24" width="24" />
        </clipPath>
        <clipPath id="clip1_1_422">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Property1Gift = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_1013)">
        <g clipPath="url(#clip1_1_1013)">
          <path
            d="M20 6H17.82C17.93 5.69 18 5.35 18 5C18 3.34 16.66 2 15 2C13.95 2 13.04 2.54 12.5 3.35L12 4.02L11.5 3.34C10.96 2.54 10.05 2 9 2C7.34 2 6 3.34 6 5C6 5.35 6.07 5.69 6.18 6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM15 4C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6C14.45 6 14 5.55 14 5C14 4.45 14.45 4 15 4ZM9 4C9.55 4 10 4.45 10 5C10 5.55 9.55 6 9 6C8.45 6 8 5.55 8 5C8 4.45 8.45 4 9 4ZM20 19H4V17H20V19ZM20 14H4V8H9.08L7 10.83L8.62 12L11 8.76L12 7.4L13 8.76L15.38 12L17 10.83L14.92 8H20V14Z"
            fill="black"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_1013">
          <rect fill="white" height="24" width="24" />
        </clipPath>
        <clipPath id="clip1_1_1013">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Property1Search = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_994)">
        <g clipPath="url(#clip1_1_994)">
          <path
            d="M18.0833 16.3333H17.1617L16.835 16.0183C17.9783 14.6883 18.6667 12.9617 18.6667 11.0833C18.6667 6.895 15.2717 3.5 11.0833 3.5C6.895 3.5 3.5 6.895 3.5 11.0833C3.5 15.2717 6.895 18.6667 11.0833 18.6667C12.9617 18.6667 14.6883 17.9783 16.0183 16.835L16.3333 17.1617V18.0833L22.1667 23.905L23.905 22.1667L18.0833 16.3333ZM11.0833 16.3333C8.17833 16.3333 5.83333 13.9883 5.83333 11.0833C5.83333 8.17833 8.17833 5.83333 11.0833 5.83333C13.9883 5.83333 16.3333 8.17833 16.3333 11.0833C16.3333 13.9883 13.9883 16.3333 11.0833 16.3333Z"
            fill={color}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_994">
          <rect fill="white" height="28" width="28" />
        </clipPath>
        <clipPath id="clip1_1_994">
          <rect fill="white" height="28" width="28" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default {
  IconsGrid,
  IconsHardDrive,
  IconsLayers,
  Property1Gift,
  Property1Search,
  Iconinfo2,
  IconsMenuMenu,
  IconsSync,
  Hello1,
  Component19,
  Component191,
  MobilePrimaryswitch,
};
