import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  CircuitBoardIcon,
  CreditCard,
  Drama,
  File,
  FileText,
  HelpCircle,
  History,
  Image,
  Laptop,
  LayoutDashboardIcon,
  Loader2,
  LogIn,
  LucideIcon,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  School,
  Settings,
  SunMedium,
  Trash,
  User,
  X,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  dashboard: LayoutDashboardIcon,
  login: LogIn,
  close: X,
  profile: CircleUserRound,
  spinner: Loader2,
  kanban: CircuitBoardIcon,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  instructor: User,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  check: Check,
  scenario: Drama,
  tutorial: School,
  history: History,
  logo: (props: LucideProps) => (
    <svg fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC"
         strokeWidth="0.192"></g>
      <g id="SVGRepo_iconCarrier"><title>microphone</title>
        <path
          d="M4 20q0 3.264 1.6 6.048t4.384 4.352 6.016 1.6 6.016-1.6 4.384-4.352 1.6-6.048q0-0.832-0.576-1.408t-1.408-0.576-1.44 0.576-0.576 1.408q0 3.328-2.336 5.664t-5.664 2.336-5.664-2.336-2.336-5.664q0-0.832-0.576-1.408t-1.408-0.576-1.44 0.576-0.576 1.408zM10.016 20q0 2.496 1.728 4.256t4.256 1.76 4.256-1.76 1.76-4.256v-1.984h-3.008q-0.416 0-0.704-0.288t-0.288-0.704 0.288-0.704 0.704-0.32h3.008v-1.984h-3.008q-0.416 0-0.704-0.288t-0.288-0.704 0.288-0.704 0.704-0.32h3.008v-1.984h-3.008q-0.416 0-0.704-0.288t-0.288-0.704 0.288-0.704 0.704-0.32h3.008v-1.984h-3.008q-0.416 0-0.704-0.288t-0.288-0.704 0.288-0.704 0.704-0.32h2.624q-0.608-1.76-2.144-2.88t-3.488-1.12q-1.92 0-3.456 1.12t-2.176 2.88h2.624q0.416 0 0.704 0.32t0.32 0.704-0.32 0.704-0.704 0.288h-2.976v1.984h2.976q0.416 0 0.704 0.32t0.32 0.704-0.32 0.704-0.704 0.288h-2.976v1.984h2.976q0.416 0 0.704 0.32t0.32 0.704-0.32 0.704-0.704 0.288h-2.976v1.984h2.976q0.416 0 0.704 0.32t0.32 0.704-0.32 0.704-0.704 0.288h-2.976v1.984z"></path>
      </g>
    </svg>
  ),
  fr: (props: LucideProps) => (
    <svg width="24px" height="24px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"
         aria-hidden="true" role="img" className="iconify iconify--twemoji" {...props}
         preserveAspectRatio="xMidYMid meet">
      <path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"></path>
      <path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path>
      <path fill="#EEE" d="M12 5h12v26H12z"></path>
    </svg>
  ),
  uk: (props: LucideProps) => (
    <svg width="24px" height="24px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"
         aria-hidden="true" role="img" className="iconify iconify--twemoji" {...props}
         preserveAspectRatio="xMidYMid meet">
      <path fill="#00247D"
            d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"></path>
      <path fill="#CF1B2B"
            d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"></path>
      <path fill="#EEE"
            d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"></path>
      <path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"></path>
    </svg>
  ),
};
