export const sampleChat = [
  {
    avatar: [
      "https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=",
    ],
    name: "Shruti",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=",
    ],
    name: "Summi",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: [
      "https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=",
    ],
    name: "Shruti",
    _id: "1",
  },
  {
    avatar: [
      "https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=",
    ],
    name: "Summi",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar:
        "https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=",
      name: "Shruti",
    },
    _id: "1",
  },
  {
    sender: {
      avatar:
        "https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=",
      name: "Summi",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "asdfv",
        url: "https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=",
      },
    ],
    content: "",
    _id: "abcde",
    sender: {
      _id: "user._id",
      name: "summi",
    },
    chat: "chatId",
    createdAt: "2025-03-12T00:00:00.000Z",
  },
  {
    attachments: [],
    content: "Good morning",
    _id: "abcdeg",
    sender: {
      _id: "1234",
      name: "summi",
    },
    chat: "chatId",
    createdAt: "2025-03-12T00:00:00.000Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "Ram",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQm9ylGquKOCdUtmdvJpwSr5wC96tubO3Yg&s",
      _id: "1",
      username: "ram09",
      friends: 20,
      groups: 5,
    },
    {
      name: "Rupali",
      avatar: "https://mastdp.com/img/cute-dp-for-girls/cute-dp-for-girls.webp",
      _id: "2",
      username: "rupali03",
      friends: 15,
      groups: 2,
    },
  ],
  chats: [
    {
      name: "Ram",
      avatar: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQm9ylGquKOCdUtmdvJpwSr5wC96tubO3Yg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQm9ylGquKOCdUtmdvJpwSr5wC96tubO3Yg&s",
      ],
      _id: "1",
      groupChat: false,
      members: [
        {
          _id: "1",
          avatar:
            "https://mastdp.com/img/cute-dp-for-girls/cute-dp-for-girls.webp",
        },
        {
          _id: "2",
          avatar:
            "https://mastdp.com/img/cute-dp-for-girls/cute-dp-for-girls.webp",
        },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Uma",
        avatar:
          "https://mastdp.com/img/cute-dp-for-girls/cute-dp-for-girls.webp",
      },
    },
  ],
  messages: [
    {
      attachments: [
        {
          public_id: "asbdd 2",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQm9ylGquKOCdUtmdvJpwSr5wC96tubO3Yg&s",
        },
      ],
      groupChat: false,
      content: "",
      _id: "asdafadfa",
      sender: {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQm9ylGquKOCdUtmdvJpwSr5wC96tubO3Yg&s",
        name: "ramu",
      },
      chat: "chatId",
      createdAt: "2024-02-12T10:41:30.630Z",
    },
  ],
};
