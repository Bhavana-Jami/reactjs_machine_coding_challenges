export const commentsData = [
    {
        id: 1,
        content: "This is 1st comment",
        likes: 2,
        timestamp: "12:33",
        replies: []
    },
    {
        id: 2,
        content: "This is 2nd comment",
        likes: 5,
        timestamp: "12:43",
        replies: [
            {
                id: 3,
                content: "This is 2-1 comment",
                likes: 200,
                timestamp: "12:33",
                replies: [
                    {
                        id: 4,
                        content: "This is 2-1-1 comment",
                        likes: 20,
                        timestamp: "12:33",
                        replies: []
                    }
                ]
            }
            , {
                id: 5,
                content: "This is 2-2 comment",
                likes: 2000,
                timestamp: "12:33",
                replies: []
            }
        ]
    },
    {
        id: 6,
        content: "This is 3rd comment",
        likes: 2,
        timestamp: "12:33",
        replies: [
            {
                id: 7,
                content: "This is 3-1 comment",
                likes: 2,
                timestamp: "12:33",
                replies: []
            }
        ]
    }
]