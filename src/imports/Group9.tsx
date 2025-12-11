import svgPaths from "./svg-e486tc1oci";

function Group() {
  return (
    <div className="absolute contents left-[193.98px] top-0">
      <p className="absolute font-['IBM_Plex_Mono:SemiBold',sans-serif] leading-[normal] left-[193.98px] not-italic text-[#564256] text-[133.012px] top-0 w-[1037.77px]">Getsppoted.ai</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-[203.675px] left-0 top-[26.33px] w-[172.34px]" data-name="logo 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 173 204">
        <g clipPath="url(#clip0_3_1433)" id="logo 1">
          <rect fill="var(--fill-0, white)" height="146.371" id="Rectangle 1" width="129.845" x="28.33" y="29.5102" />
          <path d={svgPaths.p3646c800} fill="var(--fill-0, #FC814A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_1433">
            <rect fill="white" height="203.675" width="172.34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[26.33px]">
      <Logo />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
      <Group1 />
    </div>
  );
}

export default function Group3() {
  return (
    <div className="relative size-full">
      <Group2 />
      <p className="absolute font-['IBM_Plex_Mono:SemiBold',sans-serif] leading-[normal] left-[200.9px] not-italic text-[#564256] text-[33.253px] top-[180.12px] w-[638.735px]">
        <span>{`Get brand visibility in `}</span>
        <span className="text-[#fc814a]">{`SEO & AI`}</span>
      </p>
    </div>
  );
}