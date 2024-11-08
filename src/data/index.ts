import ManImage from "../../src/Assets/profileImage.jpg";
import Jira from "../../src/Assets/jira.png";
import Slack from "../../src/Assets/slack.png";
import Github from "../../src/Assets/github.png";
import Figma from "../../src/Assets/figma.png";

export const accountsList = [
  {
    id: 1,
    name: "Alice Green",
    email: "alice.green@example.com",
    role: "Admin",
    profilePicture: ManImage,
  },
  {
    id: 2,
    name: "David Brown",
    email: "david.brown@example.com",
    role: "User",
    profilePicture: ManImage,
  },
  {
    id: 3,
    name: "Eva White",
    email: "eva.white@example.com",
    role: "Editor",
    profilePicture: ManImage,
  },
  {
    id: 4,
    name: "Chris Black",
    email: "chris.black@example.com",
    role: "Editor",
    profilePicture: ManImage,
  },
  {
    id: 5,
    name: "Sophia Adams",
    email: "sophia.adams@example.com",
    role: "Editor",
    profilePicture: ManImage,
  },
  {
    id: 6,
    name: "Oliver Harris",
    email: "oliver.harris@example.com",
    role: "Editor",
    profilePicture: ManImage,
  },
  {
    id: 7,
    name: "Mason Clark",
    email: "mason.clark@example.com",
    role: "Editor",
    profilePicture: ManImage,
  },
  {
    id: 8,
    name: "Lily Lewis",
    email: "lily.lewis@example.com",
    role: "Editor",
    profilePicture: ManImage,
  },
  {
    id: 9,
    name: "Ethan Walker",
    email: "ethan.walker@example.com",
    role: "Editor",
    profilePicture: ManImage,
  },
  {
    id: 10,
    name: "Isabella Young",
    email: "isabella.young@example.com",
    role: "Editor",
    profilePicture: ManImage,
  },
  {
    id: 11,
    name: "James King",
    email: "james.king@example.com",
    role: "Editor",
    profilePicture: ManImage,
  },
  {
    id: 12,
    name: "Charlotte Scott",
    email: "charlotte.scott@example.com",
    role: "Editor",
    profilePicture: ManImage,
  },
  {
    id: 13,
    name: "Lewis",
    email: "lewis@example.com",
    role: "Editor",
    profilePicture: ManImage,
  },
  {
    id: 14,
    name: "Walker",
    email: "walker@example.com",
    role: "Editor",
    profilePicture: ManImage,
  },
  {
    id: 15,
    name: "Young",
    email: "young@example.com",
    role: "Editor",
    profilePicture: ManImage,
  },
  {
    id: 16,
    name: "King",
    email: "king@example.com",
    role: "Editor",
    profilePicture: ManImage,
  },
  {
    id: 17,
    name: "Scott",
    email: "scott@example.com",
    role: "Editor",
    profilePicture: ManImage,
  },
];

export const integrationList = [
  {
    id: 1,
    name: "Jira",
    suffix: "Notion",
    icon: Jira,
    badges: ["Link Preview", "Sync"],
    users: "Anyone in Acme Inc.",
  },
  {
    id: 2,
    name: "GitHub",
    suffix: "Notion",
    icon: Github,
    badges: ["Link Preview", "Sync"],
    users: "Anyone in Acme Inc.",
  },
  {
    id: 3,
    name: "Slack",
    suffix: "Notion",
    icon: Slack,
    badges: ["Link Preview"],
    users: "Anyone in Acme Inc.",
  },
  {
    id: 4,
    name: "Figma",
    suffix: "Notion",
    icon: Figma,
    badges: ["LINK PREVIEW"],
    users: "Anyone in Acme Inc.",
  },
];

export const notificationList = [
  {
    id: 1,
    title: "New comment on your post",
    description: "John Doe commented on your recent post.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    title: "Your project was updated",
    description: "The 'Marketing Campaign' project has been updated.",
    time: "5 hours ago",
    read: false,
  },
  {
    id: 3,
    title: "New team member added",
    description: "Jane Smith has joined your team.",
    time: "1 day ago",
    read: true,
  },
  {
    id: 4,
    title: "Reminder: Team meeting",
    description: "Don't forget about the team meeting at 3 PM today.",
    time: "1 day ago",
    read: true,
  },
];

export const auditLogList = [
  {
    id: 1,
    user: {
      name: "Chambers",
      email: "chambers@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Edited",
    target: "Private page",
    timestamp: "2022/11/05 11:23 PM",
  },
  {
    id: 2,
    user: {
      name: "Jackson Graham",
      email: "jackson.graham@gmail.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Viewed",
    target: "Secret Project Q4",
    timestamp: "2022/11/05 11:22 PM",
  },
  {
    id: 3,
    user: {
      name: "Deanna Curtis",
      email: "deanna.curtis@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Viewed",
    target: "OS",
    timestamp: "2022/11/05 11:21 PM",
  },
  {
    id: 4,
    user: {
      name: "Michelle Rivera",
      email: "michelle.rivera@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Exported",
    target: "Product Search",
    timestamp: "2022/11/05 11:10 PM",
  },
  {
    id: 5,
    user: {
      name: "Michael Mitc",
      email: "michael.mitc@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Downloaded",
    target: "Contract.pdf",
    timestamp: "2022/11/05 11:01 PM",
  },
  {
    id: 6,
    user: {
      name: "Nathan Roberts",
      email: "nathan.roberts@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Added",
    target: "12 members",
    timestamp: "2022/11/05 10:43 PM",
  },
  {
    id: 7,
    user: {
      name: "George Michaels",
      email: "george.michaels@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Edited",
    target: "Dashboard",
    timestamp: "2022/11/05 11:23 PM",
  },
  {
    id: 8,
    user: {
      name: "Samantha James",
      email: "samantha.james@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Reviewed",
    target: "Internal Docs",
    timestamp: "2022/11/05 11:20 PM",
  },
  {
    id: 9,
    user: {
      name: "Tommy Hale",
      email: "tommy.hale@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Uploaded",
    target: "Invoices",
    timestamp: "2022/11/05 11:10 PM",
  },
  {
    id: 10,
    user: {
      name: "Jessica Lee",
      email: "jessica.lee@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Shared",
    target: "Project Files",
    timestamp: "2022/11/05 11:05 PM",
  },
  {
    id: 11,
    user: {
      name: "Michaels",
      email: "michaels@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Edited",
    target: "Dashboard",
    timestamp: "2022/11/05 11:23 PM",
  },
  {
    id: 12,
    user: {
      name: "James",
      email: "james@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Reviewed",
    target: "Internal Docs",
    timestamp: "2022/11/05 11:20 PM",
  },
  {
    id: 13,
    user: {
      name: "Hale",
      email: "hale@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Uploaded",
    target: "Invoices",
    timestamp: "2022/11/05 11:10 PM",
  },
  {
    id: 14,
    user: {
      name: "Lee",
      email: "lee@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Shared",
    target: "Project Files",
    timestamp: "2022/11/05 11:05 PM",
  },
];
