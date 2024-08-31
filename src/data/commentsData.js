export const commentsData = [
  {
    id: 1,
    comment: "This is a comment",
    nestedComments: [],
  },
  {
    id: 2,
    comment: "Second comment",
    nestedComments: [
      {
        id: 4,
        comment: "Reply to second comment",
        nestedComments: [
          {
            id: 5,
            comment: "Reply to third comment",
            nestedComments: [
              {
                id: 6,
                comment: "Reply to fourth comment",
                nestedComments: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    comment: "This is another comment",
    nestedComments: [
      {
        id: 7,
        comment: "This is reply to last comment",
        nestedComments: [],
      },
    ],
  },
];
