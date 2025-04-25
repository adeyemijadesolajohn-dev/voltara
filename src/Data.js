import { iconImgs, iconIcon } from "./LoginAssets/LoginAssets";

export const navigationLinks = [
  {
    id: 1,
    title: "Customer",
    image: iconImgs.customer,
    icon: iconIcon.customerIcon,
  },
  {
    id: 2,
    title: "Account",
    image: iconImgs.account,
    icon: iconIcon.accountIcon,
  },
  {
    id: 3,
    title: "Billing/Payment",
    image: iconImgs.payment,
    icon: iconIcon.paymentIcon,
  },
  { id: 4, title: "Meter", image: iconImgs.meter, icon: iconIcon.meterIcon },
  {
    id: 5,
    title: "Partner",
    image: iconImgs.partner,
    icon: iconIcon.partnerIcon,
  },
  {
    id: 6,
    title: "Analysis",
    image: iconImgs.analysis,
    icon: iconIcon.analysisIcon,
  },
];

export const navigationLowerLinks = [
  {
    id: 7,
    title: "Support",
    image: iconImgs.support,
    icon: iconIcon.supportIcon,
  },
  {
    id: 8,
    title: "Settings",
    image: iconImgs.settings,
    icon: iconIcon.settingsIcon,
  },
  {
    id: 9,
    title: "Log Out",
    image: iconImgs.logout,
    icon: iconIcon.logoutIcon,
  },
];

export const customerSummary = [
  {
    id: 10,
    icon: iconImgs.clientProfile,
    title: "Name:",
    data: "John Doe",
  },
  {
    id: 11,
    icon: iconImgs.customerType,
    title: "Customer Type:",
    data: "Residential",
  },
  {
    id: 12,
    icon: iconImgs.occupantType,
    title: "Occupant Type:",
    data: "Tenant",
  },
  {
    id: 13,
    icon: iconImgs.status,
    title: "Status:",
    data: "Active",
  },
  {
    id: 14,
    icon: iconImgs.contact,
    title: "Contact Info:",
    data: "+234 803 456 7890",
  },
];

export const reportData = [
  {
    id: 15,
    day: "Sun",
    value1: 45,
    value2: null,
  },
  {
    id: 16,
    day: "Mon",
    value1: 45,
    value2: 60,
  },
  {
    id: 17,
    day: "Tue",
    value1: 45,
    value2: null,
  },
  {
    id: 18,
    day: "Wed",
    value1: 45,
    value2: null,
  },
  {
    id: 19,
    day: "Thurs",
    value1: 45,
    value2: null,
  },
  {
    id: 20,
    day: "Fri",
    value1: 78,
    value2: 84,
  },
  {
    id: 21,
    day: "Sat",
    value1: 95,
    value2: 69,
  },
];

export const budget = [
  {
    id: 22,
    title: "Subscriptions",
    type: "Automated",
    amount: 22000,
  },
  {
    id: 23,
    title: "Loan Payment",
    type: "Automated",
    amount: 16000,
  },
  {
    id: 24,
    title: "Foodstuff",
    type: "Automated",
    amount: 20000,
  },
  {
    id: 25,
    title: "Subscriptions",
    type: null,
    amount: 10000,
  },
  {
    id: 26,
    title: "Subscriptions",
    type: null,
    amount: 40000,
  },
];

export const subscriptions = [
  {
    id: 27,
    title: "LinkedIn",
    due_date: "23/12/04",
    amount: 20000,
  },
  {
    id: 28,
    title: "Netflix",
    due_date: "23/12/10",
    amount: 5000,
  },
  {
    id: 29,
    title: "DSTV",
    due_date: "23/12/22",
    amount: 2000,
  },
];

export const savings = [
  {
    id: 30,
    saving_amount: 250000,
    title: "Pay for next month fees",
    date_taken: "23/12/22",
    amount_left: 40000,
  },
];
